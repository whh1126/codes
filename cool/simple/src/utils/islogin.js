import React from 'react';
const islogin = (Com) => {
    
    return class extends React.Component {
        state = {
            flag: false
        }
        render() {
            return (
                this.state.flag ? <Com {...this.props} /> : null
            )
        }
        componentDidMount() {
            let user = window.localStorage.user;
            if (user) {
                this.setState({
                    flag: true
                })
            }else{
                let {history}=this.props;
                history.push('/login')
            }
        }
    }
}
export default islogin