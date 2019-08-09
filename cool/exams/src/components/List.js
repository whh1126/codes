import React, { Component } from 'react';
// import Head from "../components/Head"
import "../components/style.css"
export default class List extends Component {
    render() {
        return (
            <div>
           
                <section>
                    <div className="one">
                        <div className="left">热门文章</div>
                        <div className="right">查看更多</div>
                    </div>
                    <div className="con">
                        <div className="two">
                            <div className="two-list">
                                <p>当我们谈论http缓存我们在讨论啥</p>
                                <div>
                                    <div >
                                        <i>前端</i>
                                        <u>
                                            dsdsdsds两天前
                                    </u>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="two">
                            <div className="two-list">
                                <p>当我们谈论http缓存我们在讨论啥</p>
                                <div>
                                    <div >
                                        <i>前端</i>
                                        <u>
                                            dsdsdsds两天前
                                    </u>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="two">
                            <div className="two-list">
                                <p>当我们谈论http缓存我们在讨论啥</p>
                                <div>
                                    <div>
                                        <i>前端</i>
                                        <u>
                                            dsdsdsds两天前
                                    </u>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
