import React, { Component } from 'react';
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import "swiper/dist/js/swiper.js"
import "./swipers.css"
import "swiper/dist/css/swiper.min.css"
class Swipers extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="swiper-container box" ref={(box) => this.box = box}>
                <div className="swiper-wrapper">
                    <div className="swiper-slide one">Slide 1</div>
                    <div className="swiper-slide two">Slide 2</div>
                    <div className="swiper-slide three">Slide 3</div>
                </div>
            </div>
        );
    }
    componentDidMount() {
        this.box = new Swiper(this.box, {
            autoplay: true,
            click: true,
            probeType: 2
        })
    }
}
export default Swipers;