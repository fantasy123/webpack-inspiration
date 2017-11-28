// var config = require('./config.json'); 

// module.exports = function() {
//     var greet = document.createElement('div');
//     greet.textContent = config.greetText;
//     return greet;
// }

import React, {Component} from 'react';
import config from './config.json'; // 拿到config对象
import styles from './Greeter.css'; // 导入.root

class Greeter extends Component {
    render() {
        return (    // 返回一个React组件 添加一个类名
            <div className={styles.root}>   
                 {config.greetText}
             </div>
        )
    }
}

export default Greeter