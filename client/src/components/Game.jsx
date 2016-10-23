var React = require('react');
var WordList = require('./WordList');
var ClueSelector = require('./ClueSelector');
var ClueResponse = require('./ClueResponse');
var GuessSelector = require('./GuessSelector');
var GuessResponse = require('./GuessResponse')

var Game = React.createClass({

  getInitialState: function(){

    const questions = [
      "Is is a species of bird?", 
      "Is it lower than usual?", 
      "Is it another word for 'crazy'?",
      "Is it another word for a joke?",
      "Is it a type of ice-cream?",
      "Can you play it?"
    ]

    return { 
      correctAnswer: null,
      words: [], 
      clues: questions, 
      clueResponse: null, 
      selectedClue: null
    }
  },

  componentDidMount: function() {
      var url = "api/words";
      var request = new XMLHttpRequest();
      request.open("GET", url);
      request.onload = function() {
        var data = JSON.parse(request.responseText);
        this.setState({ words: data })
      }.bind(this);
      request.send();
  },

  componentDidUpdate: function() {
    if (this.state.correctAnswer === null) {
    const randomWordObj = this.state.words[Math.floor(Math.random() * this.state.words.length)];
    this.setState({correctAnswer: randomWordObj})
    console.log(randomWordObj)
    }
  }, 

  setSelectedClue: function(index) {
    this.setState({ selectedClue: index }, function giveResponse() {
      console.log(this.state.correctAnswer.clue[this.state.selectedClue]);
      
      var index = this.state.selectedClue;
      var response = this.state.correctAnswer.clue[index];
      this.setState({clueResponse: response});
      
      console.log("states clueResponse", this.state.clueResponse);
    }.bind(this)); 
  },

  checkGuess: function(guessId) {
    console.log(guessId);
  },

  render: function() {
    return (
      <div>
        <div className="column">
          <h2>Words</h2>
          <WordList words={this.state.words}/>
        </div>
        <div className="column">
          <h2>Clues</h2>
          <ClueSelector words={this.state.words} clues={this.state.clues} selectedClue={this.setSelectedClue}/>
          <ClueResponse response={this.state.clueResponse}/>
        </div>
        <div className="column">
          <h2>Guess</h2>
          <GuessSelector words={this.state.words} makeGuess={this.checkGuess}/>
          <GuessResponse/>
        </div>
      </div>
    )
  }

})

module.exports = Game;