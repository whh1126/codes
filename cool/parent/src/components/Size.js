import React, { Component } from 'react'
class Size extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { content, size, count, arr } = this.props.content;
        console.log(this.props.content)
        return (
            <div>
                {
                    size.map(item => (
                        <b key={item.id}>{item}</b>
                    ))
                }
                {
                    arr.map(item1 => (
                        <p key={item1.id}>{item1}</p>
                    ))
                }
                <div>
                    <span onClick={()=>{
                        //子组件里调用函数并接受参数
                        this.props.add(count+1)

                    }}>+</span> <b>{this.props.content.count}</b>
                     <span onClick={()=>{
                         this.props.del(count-1)
                     }}>-</span>
                </div>
            </div>
        );
    }
}
export default Size;