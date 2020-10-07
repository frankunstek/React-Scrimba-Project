import React from 'react'

class Messages2 extends React.Component {
    constructor() {
        super()
        this.state = {
            unreadMessages: ["a"]
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.unreadMessages.length > 1 ?
                    <h2>You have {this.state.unreadMessages.length} unread messages!</h2> :
                    (this.state.unreadMessages.length === 1 ? 
                        <h2>You have 1 unread message!</h2> :
                        <h2>You have no unread messages!</h2>)
                }
            </div>
        )
    }
}

export default Messages2