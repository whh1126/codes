import React, { Component } from 'react'
import bus from "../utils/bus"
class Left extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {list}  = this.props;
        return (
            <div className="left">
                <ul>
                    {
                        list && list.map((item,index) => (
                            <li key={item.id}
                                onClick={this.handleClick.bind(this,index)}
                            >
                                {item.name}
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
    handleClick(ind) {
        console.log(ind)
        bus.emit('add', ind)
    }
}
export default Left;