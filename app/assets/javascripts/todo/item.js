var DeleteButton = app.DeleteButton;

app.Item = React.createClass({
  getInitialState: function(){
    return {status: this.props.status}
  },
  handleCheckbox: function(){
    $.ajax({
      url: '/tasks/'+this.props.id,
      type: 'put',
      dataType: 'json',
      success: function(data){
        this.setState({status: !this.state.status});
      }.bind(this),
      error: function(error){
        console.log(error)
      }.bind(this)
    });
  },
  handleDeleteTask: function() {
    $.ajax({
      url: '/tasks/'+this.props.id,
      type: 'delete',
      dataType: 'json',
      success: function(data){
        this.props.onDelete(data);
      }.bind(this),
      error: function(){
        debugger;
      }.bind(this)
    });
  },
  render: function() {
    return (
      <li className="listItem" ref={this.state.refer} >
        <input name="status" type="checkbox" checked={this.state.status} onChange={this.handleCheckbox} />
        {this.props.children}
        <DeleteButton onClick={this.handleDeleteTask} />
      </li>
    );
  }
});

// TODO fix issue with geting state of previous element's checkbox after deleting element.