// var config = require('./config.json');  // 引入包含打招呼内容的json文件 

// module.exports = function() {
//     var greet = document.createElement('div');
//     greet.textContent = config.greetText;
//     return greet;
// }

import React, {Component} from 'react';
import config from './config.json';

class Greeter extends Component {
    render() {
        return (    // 返回一个React组件
            <div>
                {config.greetText}
            </div>
        )
    }
}

export default Greeter