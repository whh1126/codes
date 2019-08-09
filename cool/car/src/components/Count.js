import React, { Component } from 'react'
import { connect } from "react-redux"
class Count extends Component {
    render() {
        let { count, id } = this.props;//count数量和id传过去了由shop接收
        return (
            <div>
                <button onClick={() => {
                    this.props.changecount(count - 1, id)
                }}>-</button>
                <span>{count}</span>
                <button onClick={() => {
                    this.props.changecount(count + 1, id)
                }}>+</button>
            </div>
        )
    }
}
const mapState = (state) => {
    return {
    }
}
const mapDispatch = (dispatch) => {
    return {
        changecount(count, id) {
            dispatch({
                type: "Change_Count",
                id, count
            })
        }
    }
}
export default connect(
    mapState,
    mapDispatch
)(Count)

