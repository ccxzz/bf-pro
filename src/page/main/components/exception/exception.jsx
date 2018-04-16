import React from 'react';
import { Link } from "react-router-dom";
import './exception.less'
import Exception404 from '../../static/images/page404.svg'

class exception extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="exception">
                <img src={Exception404} className="exceptionImg"/>
                <div className="exception404-left">
                    <h1>404</h1>
                    <p>抱歉，你访问的页面不存在</p>
                    <Link to="/">返回首页</Link>
                </div>
            </div>
        );
    }
}

export default exception;