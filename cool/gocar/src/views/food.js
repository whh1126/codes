import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import axios from 'axios';
import { connect } from "react-redux";
import Diancan from "./diancan";
import Comment from "./comment"
import Business from './business';
import { Switch, Redirect, Route } from "react-router-dom"
class Food extends Component {
    state = {
        arr: [
            {
                title: "点菜",
                link: "/food/diancan"

            }, {
                title: "商家",
                link: "/food/business"
            }, {
                title: "评价",
                link: "/food/comment"
            }
        ]
    }
    render() {
        let { foots, history,sumPrice } = this.props;
        let { arr } = this.state
        return (
            <div className="wrap">
                <header>
                    <ul className="list">
                        {
                            arr.map((item, index) => (
                                <li onClick={this.handleClick.bind(this, item.link, history)} key={index}>{item.title} </li>
                            ))
                        }
                    </ul>
                </header>
                <section>
                    <Switch>
                        <Route path="/food/diancan" component={Diancan}></Route>
                        <Route path="/food/comment" component={Comment}></Route>
                        <Route path="/food/business" component={Business}></Route>
                        <Redirect from="/" to="/food/diancan"></Redirect>
                    </Switch>
                </section>
                <footer>
                    <div>
                        <span>总价<b>￥{sumPrice}元</b></span>
                    </div>
                </footer>
            </div>
        )
    }
    componentDidMount() {
        this.props.initdata()
    }
    handleClick(link, history) {
        history.push(link)
    }
}
const mapState = (state) => ({
    foots: state.foots,
    sumPrice:state.sumPrice
})
const mapDispatch = (dispatch) => ({
    initdata() {
        axios.get('/api/list').then(({ data }) => {
            dispatch({
                type: "INIT_DATA",
                data: data
            })
        })
    }
})
export default connect(mapState, mapDispatch)(Food)
