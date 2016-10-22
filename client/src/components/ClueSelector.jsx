var React = require('react');

var ClueSelector = React.createClass({

  createSelector: function() {
    var options = this.props.clues.map(function(clue, index){
      return <option key={index}>{clue}</option>
    });
    return options;  
  },

  

  render: function(){

    if(!this.props.clues){
      return;
    }
    var options = this.createSelector();
    return (
      <select id="cluesDropdown">{options}</select>
    )

  }


})

module.exports = ClueSelector;


// var options = this.props.words.map(function(word, index){
//   return <option key={index}>{word.title}</option>
// });
// return options;  