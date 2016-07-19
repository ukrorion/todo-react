'use strict';

import { render } from 'react-dom'
import React from 'react'

import { Store } from './store'
import { TodoBox } from './components/box'

const renderApp = () => {
  render(<TodoBox data={Store.getState()} url="/tasks" />, document.getElementById('app-root'));
};

Store.subscribe(renderApp);
renderApp();