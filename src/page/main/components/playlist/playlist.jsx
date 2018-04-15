import React from 'react';
import './playlist.less';
import { Row, Col } from 'antd';
import PlayUserAccount from './playuseraccount';
import PlayGames from './playgames';

class playlist extends React.Component {
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
            <div className="mainPlayList">
                <Row>
                    <Col offset={3} span={18}>
                        <PlayUserAccount/>
                        <PlayGames/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default playlist;