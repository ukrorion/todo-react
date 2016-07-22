
import React from 'react'
import BoxActions from './../actions/todo_actions'

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
      <div className="row">
        <div className="col-lg-5 col-lg-offset-1">
          <form onSubmit={this.handleSubmit}>
            <div className="input-group">
              <input type="text" placeholder="Enter something" value={this.state.description} onChange={this.handleDescriptionChange} className="form-control" />
              <span className="input-group-btn">
                <input type="submit" value="Submit" className="btn btn-primary" />
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  }
});