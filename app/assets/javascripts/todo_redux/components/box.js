var store = appRedux.store;
var Item = appRedux.Item;

var nextIndex = 0;
appRedux.TodoBox = React.createClass({
  componentDidMount: function() {
    store.dispatch({
      type: 'FETCH_TASKS',
      url: this.props.url,
      store: store
    });
  },
  handleClick: function(){
    store.dispatch({
      type: 'ADD_TASK',
      description: "Some description here",
      id: nextIndex++,
      status: false
    });
  },
  render: function() {
    var todoList = this.props.data.map(function(task, index){
      return(
        <Item status={task.status} key={index} id={task.id}>{task.description}</Item>
      );
    }.bind(this));
    return (
      <div className="todoBox">
        {todoList}
        <input type="button" onClick={this.handleClick} value="Add Task"/>
      </div>
    );
  }
});