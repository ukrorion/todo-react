
import React from 'react'
import { BoxActions } from './../actions/todo_actions'
import { Item } from './item'
import TodoForm from './form'

export const TodoBox = React.createClass({
  componentDidMount() {
    BoxActions.fetch_tasks(this)
  },
  render() {
    var todoList = this.props.data.map((task, index) => {
      return(
        <Item status={task.status} key={index} id={task.id}>{task.description}</Item>
      );
    });

    return (
      <div className="app row">
        <div className="col-lg-8 col-lg-offset-2">
          <TodoForm />
          <ul className="todoBox">
            {todoList}
          </ul>
        </div>
      </div>
    );
  }
});