import React, { Component } from 'react';
import "./top.css"
class Top extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: "",
            text: '',
        };
    }
    render() {
        const { val, text } = this.state;
        return (
            <div className="top">
                <div className="user">
                    用户名:<input type="text" name="val" value={val} onChange={this.handleChange.bind(this)} />
                </div>
                <p>
                    评论内容: <textarea type="text" name="text" value={text} onChange={this.handleChange.bind(this)}></textarea>
                    <span onClick={this.handleClick.bind(this)}>发布</span>
                </p>
            </div>
        );
    }
    handleChange(e) {
        let target = e.target;//dom节点是谁target是谁
        let name = target.name;//input里name属性里面的值
        let val = target.value;//textarea里输入的值
        //  console.log(target.value)//获取的是两者的value
        // console.log(val)
        this.setState({
            // key值不同 value值一样
            [name]: val
        })
    }
    handleClick() {
        let obj = {
            val: this.state.val,
            text: this.state.text
        }
        console.log(obj)
        this.props.add(obj)
        this.setState({
            val: "",
            text: ""
        })
    }
}
export default Top;
