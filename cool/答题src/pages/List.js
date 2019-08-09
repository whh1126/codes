import React, { Component } from 'react';
import {connect} from "react-redux"
class List extends Component {
    render() {
        const {question,list,choose,match:{params:id},num}=this.props;
        return (
            <div>
                    <h3>{question}</h3>
                    <ul>
                        {
                           list.map((item=>(
                               <li 
                               style={{color:item.right?"green":item.erro?"red":null}}
                                   onClick={() => choose({ id, itemid: item.id })}
                               key={item.id}
                               >{item.anwser}</li>
                           )))
                        }
                    </ul>
            </div>   
        );
    };
    //默认的props
    static defaultProps = {
        question:"",
        list:[]
    }
}
const mapStateToProps=(state,own)=>{
    //console.log( own)
    //state是默认的defaultState里传来的数据
    //own相关的路由信息 根据相关信息取去id
    return{
        ...state.list[own.match.params.id]
    }
};
const mapDispatchToProps=dispatch=>({
    choose(val){
        // console.log(val)val指的是每一个对象item
        dispatch({
            type:"CHOOSE",
            val
        })
    }
})
export default connect(
 mapStateToProps  ,
 mapDispatchToProps
) (List);