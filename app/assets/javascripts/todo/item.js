var DeleteButton = app.DeleteButton;

app.Item = React.createClass({
  handleDeleteTask: function() {
    $.ajax({
      url: '/tasks/'+this.props.id,
      type: 'delete',
      dataType: 'json',
      success: function(data){
        debugger;
      }.bind(this),
      error: function(){
        debugger;
      }.bind(this)
    });
  },
  render: function() {
    return (
      <li className="listItem" id={this.props.id} >
        <input name="status" type="checkbox" checked={this.props.status} readOnly={true} />
        {this.props.children}
        <DeleteButton onClick={this.handleDeleteTask} />
      </li>
    );
  }
});
