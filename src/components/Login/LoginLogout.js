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
        this.setState(prevState => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }

    render() {
        let btnStatus = this.state.isLoggedIn ? "out" : "in"

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