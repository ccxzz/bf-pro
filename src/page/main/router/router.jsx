import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import BaseReducer from '../store/reducer/basereducer'

import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from '../components/header/header';
import Banner from '../components/banner/banner';
import Footer from '../components/footer/footer';
import PlayList from '../components/playlist/playlist';
import Exception from '../components/exception/exception';
import Recharge from '../components/recharge/recharge';
import Message from '../components/message/message';
import Account from '../components/account/account';
import MyMoney from '../components/mymoney/mymoney';

let store = createStore(BaseReducer);

class router extends React.Component {
    constructor() {
        super();
        this.state = {
            a: 1
        };
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        const IndexPage = () => (
            <div>
                <Header data={{'selectMenu': 'home'}} />
                <Banner/>
                <PlayList/>
            </div>
        );
        const RechargePage = () => (
            <div>
                <Header data={{'selectMenu': 'recharge'}} />
                <Banner/>
                <Recharge/>
            </div>
        );
        const ExceptionPage = () => (
            <div>
                <Header data={{'selectMenu': 'home'}} />
                <Exception/>
            </div>
        );
        const MessagePage = () => (
            <div>
                <Header data={{'selectMenu': 'message'}} />
                <Message/>
            </div>
        );
        const AccountPage = () => (
            <div>
                <Header data={{'selectMenu': 'account'}} />
                <Account/>
            </div>
        );
        const MyMoneyPage = () => (
            <div>
                <Header data={{'selectMenu': 'money'}} />
                <MyMoney/>
            </div>
        );
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Switch>
                            <Route path="/" exact component={IndexPage}/>
                            <Route path="/recharge" component={RechargePage}/>
                            <Route path="/message" component={MessagePage}/>
                            <Route path="/account" component={AccountPage}/>
                            <Route path="/money" component={MyMoneyPage}/>
                            <Route component={ExceptionPage}/>
                        </Switch>
                        <Footer/>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default router;