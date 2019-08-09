import React, { Component } from 'react'
import { connect } from "react-redux"
import { getList } from "../store/reducer/list.action"

class Detail extends Component {
    state = {
        arr: []
    }
    render() {
        let { list } = this.props;
        let { arr } = this.state;
        return (
            <div>
                {arr && arr.map((item, index) => (
                    <div key={index}>
                        <p>{item.name}</p>
                        <img src={item.img} />
                    </div>
                ))
                }
            </div>
        )
    }
    componentDidMount() {
        this.props.getList()

        let { list } = this.props;
        let { arr } = this.state;
        let ids = list.filter(item => item.id == this.props.match.params.id)
        console.log(ids);
        this.setState({
            arr: ids
        })
    }
}
const mapState = (state) => ({
    list: state.list
})
const mapDispatch = (dispatch) => ({
    getList() {
        dispatch(getList)
    },
})
export default connect(
    mapState,
    mapDispatch
)(Detail)  
