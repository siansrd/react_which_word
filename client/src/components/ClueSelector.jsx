var React = require('react');

var ClueSelector = React.createClass({

  createSelector: function() {
    var options = this.props.clues.map(function(clue, index){
      return <option key={index} value={index}>{clue}</option>
    });
    return options;  
  },

  handleClueChange: function(event) {
    var newIndex = event.target.value;
    this.props.selectedClue(newIndex);
  },

  render: function(){

    if(!this.props.clues){
      return;
    }
    var options = this.createSelector();
    return (
      <select id="cluesDropdown" onChange={this.handleClueChange}>
        <option selected="true" disabled="disabled">Select Clue</option>
        {options}
      </select>
    )

  }


})

module.exports = ClueSelector;


// var options = this.props.words.map(function(word, index){
//   return <option key={index}>{word.title}</option>
// });
// return options;  