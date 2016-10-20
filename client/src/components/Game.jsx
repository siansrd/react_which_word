var React = require('react');
var WordList = require('./WordList');

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
      <WordList words={this.state.words}/>
    )
   }

})

module.exports = Game;