'use strict';

import { render } from 'react-dom'
import React from 'react'
import { TodoBox } from './components/box'

render(
  <TodoBox />,
  document.getElementById('app-root')
);