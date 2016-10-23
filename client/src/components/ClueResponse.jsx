var React = require('react');

var ClueResponse = function(props) {

  console.log("props.response", props.response)
  if (props.response === !null) {
    var setResponse = props.response ? "Yes" : "No";
  console.log("response string", setResponse)
  }
  
  return (
    <h3>{setResponse}</h3>
  )
}

module.exports = ClueResponse;