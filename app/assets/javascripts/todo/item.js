var DeleteButton = app.DeleteButton;

app.Item = React.createClass({
  handleCheckbox: function(){
    $.ajax({
      url: '/tasks/'+this.props.id,
      type: 'put',
      dataType: 'json',
      success: function(data){
        this.props.onChecked(data);
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
      <li className="listItem" >
        <input name="status" type="checkbox" checked={this.props.status} onChange={this.handleCheckbox} />
        {this.props.children}
        <DeleteButton onClick={this.handleDeleteTask} />
      </li>
    );
  }
});
