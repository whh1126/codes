import React, { Component } from 'react'
import { NavLink, withRouter } from "react-router-dom";
class Head extends Component {
    state = {
        arr: [
            {
                title: "论坛",
                link: "/index/forum"

            }, {
                title: "找车",
                link: "/index/find"
            }, {
                title: "首页",
                link: "/index/home"
            }
            , {
                title: "二手车",
                link: "/index/oldcar"

            }, {
                title: "服务",
                link: "/index/server"
            }
        ],
        flag: false
    }
    render() {
        let { arr } = this.state;
        let { history } = this.props
        return (
            <>
                <div className="header">
                    <span>汽车之家</span>
                    <span onClick={this.handleSearch.bind(this, history)}>搜索</span>
                    <span onClick={this.handleMy.bind(this, history)}>我的</span>
                </div>
                {/* 吸顶功能 */}
                <ul className={`list ${this.state.flag ? "fix" : ""}`}>
                    {
                        arr.map((item, index) => (
                            <li
                                key={index}>
                                <NavLink to={item.link}>{item.title}</NavLink>
                            </li>
                        ))
                    }
                </ul>
                <div className="mark"></div>
                <div>
                    <p>
                        金融
                    </p>
                </div>
            </>
        )
    }
    componentDidMount() {

        window.addEventListener('scroll', this.myscroll)
    }
    // 滚动函数
    myscroll = () => {
        if (document.documentElement.scrollTop > 44) {
            this.setState({
                flag: true
            })
        } else {
            this.setState({
                flag: false
            })
        }
    }
    handleSearch(history) {
        history.push('/search')
    }
    handleMy(history) {
        history.push('/my')
    }
}
export default withRouter(Head)
