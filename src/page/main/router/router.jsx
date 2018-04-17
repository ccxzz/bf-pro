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

let store = createStore(BaseReducer);

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
        const IndexPage = () => (
            <div>
                <Header data={{'selectMenu': 'home'}}/>
                <Banner/>
                <PlayList/>
            </div>
        );
        const RechargePage = () => (
            <div>
                <Header data={{'selectMenu': 'recharge'}}/>
                <Banner/>
                <Recharge/>
            </div>
        );
        const ExceptionPage = () => (
            <div>
                <Header data={{'selectMenu': 'home'}}/>
                <Exception/>
            </div>
        );
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Switch>
                            <Route path="/" exact component={IndexPage}/>
                            <Route path="/recharge" exact component={RechargePage}/>
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