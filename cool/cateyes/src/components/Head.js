import React, { Component } from 'react';
export default class Head extends Component {
    static defaultProps = {
        back: false,
        title: "电影"
    }
    render() {
        let { back, title } = this.props;
        return (
            <header className="header">
                {

                    back ? <span>&lt;</span> : null
                }
                <span>{title}</span>
            </header>
        )
    }
}