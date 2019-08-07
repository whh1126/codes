import React, { Component } from 'react'
import "../mock/index.js"
import axios from "axios";
export default class Hot extends Component {
    state = {
        data: []
    }
    render() {
        let { data } = this.state;
        let { history} = this.props;
        console.log(this.props);
        return (
            <>
                {
                    data && data.map((item, index) => (
                        <dl key={index}>
                            <dt>
                                <img src={item.img.replace('w.h', '128.180')} alt={item.nm} />
                            </dt>
                            <dd>
                                <p>{item.nm}</p>
                                <p>{item.sc ? `观众评分${item.sc}` : `${item.wish}想看`}</p>
                                <p>{item.star}</p>
                                <p onClick={() => {
                                    console.log('dianji');
                                    history.push(`/detail/${item.id}`);
                                }}>{item.globalReleased ? '购票' : '预售'}</p>
                            </dd>
                        </dl>
                    ))
                }
            </>
        )
    }
    componentDidMount() {
        axios.get('/api/list').then((res) => {
            this.setState({
                data: res.data.data
            })

        })
    }
}