import React, { Component } from 'react'
import List from './views/List';
import Home from './views/Home';
class App1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            router: window.location.hash.substr(1)
        };
    }
    render() {
        let Url;
        console.log(this.state.router)
        switch (this.state.router) {
            case "/":
                Url = Home
                break;
            case "/list":
                Url = List
                break;
            default:
                break;
        }
        return (
            <div>
                <div>
                    <a href="#/">首页</a>
                    <a href="#/list">列表</a>
                    <Url></Url>
                </div>
            </div>
        );
    }
    componentDidMount() {
        console.log(this.state.router)
        window.addEventListener('hashchange', () => {
            this.setState({
                router: window.location.hash.substr(1)
            })
        })
    }
}
export default App1;