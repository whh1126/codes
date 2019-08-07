import React, { Component } from 'react';
import axios from "axios"
class Right extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rightList: []
        };
        console.log(props)
    }
    render() {
        const { rightList, ind, right } = this.state;
        console.log(rightList[this.props.add])
         console.log(this.props)
        return (
            <div>
                {console.log(this.state)}
                {
                    rightList && rightList.map((item, index) => (
                        <div key={item.id}>
                            <p >{item.title}</p>
                            <img onClick={() => this.handleClick()} src={item.img} alt={item.title} />
                        </div>
                    ))
                }
                {/* this.setState({
                    ind:this.props.add
            }) */}
            </div>
        );
    };
    handleClick = () => {
        console.log(111)

    }
    componentDidMount() {
        axios.get('/api/list').then((res) => {
            this.setState({
                rightList: res.data.right,
              
            }, () => {
                this.state.list = res.data.right
            })
        })
    }
}
export default Right;