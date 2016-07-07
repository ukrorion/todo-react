var Item = app.Item;
var TodoForm = app.TodoForm;

var TodoBox = React.createClass({
  getInitialState: function() {
      return {data: []};
  },
  handleDelete: function(taskToDelete){
    var indexToDelete = this.state.data.findIndex(function(el){
      return el.id == taskToDelete.id
    });
    var _data = this.state.data
    _data.splice(indexToDelete,1);
    this.setState({data:_data});
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({data : data});
      }.bind(this),
      error: function(xhr, status, error){
        console.log(error);
      }.bind(this)
    });
  },
  handleTaskSubmit: function(data){
    var updated_data = this.state.data;
    updated_data.push(data);
    this.setState({data: updated_data});
  },
  render: function() {
    var todoList = this.state.data.map(function(task, index){
      return(
        <Item status={task.status} key={index} id={task.id} onDelete={this.handleDelete}>{task.description}</Item>
      );
    }.bind(this));
    return (
      <div>
        <TodoForm onTaskSubmit={this.handleTaskSubmit} />
        <ul className="todoBox">
          {todoList}
        </ul>
      </div>
    );
  }
});

ReactDOM.render(<TodoBox url='/tasks' data={[]} />, $('#app-root')[0]); 
