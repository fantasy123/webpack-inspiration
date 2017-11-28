//  源代码的入口文件
// 使用ES6的模块定义和渲染Greeter模块
import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

 // 使用require导入CSS文件(通常情况下，css会和js打包到同一个文件中)
import './main.css';   

render(<Greeter />, document.getElementById('root'));
// const greeter = require('./Greeter'); 

// document.querySelector('#root').appendChild(greeter());