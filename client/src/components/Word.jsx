var React = require('react');
import classnames from 'classnames';

var Word = React.createClass({

  getInitialState: function() {
    return { crossed: false }
  },

  handleClick: function() {
    var setCrossed = !this.state.crossed;
    this.setState({crossed: setCrossed});
  },

  render: function(){
    var classes = classnames({crossed: this.state.crossed});
    return (
      <div>
        <p className={classes} onClick={this.handleClick}>{this.props.title}</p>
      </div>
    )
  }
})

module.exports = Word;