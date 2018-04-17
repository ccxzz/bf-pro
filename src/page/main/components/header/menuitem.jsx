import React from 'react';
import { Menu } from 'antd';
import { Link } from "react-router-dom";

const SubMenu = Menu.SubMenu;

class menuitem extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    // handleClick = (e) => {
    //     if (e.key != this.state.current ) {
    //         this.setState({
    //             current: e.key,
    //         });
    //     }
    // }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <Menu
                // onClick={this.handleClick}
                selectedKeys={[this.props.data.selectMenu]}
                mode="horizontal"
            >
                <Menu.Item key="home">
                    <Link to="/">首页</Link>
                </Menu.Item>
                <Menu.Item key="recharge">
                    <Link to="/recharge">充值</Link>
                </Menu.Item>
                <Menu.Item key="message">
                    <Link to="/message">消息</Link>
                </Menu.Item>
                <Menu.Item key="account">
                    账户中心
                </Menu.Item>
                <Menu.Item key="kfService">
                    客服
                </Menu.Item>
            </Menu>
        );
    }
}

export default menuitem;