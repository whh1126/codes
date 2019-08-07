import React, { Component } from 'react';
import axios from "axios"
class Login extends Component {
    state = {
        name: "",
        pwd: ""
    }
    render() {
        let { name, pwd } = this.state;
        return (
            <div className="login">
                <p>
                    <input type="text" value={name} onChange={this.handleChangeName.bind(this)} />
                </p>
                <p>
                    <input type="password" value={pwd} onChange={this.handleChangePwd.bind(this)} />
                </p>
                <button onClick={this.handleLogin.bind(this)}>登录</button>
            </div>
        );
    }
    handleLogin() {
        let { name, pwd } = this.state;
        let { history } = this.props;
        axios.post('/api/login', { name, pwd }).then(({ data }) => {
            if (data.code === 1) {
                window.localStorage.user = pwd;
                history.go(-1)
            }
        })
    }
    handleChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }
    handleChangePwd(e) {
        this.setState({
            pwd: e.target.value
        })
    }
}

export default Login;