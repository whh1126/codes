import React, { Component } from 'react'
import Head from "../components/Head";
import Foot from "../components/Foot"
import "../components/style.css"
export default class Cimea extends Component {
    render() {
        const { back, title } = this.props
        return (
            <div className="wrap">
                <Head back={false} title="影院" />
                <section>
                    cimea
                </section>
                <Foot />
            </div>

        )
    }
}
