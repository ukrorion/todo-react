
import React from 'react';
import BoxActions from './../actions/todo_actions';
import { Item } from './item';
import TodoForm from './form';
import FilterLink from './filter_link';

const useFilter = (tasks, filter) => {
  switch(filter){
    case 'SHOW_ALL':
      return tasks;
    case 'SHOW_DONE':
      return tasks.filter(task => task.status);
    case 'SHOW_ACTIVE':
      return tasks.filter(task => !task.status);
    default:
      return tasks;
  }
}

export const TodoBox = React.createClass({
  componentDidMount() {
    BoxActions.fetch_tasks(this)
  },
  render() {
    const {Tasks, Filter} = this.props
    const filteredTasks = useFilter(Tasks, Filter);
    let todoList = filteredTasks.map((task, index) => {
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
        <div className="col-lg-8 col-lg-offset-2">
          <FilterLink filter="SHOW_ALL" currentFilter={Filter}>Shaw all</FilterLink> |
          <FilterLink filter="SHOW_DONE" currentFilter={Filter}>Shaw done</FilterLink> |
          <FilterLink filter="SHOW_ACTIVE" currentFilter={Filter}>Shaw active</FilterLink>
        </div> 
      </div>
    );
  }
});