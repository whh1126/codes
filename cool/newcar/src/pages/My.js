import React, { Component } from 'react';
import {isLogin} from "../utils/index.js"
console.log(isLogin)
class My extends Component {
    state = { 
       name:""
     }
    render() {
        return (
            <div>
                <input type="text"
                 value={this.state.name}
                 onChange={this.hadleChange}
                 />
            </div>
        );
    };
    hadleChange=(e)=>{
        this.setState({
           name:e.target.value
        })

    }
}
export default isLogin(My) ;