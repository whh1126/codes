import React, { Component } from 'react'
class Login extends Component {
    constructor(){
        super()
        this.state={
            name:"",
            pwd:""
        }
    }
    render() {
        const {name,pwd}=this.state;
        return (
            <div>
                用户:<input type="text" value={name} onChange={(e) =>this.handleChange('name',e)}/><br></br>
                密码：<input type="password" value={pwd} onChange={(e) =>this.handleChange('pwd',e)}/><br></br>
                <button onClick={this.handleLogin}>登录</button>
            </div>
        );
    };
    handleChange=(type,e)=>{
        this.setState({
            [type]: e.target.value
        })
    };
    handleLogin=()=>{
        window.localStorage.setItem('isLogin',this.state.name)
    } 
}
export default Login;