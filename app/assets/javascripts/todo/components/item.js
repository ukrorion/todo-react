
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
      <li className="listItem row" >
        <div className="col-lg-1">
          <input name="status" type="checkbox" checked={this.props.status} onChange={this.handleChecked} />
        </div>
        <div className="description col-lg-5">
          {this.props.children}
        </div>
        <div className="col-lg-1">
          <input type="button" value="Delete" onClick={this.handleDelete} className='btn btn-default btn-sm'/>
        </div>
      </li>
    );
  }
});