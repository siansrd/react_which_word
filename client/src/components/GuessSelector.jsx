var React = require('react');

var GuessSelector = React.createClass({

  createSelector: function() {
    var options = this.props.words.map(function(word, index){
      return <option key={index}>{word.title}</option>
    });
    return options;  
  },

  render: function(){

    var options = this.createSelector();
    return (
      <select id="wordsDropdown">{options}</select>
    )
  }

})

module.exports = GuessSelector;