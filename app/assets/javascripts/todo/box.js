var Item = app.Item;
var TodoForm = app.TodoForm;

var task = [
  { description: "Test description#1", status: false},
  { description: "Test description#2", status: false},
  { description: "Test description#3", status: false}
]

var TodoBox = React.createClass({
  render: function() {
    var todoList = this.props.data.map(function(task, index){
      return(
        <Item status={task.status} key={index}>{task.description}</Item>
      );
    });
    return (
      <div>
        <TodoForm />
        <ul className="todoBox">
          {todoList}
        </ul>
      </div>
    );
  }
});

ReactDOM.render(<TodoBox data={task}/>, $('#app-root')[0]); 
