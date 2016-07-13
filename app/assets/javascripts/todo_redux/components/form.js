var boxActions = appRedux.BoxActions;

appRedux.TodoForm = React.createClass({
  getInitialState: function() {
      return { description: '' };
  },
  handleDescriptionChange: function(e) {
    this.setState({description: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var description = this.state.description.trim();
    if(!description)
      return;

    boxActions.add_task(description)
    this.setState({ description: '' });
  },
  render: function(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Enter something" value={this.state.description} onChange={this.handleDescriptionChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
})

