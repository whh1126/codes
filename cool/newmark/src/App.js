import React, { Component } from 'react';
import Dialog from "./components/Dialog"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{
        title: "打开弹出框",
        type: "alert",
        name: "提示",
        con: "确定执行此操作",
        id: 1
      }, {
        title: "打开确认框",
        type: "confirm",
        name: "请输入姓名",
        id: 2
      }, {
        title: "打开提示框",
        type: "promp",
        id: 3,
        name: "提示",
        con: "操作成功",
      }],
      isShow: false,
      obj:{

      }


    };
  }
  render() {
    const { list, isShow,obj } = this.state;
    return (
      <div>
        {
          list.map(item => (
            <p
              onClick={() => {
                this.setState({
                  isShow: true,
                  obj:item
                })
              }}
              key={item.id}>{item.title}

            </p>
          ))
        }
        {isShow ? < Dialog obj={obj} sure={()=>{
         this.setState({
           isShow:false
         })
        }} /> : null}

      </div>

    );
  }
}

export default App;
