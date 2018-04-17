import React from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;


class menuitem extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    handleClick = (e) => {
        console.log('click ', e);
    }

    componentDidMount() {
    }

    componentWillUnmount() {

    }

    render() {
        return (
           <div className="messageMenu">
               <Menu
                   onClick={this.handleClick}
                   mode="inline"
               >
                   <SubMenu key="sub1" title={<span><Icon type="mail" /><span>系统消息</span></span>}>
                       <Menu.Item key="1">Option 1</Menu.Item>
                       <Menu.Item key="2">Option 2</Menu.Item>
                       <Menu.Item key="3">Option 3</Menu.Item>
                       <Menu.Item key="4">Option 4</Menu.Item>
                       <Menu.Item key="5">Option 5</Menu.Item>
                   </SubMenu>
                   <SubMenu key="sub4" title={<span><Icon type="setting" /><span>站内消息</span></span>}>
                       <Menu.Item key="9">Option 9</Menu.Item>
                       <Menu.Item key="10">Option 10</Menu.Item>
                       <Menu.Item key="11">Option 11</Menu.Item>
                       <Menu.Item key="12">Option 12</Menu.Item>
                   </SubMenu>
               </Menu>
           </div>
        );
    }
}

export default menuitem;