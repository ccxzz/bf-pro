import React from 'react';
import { Row, Col, Divider } from 'antd';
import './footer.less'

class footer extends React.Component {
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
            <div className="mainFooter">
                <Row>
                    <Col offset={3} span={18}>
                        底部列表内容展示
                    </Col>
                </Row>
                <Divider />
                <Row>
                    <Col offset={3} span={18}>
                        CopyRight© 2017-2018 币付在线版权所有 All Rights Reserved.
                    </Col>
                </Row>
            </div>
        );
    }
}

export default footer;