import React, { Component } from 'react';
import axios from "axios"
class login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            pwd: ''
         };
    }
    render() {
        let {name,pwd}=this.state;
        let { history } = this.props;
        return (
            <div>
                <p> 用户 <input type="text" value={name} onChange={(e)=>{this.setState({name:e.target.value})}} /></p>

                <p>
                    密码 <input type="password" value={pwd} onChange={(e)=>{this.setState({pwd:e.target.value})}} />
                </p>
                <button onClick={this.handleLogin.bind(this,history)}>登录</button>
            </div>
        );
    }
    handleLogin(history) {
      
        let name=this.state.name;
        let pwd=this.state.pwd;
        axios.post("/api/login",{name,pwd}).then((res)=>{
            console.log(res)//登录信息
            if(res.data.code===1){
                window.localStorage.user=name;
                history.push('/my')
            }
        })
    }
    handleChange(e){
        this.setState({
            value:e.target.value
        })
    }
}
export default login;