// var config = require('./config.json'); 

// module.exports = function() {
//     var greet = document.createElement('div');
//     greet.textContent = config.greetText;
//     return greet;
// }

import React, {Component} from 'react';
import config from './config.json'; // 拿到config对象

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