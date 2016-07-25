
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
    let active = this.props.currentFilter === this.props.filter ? 'active' : ''
    return (
      <li role="presentation" className={active}><a href="#" onClick={this.handleClick.bind(this)} >{this.props.children}</a></li>
    );
  }
}

export default FilterLink;



