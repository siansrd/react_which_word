var React = require('react');


var GuessResponse = function(props) {

    if(props.response == null) {
      return <p></p>
    };
    return <p>{props.response}</p>

}
 module.exports = GuessResponse;