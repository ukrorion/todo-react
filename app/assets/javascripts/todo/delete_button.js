app.DeleteButton = React.createClass({
  handleClick: function(){
    this.props.onClick();
  },
  render: function() {
      return (
        <input type="button" className="deleteButton" onClick={this.handleClick} value="Delete" />
      );
  }
});
