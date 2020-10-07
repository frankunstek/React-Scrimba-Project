import React from 'react'

class LoginLogout extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        if (this.state.isLoggedIn) {
            this.setState({isLoggedIn: false})
        } else {
            this.setState({isLoggedIn: true})
        }
    }

    render() {
        let btnStatus

        if (this.state.isLoggedIn) {
            btnStatus = "out"
        } else {
            btnStatus = "in"
        }

        return (
            <div>
                {
                    this.state.isLoggedIn ?
                    <h2>You are Logged In!</h2> :
                    <h2>You are Logged Out!</h2>
                }
                <button onClick={this.handleClick}>Log {btnStatus}</button>
            </div>
        )
    }
}

export default LoginLogout