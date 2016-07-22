
import React from 'react';
import Store from './../store'

class FilterLink extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick(){
    Store.dispatch({
      type: this.props.filter
    });
  }
  render() {
    if(this.props.currentFilter === this.props.filter) {
      return <span>{this.props.children}</span>;
    }
    return (
      <a href="#" onClick={this.handleClick.bind(this)} >{this.props.children}</a>
    );
  }
}

export default FilterLink;



