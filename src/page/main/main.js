import React from 'react';
import { render } from 'react-dom';
import BaseRouter from './router/router'
import './main.less'

render(<BaseRouter />, document.getElementById('app'));