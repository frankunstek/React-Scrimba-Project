// Formik is a library that makes your life with forms more bearable
import React from 'react'

class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lasntName: "",
            isFriendly: "",
            gender: "",
            favColor: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }
    
    render() {
        return (
            <form>
                <input 
                    type="text" 
                    value={this.state.firstName}
                    name="firstName"
                    placeholder="First Name"
                    onChange={this.handleChange}
                />    

                <br/>

                <input 
                    type="text" 
                    value={this.state.lastName}
                    name="lastName"
                    placeholder="Last Name"
                    onChange={this.handleChange}
                />    

                <br/>
                <br/>

                <textarea
                    value={"Lorem Ipsum"}
                    onChange={this.hangleChange}
                />

                <br/>

                <label>
                    <input 
                        type="checkbox" 
                        name="isFriendly" 
                        checked={this.state.isFriendly} 
                        onChange={this.handleChange}
                    /> Is Friendly?
                </label>
                <br/>
                <label>
                    <input 
                        type="radio" 
                        name="gender" 
                        value="male"
                        checked={this.state.gender === "male"} 
                        onChange={this.handleChange}
                    /> Male
                </label>
                <br/>
                <label>
                    <input 
                        type="radio" 
                        name="gender" 
                        value="female"
                        checked={this.state.gender === "female"} 
                        onChange={this.handleChange}
                    /> Female
                </label>

                <br/>

                <label>Favorite Color: </label>
                <select 
                    value={this.state.favColor}
                    onChange={this.handleChange}
                    name="favColor"
                >
                    <option value="">-- Please Choose a Color --</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                </select>

                <br/>

                <label><h3><u>Entered Information: </u></h3></label>
                {this.state.firstName && <p>Your Name is {this.state.firstName} {this.state.lastName}</p>}
                {this.state.isFriendly && <p>You are Friendly!</p>}
                {this.state.gender && <p>You are a {this.state.gender}.</p>}
                {this.state.favColor && <p>Your Favorite Color is {this.state.favColor}</p>}
            </form>
        )
    }
}

export default Form