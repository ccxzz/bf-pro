import React from 'react';
import { Card, Divider, Avatar, Row, Col, Button } from 'antd';

class accountmsg extends React.Component {
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
                <Row className="mg-b-20" gutter={20}>
                    <Col span={8}>
                        <Card style={{ width: '100%' }}>
                            <p>
                                <Avatar icon="user" /> &nbsp; 123989882
                            </p>
                            <Divider/>
                            <p>
                                账户资料....
                            </p>
                        </Card>
                    </Col>
                    <Col span={16}>
                        <Card style={{ width: '100%' }}>
                            <p className="p-line-height">
                                <Avatar icon="bars" /> 资产信息
                            </p>
                            <Divider/>
                            <p>
                                .........
                            </p>
                        </Card>
                    </Col>
                </Row>
                <Row className="mg-b-20">
                    <Card style={{ width: '100%' }} title="安全设置">
                        <Row gutter={20}>
                            <Col span={12}>
                                <div className="accountSetItem">
                                    <Avatar icon="lock" /> &nbsp; 密码设置
                                    <Button className="accountBtn">修改密码</Button>
                                    <p className="accountSetText">简单介绍..............</p>
                                </div>
                            </Col>
                            <Col span={12}>
                                <div className="accountSetItem">
                                    <Avatar icon="lock" /> &nbsp; Google设置
                                    <Button className="accountBtn">绑定Google账户</Button>
                                    <p className="accountSetText">简单介绍..............</p>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Row>
            </div>
        );
    }
}

export default accountmsg;