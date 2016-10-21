var React = require('react');
var WordList = require('./WordList');
var ClueSelector = require('./ClueSelector');
var GuessSelector = require('./GuessSelector');

var Game = React.createClass({

    getInitialState: function(){
      return { words: [], answer: null }
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

   render: function() {
    return (
      <div>
        <div className="wordListWrap">
          <h2>Words</h2>
          <WordList words={this.state.words}/>
        </div>
        <div className="questionsWrap">
          <h2>Clues</h2>
          <ClueSelector words={this.state.words}/>
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