import React from 'react';
import { Row, Col, Table, Input, Button, Icon } from 'antd';
import { Link } from "react-router-dom";
import './recharge.less'

class recharge extends React.Component {
    constructor() {
        super();
        this.state = {
            filterDropdownVisible: false,
            searchText: '',
            filtered: false,
            coinListBase:[
                {
                    id: 0,
                    img: 'http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/btc.png',
                    name: "比特币(BTC)",
                    leftMoney: "12345",
                    frozenMoney: "112.213",
                    sumMoney: "2311.66",
                    zhCusd: "888.88",
                },
                {
                    id: 1,
                    img: 'http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/btc.png',
                    name: "莱特币(LTC)",
                    leftMoney: "12345",
                    frozenMoney: "112.213",
                    sumMoney: "2311.66",
                    zhCusd: "888.88",
                },
                {
                    id: 2,
                    img: 'http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/btc.png',
                    name: "币付币(CPC)",
                    leftMoney: "12345",
                    frozenMoney: "112.213",
                    sumMoney: "2311.66",
                    zhCusd: "888.88",
                },
                {
                    id: 3,
                    img: 'http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/btc.png',
                    name: "马特币(MTC)",
                    leftMoney: "12345",
                    frozenMoney: "112.213",
                    sumMoney: "2311.66",
                    zhCusd: "888.88",
                },
                {
                    id: 4,
                    img: 'http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/btc.png',
                    name: "服装币(FZC)",
                    leftMoney: "12345",
                    frozenMoney: "112.213",
                    sumMoney: "2311.66",
                    zhCusd: "888.88",
                },
                {
                    id: 5,
                    img: 'http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/btc.png',
                    name: "罗素币(RC)",
                    leftMoney: "12345",
                    frozenMoney: "112.213",
                    sumMoney: "2311.66",
                    zhCusd: "888.88",
                }
            ],
            coinList:[
                {
                    id: 0,
                    img: 'http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/btc.png',
                    name: "比特币(BTC)",
                    leftMoney: "12345",
                    frozenMoney: "112.213",
                    sumMoney: "2311.66",
                    zhCusd: "888.88",
                },
                {
                    id: 1,
                    img: 'http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/btc.png',
                    name: "莱特币(LTC)",
                    leftMoney: "12345",
                    frozenMoney: "112.213",
                    sumMoney: "2311.66",
                    zhCusd: "888.88",
                },
                {
                    id: 2,
                    img: 'http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/btc.png',
                    name: "币付币(CPC)",
                    leftMoney: "12345",
                    frozenMoney: "112.213",
                    sumMoney: "2311.66",
                    zhCusd: "888.88",
                },
                {
                    id: 3,
                    img: 'http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/btc.png',
                    name: "马特币(MTC)",
                    leftMoney: "12345",
                    frozenMoney: "112.213",
                    sumMoney: "2311.66",
                    zhCusd: "888.88",
                },
                {
                    id: 4,
                    img: 'http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/btc.png',
                    name: "服装币(FZC)",
                    leftMoney: "12345",
                    frozenMoney: "112.213",
                    sumMoney: "2311.66",
                    zhCusd: "888.88",
                },
                {
                    id: 5,
                    img: 'http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/btc.png',
                    name: "罗素币(RC)",
                    leftMoney: "12345",
                    frozenMoney: "112.213",
                    sumMoney: "2311.66",
                    zhCusd: "888.88",
                }
            ]
        };
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    onInputChange = (e) => {
        this.setState({ searchText: e.target.value });
    }
    onSearch = () => {
        const { searchText } = this.state;
        const reg = new RegExp(searchText, 'gi');
        if (searchText) {
            this.setState({
                filterDropdownVisible: false,
                filtered: !!searchText,
                coinList: this.state.coinList.map((record) => {
                    const match = record.name.match(reg);
                    if (!match) {
                        return null;
                    }
                    return {
                        ...record,
                        name: (
                            <span>
              {record.name.split(reg).map((text, i) => (
                  i > 0 ? [<span className="highlight" key={record.id}>{match[0]}</span>, text] : text
              ))}
            </span>
                        ),
                    };
                }).filter(record => !!record),
            });
        } else {
            this.setState({
                filterDropdownVisible: false,
                filtered: !!searchText,
                coinList: this.state.coinListBase
            });
        }
    }

    render() {
        const columns = [{
            title: '币种',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => {
                return (
                    <div className="editable-row-operations">
                        <img className="coinImg" src={record.img}/> &nbsp; {text}
                    </div>
                );
            },
        }, {
            align: "right",
            title: '可用余额',
            dataIndex: 'leftMoney',
            key: 'leftMoney',
        }, {
            align: "right",
            title: '冻结委托',
            dataIndex: 'frozenMoney',
            key: 'frozenMoney',
        }, {
            align: "right",
            title: '总计',
            dataIndex: 'sumMoney',
            key: 'sumMoney',
        }, {
            align: "right",
            title: '折合(CUSD)',
            dataIndex: 'zhCusd',
            key: 'zhCusd',
        }, {
            align: "center",
            title: '',
            key: 'id',
            render: (text, record) => {
                return (
                    <div className="editable-row-operations">
                        <Link to="/" className="coinOperationLink"><Button>充值</Button></Link>
                        <Link to="/recharge" className="coinOperationLink"><Button>提现</Button></Link>
                        <Link to="/recharge" className="coinOperationLink"><Button>交易</Button></Link>
                    </div>
                );
            },
        }];
        return (
            <div className="recharge">
                <Row>
                    <Col offset={3} span={18} >
                        <div className="custom-filter-dropdown">
                            <Input
                                ref={ele => this.searchInput = ele}
                                placeholder="搜索币种"
                                value={this.state.searchText}
                                onChange={this.onInputChange}
                                onPressEnter={this.onSearch}
                            />
                            <Button onClick={this.onSearch}>搜索</Button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col offset={3} span={18} style={{border: '1px solid #e8e8e8'}}>
                        <Table pagination={{position: "none"}} columns={columns} dataSource={this.state.coinList} rowKey="id"/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default recharge;