import React from "react";
import ReactDOM from "react-dom";

import './index.css';

import HelloMessage from './test/test';

const pages = {
    about: import('./pages/about'),
    blog: import('./pages/blog')
};

function renderPage(name){
    // 延迟加载请求页面。
    return pages[name].then(function(page){
        return page;
    })
}

class CalcMessage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            calcNumber: 0
        }
        this.calcCallback = this.calcCallback.bind(this);
    }
    calcCallback(e){
        this.setState({calcNumber: e.target.value === 0 ? e.target.value : e.target.value * 10})
    }
    render() {
        const { calcNumber } = this.state;
        return (<div className="wrap">
            <HelloMessage />
            <input type="number" placeholder="请输入一个数字" onChange={this.calcCallback} />
            <input type="text" value={calcNumber} />
        </div>);
    }
}

let mountNode = document.getElementById("app");

ReactDOM.render(<CalcMessage />, mountNode);