import React from 'react';
import { Row, Col } from 'antd';
import './header.less';
import MenuItem from './menuitem';
import LOGO_URL from '../../static/images/coinpay-logo.png'


class header extends React.Component {
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
            <div className="headerMenu">
                <Row>
                    <Col span={4}>
                        <img className="logo"  src={LOGO_URL}/>
                        <span className="websiteName">网站名称</span>
                    </Col>
                    <Col span={14}>
                        <MenuItem data={this.props.data}/>
                    </Col>
                    <Col span={6}>
                        <div className="userLogin">
                            游客
                            <span className="text-orange">123456</span> /
                            <a href="/html/index.html#/">登录</a>or
                            <a href="/html/index.html#/register">注册</a>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default header;