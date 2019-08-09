import React, { Component } from 'react';
import Content from "./Content"
class Bottom extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log(this.props)
    }
    render() {
        const { list } = this.props;
        return (
            <div>
                {
                    list.map((item, index) => (
                        <Content key={index} val={item.val} text={item.text} />
                    ))
                }
            </div>
        );
    }
}

export default Bottom;