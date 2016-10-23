var React = require('react');

var ClueResponse = function(props) {

  if (props.response == null) {
    return <p></p>
  };

  var setResponse = props.response ? "Yes" : "No";
  
  return (
    <h3>{setResponse}</h3>
  )
}

module.exports = ClueResponse;