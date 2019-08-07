import React, { Component } from 'react';
import { connect } from "react-redux";
import axios from "axios";
import "./home.css";
class Shop extends Component {
    render() {
        const { list, handleAdd, handleDel, handAddnum, handReducenum,allPrice } = this.props;
        return (
            <div>
                <ul>
                    {
                        list.map((item, index) => (
                            <li key={item.id}>
                                <button onClick={() => handleAdd(item)}>添加</button>
                                名称：{item.title}
                                <button onClick={()=>handAddnum(item.id)}>加</button>
                                <span style={{ padding: "5px" }}
                                >数量：{item.num}</span>
                                <button onClick={()=>handReducenum(item.id)}>减</button>
                                <b>价格：{item.price}元</b>
                                <button onClick={() => handleDel(index)}>删除</button>
                            </li>
                        ))
                    }
                </ul>
                <div>
                    总价：{allPrice}
                </div>
            </div>
        );
    };
    componentDidMount() {
        this.props.getData()
    }
}
const mapState = state => ({
    list: state.list,
    allPrice:state.allPrice

});
const mapDispatch = dispatch => ({
    getData() {
        axios.get('data/data.json').then(({ data }) => {
            dispatch({
                type: "INIT",
                data: data
            })
        })
    },
    handleAdd(item) {
        dispatch({
            type: "ADD",
            item: item
        })
    },
    handleDel(id) {
        dispatch({
            type: "DEL",
            id: id
        })
    },
    handAddnum(id) {
        //加号要传入id 
        dispatch({
            type: "ADDNUM",
            id:id
        })
    },
    handReducenum(id) {
        //减号要传入id 
        dispatch({
            type: "REDUCENUM",
            id:id
        })
    }
})
export default connect(mapState, mapDispatch)(Shop);