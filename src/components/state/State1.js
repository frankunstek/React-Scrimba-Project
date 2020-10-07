import React from 'react'

class StateApp1 extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        let loginStatus
        if (this.state.isLoggedIn) {
            loginStatus = "in"
        } else {
            loginStatus = "out"
        }

        return (
            <div>
                <h3>You are currently logged {loginStatus}</h3>
            </div>
        )
    }
}

export default StateApp1