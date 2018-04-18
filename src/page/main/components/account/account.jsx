import React from 'react';
import { Row, Col } from 'antd';
import AccountMsg from './accountmsg';
import './account.less'

class account extends React.Component {
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
            <div className="account">
                <Row>
                    <Col offset={3} span={18}>
                        <AccountMsg/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default account;