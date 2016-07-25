
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

    let todoList = '';
    if (filteredTasks.length > 0){
      todoList = filteredTasks.map((task, index) => {
        return(
          <Item status={task.status} key={index} id={task.id}>{task.description}</Item>
        );
      });
    } else {
      todoList = <h3>No tasks to display</h3>
    }


    return (
      <div className="app row">
        <div className="col-lg-8 col-lg-offset-2">
          <TodoForm />
          <div className="row">
            <ul className="nav nav-tabs col-lg-12">
              <FilterLink filter="SHOW_ALL" currentFilter={Filter}>Show all</FilterLink>
              <FilterLink filter="SHOW_DONE" currentFilter={Filter}>Show done</FilterLink>
              <FilterLink filter="SHOW_ACTIVE" currentFilter={Filter}>Show active</FilterLink>
            </ul> 
          </div>
          <ul className="todoBox">
            {todoList}
          </ul>
        </div>
      </div>
    );
  }
});