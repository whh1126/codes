import React, { Component } from 'react';
import RouterViews from "../routers/routerviews"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import { getList } from "../store/reducer/list.action";
class Home extends Component {
    state = {
        item: {

        }
    }
    render() {

        let { list, child, history } = this.props;
        return (
            <div className="wrap">
                <header>
                    <div className="top">
                        <span>首页</span>
                        <span onClick={this.handleSearch.bind(this, history)}>搜索</span>
                        <span>我的</span>
                    </div>
                </header>
                <section>
                    {
                        list && list.map((item, index) => (
                            <div key={index}>
                                <img src={item.img}
                                    onClick={this.handleDetail.bind(this, item.id)}
                                    alt={item.name} />
                                <h3>{item.name}</h3>
                                <p >{item.price}</p>
                                <button onClick={this.handleAdd.bind(this)}>加</button>
                                <span>0</span>
                                <button onClick={this.handleDel.bind(this)}>减</button>
                                <button onClick={this.props.del.bind(this, index)}>删除</button>
                                <button onClick={this.props.add.bind(this)}>添加</button>
                            </div>
                        ))
                    }
                    <img src={require('../img/loading1.jpg')} ref="img" />
                </section>
                <footer>
                    <div >
                        <NavLink to="/my">我的</NavLink>
                        <NavLink to="/home">首页</NavLink>
                        <NavLink to="/old">Scroll</NavLink>
                    </div>
                    <div className="bot">
                        <RouterViews routers={child}></RouterViews>
                    </div>
                    <div>
                        <NavLink to="/home/oldcar">二手车</NavLink>
                        <NavLink to="/home/server">服务</NavLink>
                    </div>
                </footer>
            </div>
        )
    }
    componentDidMount() {
        this.props.getList();
        this.props.del()
    }
    handleSearch(history) {
        history.push('/search')
    }
    handleDetail(id) {
        let { history } = this.props;
        history.push(`/detail/${id}`)
    }
    handleAdd() {

    }
    handleDel() {

    }
}
const mapState = (state) => ({
    list: state.list
})
const mapDispatch = (dispatch) => ({
    getList() {
        dispatch(getList)
    },
    del(index) {
        dispatch({
            type: "DEL",
            index: index

        })

    },
    add() {
        dispatch({
            type: "ADD",
            obj: {
                name: "zs",
                img: "http://dummyimage.com/100x100/797df2",
                price: 356,
                id: new Date()
            }
        })
    }
    //  name: "@cname",
    // img: "@image(100x100,@color)",
    // "price|+1": 1,
    // "salce|300-500": 1,
    // id: "@id"

})
export default connect(
    mapState,
    mapDispatch
)(Home)
