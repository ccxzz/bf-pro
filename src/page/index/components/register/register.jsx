import React from 'react';
import { Link } from "react-router-dom";
import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;
import './register.less'

class register extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: '请输入账号' }],
                        })(
                            <Input size="large" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="账号" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码' }],
                        })(
                            <Input size="large" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('passwordok', {
                            rules: [{ required: true, message: '请输入密码' }],
                        })(
                            <Input size="large" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="确认密码" />
                        )}
                    </FormItem>
                    <FormItem>
                        <div className="login-form-forgot">
                            <Link to="/repassword">修改密码</Link> Or <Link to="/login">登录</Link>
                        </div>
                        <Button size="large" type="primary" htmlType="submit" className="login-form-button">
                            注册
                        </Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

const WrappedRegistrationForm = Form.create()(register);


export default WrappedRegistrationForm;