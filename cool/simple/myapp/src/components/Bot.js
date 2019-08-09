import React, { Component } from 'react'
import List from "./List"
import bus from "../utils/bus"
class Bot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todolist: []
        };
    }
    render() {
        let { todolist } = this.state
        return (
            <div>
                <div>
                    <h3>正在完成</h3>
                    {
                        todolist.map((item, index) => (
                            <List
                                key={index}
                                obj={item}
                                ind={index}
                                ChangeDone={this.handleDone.bind(this)}
                            ></List>
                        ))
                    }
                </div>
            </div>
        );
    }
    componentDidMount() {
        bus.on('addval', (obj) => {
            console.log(obj)
            const { todolist } = this.state;
            this.setState({
                todolist: [...todolist, obj]
            })
        })
    }
    handleDone(ind) {

        const { todolist } = this.state;
        todolist.splice(ind, 1)

    }
}
export default Bot;