import React, { Component } from 'react'
class Dialog extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        let {obj}=this.props
        return (
            <div>
                <p>{obj.title}</p>
                <div>{obj.con ? obj.con:<input/>}</div>
                <div>
                    <div>
                    {obj.type == "promp" ? <div>取消</div>:null}
                    </div>
                    <div onClick={()=>{
                        this.props.sure()

                    }}>确定</div>
                   
                </div>
            </div>
            
        );
    }
}

export default Dialog;