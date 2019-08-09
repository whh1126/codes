import React, { Component } from 'react';
import axios from "axios";
import bus from "../utils/bus"
class Right extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ind: 0
        }
    }
    render() {
        let { ind}=this.state
        const { list } = this.props;
        return (
            <div className="right">
                {
                    list[ind] && list[ind].children.map((item, index) => (
                        <dl key={index}>
                            <dt>
                                <img src={item.img} alt={item.title} />
                            </dt>
                            <dd>{item.title}</dd>
                        </dl>
                    ))
                }
            </div>
        );
    }
    componentDidMount() {
        bus.on('add', (ind) => {
            this.setState({
                ind
            })
        })
    }
}
export default Right;