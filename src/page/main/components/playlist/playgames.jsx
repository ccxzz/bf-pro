import React from 'react';
import { Card, Row, Col } from 'antd';

class playgames extends React.Component {
    constructor() {
        super();
        this.state = {
            gameHover: ''
        };
    }

    handleMouseEnter(id, e) {
        e.stopPropagation()
        this.setState(() => ({
            gameHover: id
        }));
    }
    handleMouseLeave(e) {
        e.stopPropagation()
        this.setState({
            gameHover: ''
        })
    }
    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {

        const numberObj = [
            {id: '0'},
            {id: '1'},
            {id: '2'},
            {id: '3'},
            {id: '4'},
            {id: '5'},
            {id: '6'},
            {id: '7'},
            {id: '8'}
        ]
        return (
            <div className="playGames">
                <Row gutter={20}>
                    {
                        numberObj.map((comment) =>
                            <Col style={{ marginBottom: '15px'}} key={comment.id} span={4}>
                                <Card onMouseEnter={(e) => this.handleMouseEnter(comment.id, e)}
                                      onMouseLeave={(e) => this.handleMouseLeave(e)} style={{ width: '100%', height: '200px' }} className="card-bkg">
                                    <div className="gameMsg">Game Name</div>
                                    { this.state.gameHover === comment.id &&
                                    <div className="gameMask">Game Message</div>
                                    }
                                </Card>
                            </Col>
                        )
                    }
                </Row>
            </div>
        );
    }
}

export default playgames;