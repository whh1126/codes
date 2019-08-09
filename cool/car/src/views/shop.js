import React, { Component } from 'react'
import Head from "../components/Head"
import Footer from "../components/Footer";
import Count from "../components/Count"
import { connect } from "react-redux"
class Shop extends Component {
    render() {
        console.log(this.props)
        let { list, allcheck, sumPrice } = this.props;
        return (
            <div className="wrap">
                <Head back={false} title="购物车"></Head>
                <section>
                    {
                        list && list.map((item, index) => (
                            <div key={index}>
                                {/* 单选 */}
                                <input type="checkbox" checked={item.checked} onChange={() => {
                                    this.props.changecheck(item.id, !item.checked)
                                }} />
                                <dl>
                                    <dt>
                                        <img src={item.img} />
                                    </dt>
                                    <dd><p>{item.title}</p>
                                        <p>{item.price}元</p></dd>
                                </dl>
                                <Count count={item.count} id={item.id}></Count>
                            </div>
                        ))
                    }
                    {

                        <div>
                            <p>总价:{sumPrice}元</p>
                            <div>
                                {/* 全选 */}
                                全选<input type="checkbox" checked={allcheck} onChange={() => {
                                    console.log('全选')
                                    this.props.changeall(!allcheck);
                                }} />
                            </div>
                        </div>
                    }
                </section>
                <Footer></Footer>
            </div>
        )
    }
}
const mapState = (state) => ({
    allcheck: state.allcheck,
    sumPrice: state.sumPrice,
    list: state.list,
    count: state.count
})
const mapDispatch = (dispatch) => ({

    changecheck(flag) {//点击单选
        dispatch({
            type: "CHANGE_CHECK", flag
        })
    },
    changeall(id, flag) {//点击全选
        console.log(id, flag)
        dispatch({
            type: "CHANGE_ALL", id, flag
        })
    }

})
export default connect(mapState, mapDispatch)(Shop)
