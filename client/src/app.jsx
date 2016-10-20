var React = require('react');
var ReactDOM = require('react-dom');
var Game = require('./components/Game');

window.onload = function(){
  ReactDOM.render(
    <Game/>,
    document.getElementById('app')
  );
}
