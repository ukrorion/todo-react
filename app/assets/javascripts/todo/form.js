app.TodoForm = React.createClass({
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

    $.ajax({
      url: '/tasks',
      type: 'post',
      dataType: 'json',
      data: {'task' : {'description' : description}},
      success: function(data){
        this.props.onTaskSubmit(data);
      }.bind(this),
      error: function(error){
        console.log(error)
      }.bind(this)
    });
    
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