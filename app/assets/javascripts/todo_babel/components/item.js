
import React from 'react'
import { BoxActions } from './../actions/todo_actions'

export const Item = React.createClass({
  handleChecked(){
    BoxActions.toggle_task(this);
  },
  handleDelete(){
    BoxActions.delete_task(this);
  },
  render() {
    return (
      <li className="listItem" >
        <input name="status" type="checkbox" checked={this.props.status} onChange={this.handleChecked} />
        {this.props.children}
        <input type="button" value="Delete" onClick={this.handleDelete} />
      </li>
    );
  }
});