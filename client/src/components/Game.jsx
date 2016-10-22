var React = require('react');
var WordList = require('./WordList');
var ClueSelector = require('./ClueSelector');
var GuessSelector = require('./GuessSelector');

var Game = React.createClass({

  getInitialState: function(){

    const questions = [
      "Select a clue",
      "Is is a species of bird?", 
      "Is it lower than usual?", 
      "Does it mean 'crazy'?",
      "Is it another word for joke?",
      "Is it a type of ice-cream?",
      "Can you play it?"
    ]

    return { 
      correctAnswer: null,
      words: [], 
      clues: questions, 
      answer: null, 
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
    }
  }, 

  setSelectedClue: function(index) {
    this.setState({ selectedClue: index }, function afterChange() {
      // TODO: call the the answer to the clue
    });
    
  },


  changeTitle: function changeTitle (event) {
      this.setState({ title: event.target.value }, function afterTitleChange () {
        this.validateTitle();
      });
    },



  render: function() {
    return (
      <div>
        <div className="wordListWrap">
          <h2>Words</h2>
          <WordList words={this.state.words}/>
        </div>
        <div className="questionsWrap">
          <h2>Clues</h2>
          <ClueSelector words={this.state.words} clues={this.state.clues} selectedClue={this.setSelectedClue}/>
        </div>
        <div className="guessWrap">
          <h2>Guess</h2>
          <GuessSelector words={this.state.words}/>
        </div>
      </div>
    )
  }

})

module.exports = Game;