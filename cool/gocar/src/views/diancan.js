import React, { Component } from 'react';
import { connect } from "react-redux";
import axios from "axios"
import Right from "../components/Right";
import BScroll from "better-scroll"
class Diancan extends Component {
    render() {
        let { foots } = this.props;
        return (
            <div className="content">
                <div className="left">
                    {
                        foots && foots.map((item, index) => (
                            <p onClick={this.handleChange.bind(this, index)} key={index}>{item.name}</p>
                        ))
                    }
                </div>
                {/* 父元素 */}
                <div className="right" ref="right">
                    {/* 子元素 */}
                    <div className="rightlist" ref="rightlist">
                        <Right ></Right>
                    </div>
                </div>
            </div>
        )
    }
    handleChange(index) {
        let ele = this.refs.rightlist.children[index];//ele指的是子元素
        console.log(ele)
        this.right.scrollToElement(ele, 200)//this.right指的是父元素 父元素.scrollToElement(子元素，时间)
    }
    componentDidMount() {
        this.props.initdata();
        this.right = new BScroll(this.refs.right, {
            click: true
        })
    }
}
const mapState = (state) => ({
    foots: state.foots
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
export default connect(
    mapState,
    mapDispatch
)(Diancan)  
