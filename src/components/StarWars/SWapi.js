import React from 'react'

class SWapi extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoading: false,
            character: {}
        }
    }

    componentDidMount() {
        this.setState({isLoading: true})
        fetch("https://swapi.dev/api/people/4/")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    isLoading: false,
                    character: data
                })
            })
    }

    render() {
        const text = this.state.isLoading ? "loading..." : this.state.character.name
        return (
            <div>
                <h2>{text}</h2>
            </div>
        )
    }
}

export default SWapi