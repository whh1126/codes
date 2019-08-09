import React, { Component } from 'react'
import { connect } from "react-redux"
class Search extends Component {
    state = {
        val: ""
    }
    render() {
        let { val } = this.state;
        let { search } = this.props
        return (
            <div>
                <input type="text" value={val}
                    onChange={this.handleChange.bind(this)} />
                <div>
                    {
                        search && search.filter((item, index) => (
                            item.title.includes(val)
                        )).map((item, index) => (
                            val ? 
                                <li key={index}> {item.title}</li> : null
                        ))
                    }
                </div>
            </div>
        )
    }
    handleChange(e) {
        let { val } = this.state;
        this.setState({
            val: e.target.value
        })
        // this.props.handleChange(val)
    }
}
const mapState = (state) => ({
    search: state.search
})
const mapDispatch = (dispatch) => ({
    handleChange(val) {
        console.log(val)
        dispatch({
            type: "SEARCH",
            val
        })
    }
})
export default connect(
    mapState,
    mapDispatch

)(Search)  
