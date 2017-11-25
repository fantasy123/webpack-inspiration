//  源代码的入口文件
// 使用ES6的模块定义和渲染Greeter模块
import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

render(<Greeter />, document.getElementById('root'));
// const greeter = require('./Greeter'); 

// document.querySelector('#root').appendChild(greeter());