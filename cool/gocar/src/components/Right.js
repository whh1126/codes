import React, { Component, Fragment } from 'react'
import { connect } from "react-redux";
import axios from "axios"
import Count from "../components/Count"
class Right extends Component {
    state = {
        shopright: []
    }
    render() {
        let { foots } = this.props;
        return (
            <>
                {
                    foots && foots.map((item, index) => (
                        <div key={index}>
                            <h3>{item.name}</h3>
                            {
                                item.foods && item.foods.map((item1, index1) => (
                                    <dl className="con" key={index1}>
                                        <dt>
                                            <img src={item1.image} />
                                        </dt>
                                        <dd>
                                            <span>￥{item1.price}元</span>
                                            <div>
                                                月销{item1.rating}
                                                <b>赞：{item1.sellCount}</b>
                                                <Count item={item1.count} ind={index1} ins={index} />
                                            </div>
                                        </dd>
                                    </dl>
                                ))
                            }
                        </div>
                    ))
                }
            </>
        )
    }
    componentDidMount() {
        this.props.initright()

    }
}
const mapState = (state) => ({
    foots: state.foots,
    num: state.num
})
const mapDispatch = (dispatch) => ({
    initright() {
        axios.get('/api/list').then(({ data }) => {
            dispatch({
                type: "INIT_DATA",
                data: data
            })
        })
    }
})
export default connect(mapState, mapDispatch)(Right)