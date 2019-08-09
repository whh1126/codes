import React, { Component } from 'react'
import { connect } from "react-redux"
import axios from "axios"
class Find extends Component {
    render() {
        let { list } = this.props;
        return (
            <>
                {
                    list && Object.keys(list).map((item1, index1) => (
                        <div key={index1} ref={"title_"+item1}>
                            <h3>{item1}</h3>
                            {
                                list[item1].map((item2, index2) => (
                                    <dl key={index2}>
                                        <dt>
                                            <img src={item2.CoverPhoto} alt="" />
                                        </dt>
                                        <dd>
                                            <p>{item2.Name}</p>
                                        </dd>
                                    </dl>
                                ))
                            }
                        </div>
                    ))
                }
                <ul className="uls">
                    {
                        list && Object.keys(list).map((item3, index3) => (
                            <li onClick={this.handleClick.bind(this, item3)} key={index3}>{item3}</li>
                        ))
                    }
                </ul>
            </>
        )
    }
    componentDidMount() {
        this.props.getData()
    }
    //楼层函数
    handleClick(item3) {
        console.log(item3)//点击时所在的字母 
        console.log(this.refs['title_' + item3].offsetTop)
        document.documentElement.scrollTop = this.refs['title_' + item3].offsetTop-44
    }
}
const mapState = (state) => ({
    list: state.list
})
const mapDispatch = (dispatch) => ({
    getData() {
        axios.get('/api/city').then(({ data }) => {
            console.log(data)
            dispatch({
                type: "GET_DATA",
                data
            })
        })
    }
})
export default connect(mapState, mapDispatch)(Find)
