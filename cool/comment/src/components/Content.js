import React, { Component } from 'react';
class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        // console.log(this.props)
    }
    render() {
        const { val, text } = this.props;
        // console.log(val, text)
        return (
            <div>
                <span>{val}:</span>
                <span>{text}</span>
            </div>
        );
    }
}

export default Content;