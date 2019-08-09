import React, { Component } from 'react'
import Head from "../components/Head";
import { connect } from "react-redux"
import axios from "axios"
class Detail extends Component {
    state = {
        item: {

        }
    }
    render() {
        let { item } = this.state;
        const { history } = this.props
        return (
            <div>
                <Head back={false} title="详情"></Head>
                <section>
                    {/* <p> 详情id:{this.props.match.params.id}</p> */}
                    <img src={item.img} alt="" />
                    <p>价格:{item.price}</p>
                    <p>商品名称：{item.title}</p>
                    <button onClick={() => {
                        history.push('/shop')
                        this.props.addshop(item)
                    }}>加入购物车</button>
                </section>
            </div>
        )
    }
    componentDidMount() {
        axios.get('/api/list').then((res) => {
            let detailid = this.props.match.params.id;
            let item = res.data.list.find(item => item.id == detailid);
            this.setState({
                item
            })
        })
    }
}
const mapState = (state) => ({

})
const mapDispath = (dispath) => ({
    addshop(obj) {
        console.log(obj)
        dispath({
            type: "ADD_SHOP",
            obj
        })
    }
})


export default connect(mapState, mapDispath)(Detail)   