import React, { Component } from 'react'
import Footer from "../components/Footer";
import axios from "axios"
import Swiper from "swiper/dist/js/swiper.min";
import "swiper/dist/css/swiper.min.css"
class Home extends Component {
    state = {
        data: [],
        list: [{
            id: 1,
            title: "循环练习",
            color: "salmon"
        }, {
            id: 2,
            title: "基础练习",
            color: "wheat"
        }, {
            id: 3,
            title: "紧急练习",
            color: "darkseagreen"
        }, {
            id: 4,
            title: "快速练习",
            color: "darkorchid"
        }]
    }
    render() {
        const { data, list } = this.state;
        let { history } = this.props
        return (
            <div className="wrap">
                <div className="swiper-container" ref="swipers">
                    <div className="swiper-wrapper">
                        {
                            data && data.map((item, index) => (
                                <div key={index} className="swiper-slide">
                                    <img src={item.img} alt={item.title} />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <section>
                    <nav>
                        <ul>
                            {
                                list && list.map((item, index) => (
                                    <li onClick={this.handleClick.bind(this, history)} style={{ background: item.color }} key={index}>{item.title}</li>
                                ))
                            }
                        </ul>
                    </nav>
                </section>
                <Footer></Footer>
            </div>
        )
    }
    componentDidMount() {
        axios.get('/api/img').then((res) => {
            this.setState({
                data: res.data
            })
            new Swiper(".swiper-container", {
                autoplay: true
            })
        })
    }
    handleClick(history) {
        history.push('/exam')
    }
}
export default Home 
