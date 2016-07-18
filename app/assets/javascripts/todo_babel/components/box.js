
import React from 'react'
import { BoxActions } from './../actions/todo_actions'
import { Item } from './item'

export const TodoBox = React.createClass({
  componentDidMount() {
    BoxActions.fetch_tasks(this)
  },
  render() {
    // var todoList = this.props.data.map(function(task, index) {
    //   return (
    //     <Item status={task.status} key={index} id={task.id}>{task.description}</Item>
    //   );
    // }.bind(this));
    var todoList = this.props.data.map(function(task, index){
      return(
        <Item status={task.status} key={index} id={task.id}>{task.description}</Item>
      );
    }.bind(this));

    return (
      <div className="app">
        <div className="todoBox">
          {todoList}
        </div>
      </div>
    );
  }
});