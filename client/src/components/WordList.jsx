var React = require('react');
var Word = require('./Word');

var WordList = React.createClass({

  render: function(){

    var wordList = this.props.words.map(function(word, index){
      return <Word title={word.title} key={index}/>
    })

    return (
        <div>{wordList}</div>
      )
  }

})

module.exports = WordList;