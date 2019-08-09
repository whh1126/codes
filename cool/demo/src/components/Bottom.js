import React, { Component } from 'react';
import bus from "../utils/bus"
import Content from "./Content"
class Bottom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
        console.log(this.props)
    }
    render() {
        const { list } = this.state;
        return (
            <div>
                {
                    list && list.map((item, index) => (
                        <Content key={index} val={item.val} text={item.text} />
                    ))
                }
            </div>
        );
    }
    componentDidMount() {
        bus.on('add', (obj) => {
            console.log(obj);
            let { list } = this.state;
            this.setState({
                list: [...list, obj]
            })
        })
    }
}
export default Bottom;