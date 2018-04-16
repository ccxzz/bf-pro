import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Register from '../components/register/register';
import Login from '../components/login/login';
import RePassword from '../components/repassword/repassword';
import LOGO_URL from '../static/images/coinpay-logo.png';

class router extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        const Logo = () => (
            <div className="loginLogo">
                <img className="logo"  src={LOGO_URL}/>
                <span className="websiteName">网站名称</span>
            </div>
        );
        return (
            <Router>
                <div className="formBox">
                    <Logo/>
                    <Switch>
                        <Route path="/" exact component={Login}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/repassword" component={RePassword}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default router;