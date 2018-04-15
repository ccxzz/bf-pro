import React from 'react';
import { Menu } from 'antd';

const SubMenu = Menu.SubMenu;

class menuitem extends React.Component {
    constructor() {
        super();
        this.state = {
            current: 'home'
        };
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
                <Menu.Item key="home">
                    首页
                </Menu.Item>
                <Menu.Item key="recharge">
                    充值
                </Menu.Item>
                <SubMenu title={<span>消息</span>}>
                    <Menu.Item key="systemMsg">系统公告</Menu.Item>
                    <Menu.Item key="myselfMsg">我的消息</Menu.Item>
                </SubMenu>
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