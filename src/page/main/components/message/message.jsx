import React from 'react';
import { Row, Col } from 'antd';
import './message.less';
import MenuItem from './menuitem';

class message extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        // var html = {__html:record.description};
        //
        // return   <div dangerouslySetInnerHTML={html}></div> ;

        return (
            <div className="message">
                <Row>
                    <Col offset={3} span={18} style={{boxShadow: '0 0 3px 3px #ddd'}}>
                        <Row>
                            <Col span={5}>
                                <MenuItem/>
                            </Col>
                            <Col span={19}>
                                <div className="article">
                                    <h1 className="articleTitle">文章标题</h1>
                                    <p className="articleTime">发布时间：2018-02-08 23:07:38 发布人：币付在线(测试版)</p>
                                    <p className="articleContent">
                                        2017年7月21日，比特币分叉方案BIP91已经获得全网算力支持，一致同意先进行隔离见证升级，并在之后的6个月内把底层区块链的区块大小升级至2M。然而“搅局者”出现了——挖矿巨头比特币大陆旗下的矿池ViaBTC准备了一套硬分叉的体系，基于比特币的原链推出“比特币现金”。
                                    </p>
                                    <p className="articleContent">
                                        2017年7月21日，比特币分叉方案BIP91已经获得全网算力支持，一致同意先进行隔离见证升级，并在之后的6个月内把底层区块链的区块大小升级至2M。然而“搅局者”出现了——挖矿巨头比特币大陆旗下的矿池ViaBTC准备了一套硬分叉的体系，基于比特币的原链推出“比特币现金”。
                                    </p>
                                    <p className="articleContent">
                                        2017年7月21日，比特币分叉方案BIP91已经获得全网算力支持，一致同意先进行隔离见证升级，并在之后的6个月内把底层区块链的区块大小升级至2M。然而“搅局者”出现了——挖矿巨头比特币大陆旗下的矿池ViaBTC准备了一套硬分叉的体系，基于比特币的原链推出“比特币现金”。
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default message;