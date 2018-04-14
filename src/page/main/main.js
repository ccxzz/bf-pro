import React from 'react';
import { render } from 'react-dom';
import './main.less'
import { Button } from 'antd'
var myDivElement = <div><Button type="primary">123123123</Button></div>;
render(myDivElement, document.getElementById('app'));