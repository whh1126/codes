import React, { Component } from 'react'
import Head from "../components/Head";
import List from "../components/List"

export default class Home extends Component {
    render() {
        return (
            <div>
                <Head></Head>
                <List></List>
            </div>
        )
    }
}
