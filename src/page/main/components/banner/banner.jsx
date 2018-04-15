import React from 'react';
import { Carousel } from 'antd';
import './banner.less'

class banner extends React.Component {
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
            <div className="mainBanner">
                <Carousel autoplay>
                    <div><h3>预留广告位1</h3></div>
                    <div><h3>预留广告位2</h3></div>
                    <div><h3>预留广告位3</h3></div>
                    <div><h3>预留广告位4</h3></div>
                </Carousel>
            </div>
        );
    }
}

export default banner;