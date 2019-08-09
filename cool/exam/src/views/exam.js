import React, { Component } from 'react'
import axios from 'axios'
import '../mock/index'
import { connect } from 'react-redux'
import { INIT_DATA, CLICK_NEXT, CLICK_ITEM } from '../store/exam/exam.type'
class Exam extends Component {
    state = {
        arr: ['A', 'B', 'C', 'D']
    }
    render() {
        console.log(this.props);
        let { curdata } = this.props;
        let { arr } = this.state;
        return (
            <div>
                <h3>{curdata.title}</h3>
                <ul className="exam">
                    {
                        curdata.options && curdata.options.map((item, index) => {
                            return <li key={index} onClick={this.handleClickItem.bind(this, item.id)}>
                                <span className={`
                                ${(curdata.selected != -1 && curdata.selected == index) ? 'error' : ''}
                                ${(curdata.selected != -1 && curdata.success == index) ? 'success' : ''}
                                `}></span>
                                <span>{arr[index]}:{item.opt}</span>
                            </li>
                        })
                    }
                </ul>
                <button onClick={this.handleClicknext.bind(this, false)}>上一题</button>
                <button>提交</button>
                <button onClick={this.handleClicknext.bind(this, true)}>下一题</button>
            </div>
        )
    }
    componentDidMount() {
        axios.get('/api/exam').then((res) => {
            this.props.initdata(res.data);
        })
    }
    handleClicknext(flag) { 
        let { index, length } = this.props;
        console.log(flag ? index + 1 : index - 1)
        let ind = flag ? index + 1 : index - 1;
        if (ind >= 0 && ind <= length - 1) {
            this.props.clicknext(ind)
        }
    }
    handleClickItem(id) { 
        let { selected } = this.props.curdata;
        if (selected == -1) { 
            this.props.clickItem(id);
        }
    }
}

export default connect((state) => {
    return {
        curdata: state.exam.curdata,
        index: state.exam.index,
        length: state.exam.length
    }
}, (dispatch) => {
    return {
        initdata(list) {
            dispatch({ type: INIT_DATA, list })
        },
        clicknext(ind) {
            dispatch({ type: CLICK_NEXT, ind })
        },
        clickItem(id) {
            dispatch({ type: CLICK_ITEM, id })
        }
    }
})(Exam)