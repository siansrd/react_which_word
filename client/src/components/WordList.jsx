var React = require('react');
var Word = require('./Word');

var WordList = React.createClass({

  createList: function(){
    var wordList = this.props.words.map(function(word, index){
      return <Word title={word.title} key={index}/>
    })
    return wordList;
  },

  render: function(){
    var wordList = this.createList();
    return (
        <div>{wordList}</div>
      )
  }

})

module.exports = WordList;