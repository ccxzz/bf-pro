import React from 'react';
import { Card, Divider, Avatar, Row, Col } from 'antd';

class playuseraccount extends React.Component {
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
            <div className="playUserAccount">
                <Row gutter={20}>
                    <Col span={8}>
                        <Card style={{ width: '100%' }}>
                            <p>
                                <Avatar icon="user" /> &nbsp; 123989882
                            </p>
                            <Divider/>
                            <p>
                                钱包信息...
                            </p>
                        </Card>
                    </Col>
                    <Col span={16}>
                        <Card style={{ width: '100%' }}>
                            <p className="p-line-height">
                                展示其他信息
                            </p>
                            <Divider/>
                            <p>
                                .........
                            </p>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default playuseraccount;