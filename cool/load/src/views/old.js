import React, { Component } from 'react'
import BScroll from "better-scroll";
import axios from "axios"
import { connect } from "react-redux";
import { getOld } from "../store/reducer/list.action"
class Old extends Component {
    constructor() {
        super();
        this.state = {
            ind: 0
        };
        this.page = 1
    }
    render() {
        const { old } = this.props;
        let { ind } = this.state;
        return (
            <>
                <div className="wrap">
                    <section className="section" ref="section">
                        <div>
                            <ul>
                                {
                                    old && old.map((item, index) => (
                                        < li key={index}>
                                            <h3 ref={item.title}>{item.title}</h3>
                                            <div>
                                                <p>  {item.name}</p>
                                                <img src={item.img} />
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </section>
                    <ol className="right-ol">
                        {
                            old && old.map((item, index) => (
                                <li className={index === ind ? "active" : null}
                                    onClick={this.handleClick.bind(this, item.title, index)}
                                    key={index}>{item.title}</li>
                            ))
                        }
                    </ol>
                </div>
            </>
        )
    }

    componentDidMount() {
        this.props.getOld()
        this.myscroll = new BScroll('.section', {
            click: true,
            probeType: 2
        })
        // this.Myscroll()
        this.props.scrollEnd(this.page, this)
    }
    handleClick(title, index) {
        console.log(title, index)
        this.myscroll.scrollToElement(this.refs[title], 500);
        this.setState({
            ind: index
        })
    }
    // Myscroll() {
    //     var _this = this;
    //     _this.myscroll.on("scroll", function (e) {
    //         const arr = Object.values(_this.refs);
    //         let scrollTop = [];
    //         arr.forEach((item, index) => {
    //             scrollTop.push(item.offsetTop);
    //         });
    //         scrollTop.forEach((item, index) => {
    //             if (-this.y - item > 0 && -this.y - item < 10) {
    //                 console.log(index);
    //                 _this.setState({
    //                     index
    //                 });
    //             }
    //         });
    //     });
    // }

}
const mapState = (state) => ({
    old: state.old
})
const mapDispatch = (dispatch) => ({
    getOld(page) {
        axios.post('/api/page', { page }).then(({ data }) => {
            console.log(data)
            dispatch({
                type: "GET_OLD",
                data: data
            })
        })
    },
    scrollEnd(page, _this) {
        // console.log(page,_this)//传来的页数和this
        let that = _this;//组件自身
        that.myscroll.on('scrollEnd', function () {
            if (this.y === this.maxScrollY) {
                page++;
                console.log(page)
                if (page < 3) {//如果页数小于3 调用初始化函数传页数
                    console.log(page)
                    that.props.getOld(page)
                }
            }
        })
    }
})
export default connect(
    mapState,
    mapDispatch
)(Old)

