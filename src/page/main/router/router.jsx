import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from '../components/header/header';
import Banner from '../components/banner/banner';
import Footer from '../components/footer/footer';
import PlayList from '../components/playlist/playlist';

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
        return (
            <Router>
                <div>
                    <Route path="/" component={Header} />
                    <Route path="/" component={Banner} />
                    <Route path="/" component={PlayList} />
                    <Route path="/" component={Footer} />
                </div>
            </Router>
        );
    }
}

export default router;