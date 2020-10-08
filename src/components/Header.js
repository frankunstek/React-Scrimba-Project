import React from 'react'
import Greeting from './greeting/Greeting'

function Header() {
    return (
        <nav>
            <h1 className="navbar">Good {Greeting()}!</h1>
        </nav>
    )
}

export default Header