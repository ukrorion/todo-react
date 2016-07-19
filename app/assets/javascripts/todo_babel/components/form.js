
import React from 'react'
import { BoxActions } from './../actions/todo_actions'

export default React.createClass({
  getInitialState() {
      return { description: '' };
  },
  handleDescriptionChange(e) {
    this.setState({description: e.target.value});
  },
  handleSubmit(e) {
    e.preventDefault();
    let description = this.state.description.trim();
    if(!description)
      return;

    BoxActions.add_task(description);
    this.setState({ description: '' });
  },
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Enter something" value={this.state.description} onChange={this.handleDescriptionChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
});