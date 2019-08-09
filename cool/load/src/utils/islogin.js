import React, { Component } from 'react'
const islogin = (Com) => {
    return class extends Component {
        state = {
            flag: false
        }
        render() {
            return (
                this.state.flag ? <Com {...this.props} /> : null
            )
        }
        componentDidMount() {
            let user = window.localStorage.user;
            //改变setState
            if (user) {
                this.setState({
                    flag:true
                })
            } else {
                let {history}=this.props;
                history.push('/login')
            }
        }
    }
}
export default islogin
