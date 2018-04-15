import React from 'react';
import './playlist.less';
import { Row, Col } from 'antd';
import PlayUserAccount from './playuseraccount'

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
                    </Col>
                </Row>
            </div>
        );
    }
}

export default playlist;