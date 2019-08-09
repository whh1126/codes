import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const {obj,ind}=this.props
        console.log(this.props)
        return (
            <div>
                <div>
                    <input type="checkbox" 
                   checked={obj.ischeck} 
                    onChange={this.handleClick}/>
                    <span>{obj.val}</span>
                    <button onClick={this.handleDel.bind(this,ind)}>删除</button>
                </div>
            </div>
        );
    }
    handleClick=()=>{
        console.log(111)
    }
    handleDel(ind){
        console.log(ind)
    }
    ChangeDone(){
        console.log(222)
        this.props.ChangeDone()
    }
}

export default List;