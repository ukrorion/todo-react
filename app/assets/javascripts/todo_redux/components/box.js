var store = appRedux.store;
var Item = appRedux.Item;
var TodoForm = appRedux.TodoForm;
var boxActions = appRedux.BoxActions;

var nextIndex = 0;
appRedux.TodoBox = React.createClass({
  componentDidMount() {
    boxActions.fetch_tasks(this)
  },
  render: function() {
    var todoList = this.props.data.map(function(task, index){
      return(
        <Item status={task.status} key={index} id={task.id}>{task.description}</Item>
      );
    }.bind(this));
    return (
      <div className="app">
        <TodoForm />
        <ul className="todoBox">
          {todoList}
        </ul>
      </div>
    );
  }
});