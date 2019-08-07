import React, { Component } from 'react'
import Head from "../components/Head";
import Foot from "../components/Foot"
import "../components/style.css"
import isLogin from '../utils/isLogin';
isLogin()
class My extends Component {
    render() {
        const { back, title } = this.props;
        return (
            <div className="wrap">
                <Head back={false} title="我的" />
                <section>
                    我的
                </section>
                <Foot />
            </div>
        )
    }
}
export default isLogin(My)
