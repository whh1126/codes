import React, { Component } from 'react'
import Head from "../components/Head"
import Footer from "../components/Footer";
import axios from "axios"
import "../mock";
import Item from "../components/Item"
export default class Home extends Component {
    state = {
        list: []
    }
    render() {
        let { list } = this.state;
        let {item,back,title}=this.props;
        return (
            <div className="wrap">
                <Head back={true} title="首页"></Head>
                <section>
                    {
                        list && list.map((item, index) => (
                            <Item key={index} item={item}></Item>
                        ))
                    }
                </section>
                <Footer></Footer>
            </div>
        )
    }
    componentDidMount() {
        axios.get('/api/list').then((res) => {
            this.setState({
                list: res.data.list
            })
        })
    }
}