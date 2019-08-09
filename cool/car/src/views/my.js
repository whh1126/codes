import React, { Component } from 'react'
import Head from "../components/Head"
import Footer from "../components/Footer";
export default class My extends Component {
    render() {
        let {back,title}=this.props;
        return (
            <div className="wrap">
                <Head back={false} title="我的"></Head>
                <section>  我的</section>
                <Footer></Footer>
            </div>
        )
    }
}
