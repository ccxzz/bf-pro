import React from 'react';
import { Link } from "react-router-dom";
import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;
import './repassword.less'

class repassword extends React.Component {
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
                        {getFieldDecorator('verificationCode', {
                            rules: [{ required: true, message: '请输入校验码' }],
                        })(
                            <Input size="large" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="校验码" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入新密码' }],
                        })(
                            <Input size="large" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="新密码" />
                        )}
                    </FormItem>
                    <FormItem>
                        <div className="login-form-forgot">
                            <Link to="/register">注册</Link> Or <Link to="/login">登录</Link>
                        </div>
                        <Button size="large" type="primary" htmlType="submit" className="login-form-button">
                            修改密码
                        </Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

const WrappedRegistrationForm = Form.create()(repassword);


export default WrappedRegistrationForm;