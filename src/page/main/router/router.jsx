import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from '../components/header/header';
import Banner from '../components/banner/banner';
import Footer from '../components/footer/footer';
import PlayList from '../components/playlist/playlist';
import Exception from '../components/exception/exception';
import Recharge from '../components/recharge/recharge';

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
                <Banner/>
                <PlayList/>
            </div>
        );
        const RechargePage = () => (
            <div>
                <Banner/>
                <Recharge/>
            </div>
        );
        return (
            <Router>
                <div>
                    <Header/>
                    <Switch>
                        <Route path="/" exact component={IndexPage}/>
                        <Route path="/recharge" exact component={RechargePage}/>
                        <Route component={Exception}/>
                    </Switch>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default router;