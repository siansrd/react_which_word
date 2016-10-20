var React = require('react');

var WordList = React.createClass({

  render: function(){

    var wordList = this.props.words.map(function(word, index){
      // return <Word title={word.title}/>

    })

    return (
        <h1>Test List</h1>
      )
  }

})

module.exports = WordList;