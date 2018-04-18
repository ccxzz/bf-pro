import React from 'react';
import { Link } from "react-router-dom";
import { Card, Divider, Avatar, Row, Col, Button } from 'antd';
import './mymoney.less'

class mymoney extends React.Component {
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
            <div className="mymoney">
                <Row>
                    <Col offset={3} span={18}>
                        <Row gutter={20}>
                            <Col span={12}>
                                <Card className="coinMoneyCard">
                                    <Row>
                                        <Col span={18}>
                                            <div className="coinBoxItem">
                                                <p>
                                                    <strong>比特币</strong> &nbsp;&nbsp;&nbsp;
                                                    <span>BTC</span>
                                                </p>
                                                <p>
                                                    持有：<span>12345</span>个
                                                </p>
                                                <p>
                                                    可用：<span>1111.0000</span> &nbsp;&nbsp;&nbsp; 锁定：<span>232333.0000</span>
                                                </p>
                                            </div>
                                        </Col>
                                        <Col className="coinImgBox" span={6}>
                                            <img className="coinImg" src="http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/btc.png"/>
                                        </Col>
                                    </Row>
                                    <Divider/>
                                    <Row>
                                        <Col className="coinOperation" span={24}>
                                            <Link to="/" className="coinOperationLink"><Button>充值</Button></Link>
                                            <Link to="/recharge" className="coinOperationLink"><Button>提现</Button></Link>
                                            <Link to="/recharge" className="coinOperationLink"><Button>交易</Button></Link>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col span={12}>
                                <Card className="coinMoneyCard">
                                    <Row>
                                        <Col span={18}>
                                            <div className="coinBoxItem">
                                                <p>
                                                    <strong>比特币</strong> &nbsp;&nbsp;&nbsp;
                                                    <span>BTC</span>
                                                </p>
                                                <p>
                                                    持有：<span>12345</span>个
                                                </p>
                                                <p>
                                                    可用：<span>1111.0000</span> &nbsp;&nbsp;&nbsp; 锁定：<span>232333.0000</span>
                                                </p>
                                            </div>
                                        </Col>
                                        <Col className="coinImgBox" span={6}>
                                            <img className="coinImg" src="http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/btc.png"/>
                                        </Col>
                                    </Row>
                                    <Divider/>
                                    <Row>
                                        <Col className="coinOperation" span={24}>
                                            <Link to="/" className="coinOperationLink"><Button>充值</Button></Link>
                                            <Link to="/recharge" className="coinOperationLink"><Button>提现</Button></Link>
                                            <Link to="/recharge" className="coinOperationLink"><Button>交易</Button></Link>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default mymoney;