import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
class Head extends Component {
    static defaultProps = {
        back: false,
        title: "首页"
    }
    render() {
        let { history } = this.props;
        const { back, title } = this.props;
        return (
            <header>
                {
                    back ? <span>&lt;</span> : null
                }
                <span onClick={this.handleGo.bind(this, history)}>{title}</span>
            </header>
        )
    }
    handleGo(history) {
        history.go(-1);
    }
}
export default withRouter(Head)