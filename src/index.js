import React from "react";
import ReactDOM from "react-dom";

import './index.css';

import HelloMessage from './test/test';
import Profile from './pages/profile';

class CalcMessage extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const props = {
            name: 'wenda',
            age: 20
        }

        return (<div className="wrap">
            <HelloMessage />
            <Profile {...props} />
        </div>);
    }
}

let mountNode = document.getElementById("app");

ReactDOM.render(<CalcMessage />, mountNode);