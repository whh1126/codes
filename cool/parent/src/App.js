import React from 'react';
import './App.css';
import Header from "./components/Header";
import Size from "./components/Size";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: {
        header: {
          title: "Apple/苹果 iPhone X",
          price: 7588,
          id: 1
        },
        content: {
          size: ["m", 'x', 'xm'],
          arr: ['苏宁易购官方旗舰店', '中国移动手机官方旗舰店', '同步飞扬数码专营店'],
          count: 1,
          id: 2
        }
      }
    };
  }
  render() {
    const { header, content, count } = this.state.obj;
    return (
      <div>
        <Header header={header}></Header>
        <Size content={content}
        //注册自定义事件
        
          add={(num) => {
            //num指的是子组件里的值
            content.count = num;
            this.setState({
              count: num
            })
          }}
          del={(delnum)=>{
            content.count=delnum
           this.setState({
             con:delnum
           })

          }}
        ></Size>
      </div>
    );
  };
}
export default App;