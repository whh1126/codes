import React, { Component } from 'react';
import bus from '../utils/bus';
class Top extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: ""
        };
    }
    render() {
        const { val } = this.state
        return (
            <div>
                <input type="text"
                    value={val}
                    onChange={this.handleChange.bind(this)}
                    onKeyDown={this.handleKeyDown.bind(this)}
                />
            </div>
        );
    }
    handleChange(e) {
        this.setState({
            val: e.target.value
        })
    }
    handleKeyDown(){
        bus.emit('addval',{val:this.state.val,ischeck:false,status:"todo"})
    }
}
export default Top;