// This is a chronologically ordered file in order of things and methods learned in Scrimba React Lessons

import React from 'react'

// Todo List Project
import TodoMain from './todo/TodoMain'
// Contact Cards Project
import ContactCard from './contactCard/ContactCard'
// Joke Project
import Joke from './jokes-Project/Joke'
import jokesData from './jokes-Project/jokesData'
// Products Project
import Product from './product-Project/Product'
import productData from './product-Project/productData'
// State lesson 1 (logged in/out)
import StateApp1 from './state/State1'
// Changing State with increment and decrement counter
import IncrementDecrement from './incrementDecrement/IncrementDecrement'
// Conditional with && operator
import Messages from './messages/Messages'
// Messages without && operator
import Messages2 from './messages/Messages2'
// Log in and out with changing text and button
import LoginLogout from './login/LoginLogout'
// Fetching api data and displaying it (Star Wars)
import SWapi from './starWars/SWapi'
// Forms in React
import Form from './forms/Form'
// Meme Generator
import MemeGenerator from './memeGenerator/MemeGenerator'

class Main extends React.Component {
    render() {

        // Jokes Project (Mapping Components practice)
        const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)

        // Products Project (Mapping Components compressed practice)
        const productComponents = productData.map(item => <Product key={item.id} product={item} />)

        return (

            // To Call a method declared above the render(), use this.YourMethod()
            // When using props in a class remember to use this.props

            <div>
                {/* Todo List Project */}
                <div className="todo-list">
                    <TodoMain />
                </div>

                <br /><hr />

                {/* Contact Cards Project */}
                <div className="contactCard">
                    <h2><u>Contact Cards</u></h2>
                    <ContactCard
                        img="https://style.anu.edu.au/_anu/4/images/placeholders/person_8x10.png"
                        name="Person 1"
                        phone="000 000 000"
                        email="email@gmail.com"
                    />

                    <ContactCard
                        img="https://style.anu.edu.au/_anu/4/images/placeholders/person_8x10.png"
                        name="Person 2"
                        phone="000 000 000"
                        email="email@gmail.com"
                    />

                    <ContactCard
                        img="https://style.anu.edu.au/_anu/4/images/placeholders/person_8x10.png"
                        name="Person 3"
                        phone="000 000 000"
                        email="email@gmail.com"
                    />
                </div>

                <hr />

                {/* Jokes Project */}
                <div className="jokes">
                    <h2><u>Jokes</u></h2>
                    {jokeComponents}
                </div>

                <hr />

                {/* Products Project */}
                <div className="products">
                    <h2><u>Products</u></h2>
                    {productComponents}
                </div>

                {/* State project 1 */}
                <div className="State1">
                    <h2><u>State 1</u></h2>
                    <StateApp1 />
                </div>

                <hr />

                {/* Changing State */}
                <div>
                    <h2><u>Increment & Decrement</u></h2>
                    <IncrementDecrement />
                </div>

                <hr />

                {/* Messages */}
                <div>
                    <h2><u>Messages</u></h2>
                    <Messages />
                </div>

                <hr />

                {/* Messages2 */}
                <div>
                    <h2><u>Messages2</u></h2>
                    <Messages2 />
                </div>

                <hr />

                {/* LoginLogout */}
                <div>
                    <h2><u>LoginLogout</u></h2>
                    <LoginLogout />
                </div>

                <hr />

                {/* Star Wars api */}
                <div>
                    <h2><u>Star Wats API</u></h2>
                    <SWapi />
                </div>

                <hr />

                {/* Form */}
                <div>
                    <h2><u>Form</u></h2>
                    <Form />
                </div>

                <hr />

                {/* Meme Generator */}
                <div>
                    <h2><u>Meme Generator</u></h2>
                    <MemeGenerator />
                </div>

                <hr/>
            </div>
        )
    }
}

export default Main
