import React, { Component } from 'react'
import axios from "axios"

class Login extends Component {
    state = {
        name: "",
        pwd: ""
    }
    render() {
        let { name, pwd } = this.state;

        return (
            <div>
                <p>
                    <input type="text" value={name} onChange={(e) => this.handleName(e)} />
                </p>
                <p>
                    <input type="password" value={pwd} onChange={(e) => this.handlePwd(e)} />
                </p>
                <button onClick={this.handleLogin.bind(this)}>登录</button>
            </div>
        )
    }
    handleLogin() {
        let { name, pwd } = this.state;
        let { history } = this.props;
        console.log(this.props)
        axios.post('/api/login', { name, pwd }).then((res) => {
            if (res.data.code == 1) {
               console.log(111)
                history.push('/home')
            }
        })
    }
    handleName(e) {
        this.setState({
            name: e.target.value
        })
    }
    handlePwd(e) {
        this.setState({
            pwd: e.target.value
        })
    }
}
export default Login 
