var React = require('react');

var GuessSelector = React.createClass({

  createSelector: function() {
    var options = this.props.words.map(function(word, index){
      return <option key={index} value={word.id}>{word.title}</option>
    });
    return options;  
  },

  handleGuessChange: function(event, index) {
    var guessId = event.target.value;
    this.props.makeGuess(guessId);
  },

  render: function(){

    var options = this.createSelector();
    return (
      <select id="wordsDropdown" onChange={this.handleGuessChange}>
        <option selected="true" disabled="disabled">Make Guess</option>
        {options}
      </select>
    )
  }

})

module.exports = GuessSelector;