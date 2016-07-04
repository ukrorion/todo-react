import React from 'react'
import { render } from 'react-dom'

import Item from './item';

var TodoBox = React.createClass({
  render: function() {
    return (
      <ul className="todoBox">
        Test
      </ul>
    );
  }
});

render(<TodoBox />, $('#app-root')[0]);
