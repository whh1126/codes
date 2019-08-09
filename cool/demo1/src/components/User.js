import React, { Component } from 'react'
import store from "../store/index"
export default class User extends Component {
    constructor() {
        super()
        store.subscribe(() => {
            this.setState({})
        })
    }
    state = {
        val: '',
        age: '',
        sex: '',
        ischeck: false,
        girl: "女",
        boy: "男"
    }
    render() {
        const { val, age, sex, ischeck, girl, boy } = this.state;
        const { list } = store.getState()
        return (
            <div>
                <p>
                    添加：<input type="text"
                        onChange={this.handleChange.bind(this)}
                        onKeyDown={this.handleDown.bind(this)}
                        value={val} />

                </p>
                <p>
                    年龄<input type="radio"
                        onChange={this.handleChange.bind(this)}
                        onKeyDown={this.handleDown.bind(this)}
                        value={age} />
                </p>
                <p>
                    性别
                            {
                        ischeck ? <input type="type" boy={"男"}
                            onChange={this.handleSex.bind(this)}
                            onKeyDown={this.handleDown.bind(this)}
                            value={boy} /> : <input type="type" girl={"女"}
                                onChange={this.handleChange.bind(this)}
                                onKeyDown={this.handleCheck.bind(this)}
                                value={girl} />
                    }
                </p>
                <div>
                    {list && list.map((item, index) => (
                        <div key={index}>
                            <p onClick={this.handleClick.bind(this, index)}
                            > {item}</p>
                            <button>点击删除</button>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
    handleChange(e) {
        this.setState({
            val: e.target.value
        })
    }
    handleDown(e) {
        if (e.keyCode === 13) {
            store.dispatch({
                type: "ADD_USER",
                val: this.state.val,
            })
            this.setState({
                val: ""
            })
        }
    }
    handleCheck(e) {
        if (e.keyCode === 13) {
            store.dispatch({
                type: "ADD_SEX",
                girl: this.state.girl
            })
        }
    }
    // handleSex() {
    //     console.log(111)
    // }
    handleClick(index) {
        store.dispatch({
            type: "DEL",
            index
        })
    }
}
