import React from 'react'
import randomcolor from 'randomcolor'

class IncrementDecrement extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            color: ""
        }
        this.Increment = this.Increment.bind(this)
        this.Decrement = this.Decrement.bind(this)
    }

    Increment() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    Decrement() {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
        })
    }

    // Using componentDidUpdate to change the color of the text each time it is in-/decremented
    // !!! have to use condition in order to prevent infinite loop
    // full scrimba lesson:
    // https://scrimba.com/learn/learnreact/lifecycle-methods-part-3-componentdidupdate-cD7DJMUb
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            const newColor = randomcolor()
            this.setState({color: newColor})
        }
    }

    render() {
        return (
            <div className="increment-decrement">
                <h1 style={{color: this.state.color}}>{this.state.count}</h1>
                <button onClick={this.Increment}>Increment!</button>
                <button onClick={this.Decrement}>Decrement!</button>
            </div>
        )
    }
}

export default IncrementDecrement