import React, { Component, Fragment } from 'react';
import {Switch, Route, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import List from "./List";
import End from "./End";
class Question extends Component {
    render() {
        const { list } = this.props; 
        return (
            <div>
                <nav>
                    <End></End>
                    {list && list.map((item, index) => (
                        <Fragment key={item.id}>
                            <NavLink to={`/question/${index}`}>
                                <span style={{ color: item.choose === undefined ?
                                 null : item.choose ? "green" : "red" }}>
                                    {item.title} &nbsp;&nbsp;</span>
                            </NavLink>
                        </Fragment>
                    ))}
                </nav>
                <div>
                    <Switch>
                        <Route path="/question/:id" component={List}></Route>
                    </Switch>
                </div>
            </div>
        );
    }
    componentDidMount() {
        this.props.getData();
    }
}
const mapStateToProps = state => ({
    //此数据来自reducer里默认的prpos
    list: state.list
});
const mapDispatch = dispatch => ({
    getData() {
        axios.get('/data/data.json').then(({ data }) => {
            // console.log(data)数据
            dispatch({
                type: "INIT",
                initvalue: data
            })
        })
    }
})
export default connect(
    mapStateToProps,
    mapDispatch
)(Question);