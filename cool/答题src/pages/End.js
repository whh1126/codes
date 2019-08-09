import React, { Component } from 'react';
import {connect} from "react-redux"
class End extends Component {
    state = {  }
    render() {
        return (
            <div>
                总共答对{this.props.num}道题
            </div>
        );
    }
}
const mapStateToProps=state=>{
    const num = state.list.filter(item => item.choose).length
    return{
        num
    }
}
export default connect(mapStateToProps)  (End);