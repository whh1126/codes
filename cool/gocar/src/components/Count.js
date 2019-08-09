import React, { Component } from 'react'
import { connect } from "react-redux"
class Count extends Component {
    render() {
        let { item, ind,ins } = this.props;
        return (
            <div>
                <button onClick={() => (
                    //调用函数时要用this.props
                    this.props.handleCount(item - 1, ind,ins)
                )}>-</button>
                <span>{item}</span>

                <button onClick={() => (
                    this.props.handleCount(item + 1, ind,ins)
                )}>+</button>
            </div>
        )
    }
}
const mapState = (state) => ({


})
const mapDispatch = (dispatch) => ({

    handleCount(count, index,ins) {
        dispatch({
            type: "ADD_COUNT",
            count, index,ins
        })
    }

})
export default connect(mapState, mapDispatch)(Count)
