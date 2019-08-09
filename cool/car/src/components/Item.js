import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
class Item extends Component {
    render() {
        let { item, history } = this.props;
        return (
            <dl>
                <dt>
                    <img
                        src={item.img}
                        onClick={() => {
                            history.push(`/detail/${item.id}`)
                        }}
                        alt={item.title}
                    />
                </dt>
                <dd>
                    <p>{item.price}</p>
                    <p>{item.title}</p>
                </dd>
            </dl>
        )
    }
}
export default withRouter(Item)
