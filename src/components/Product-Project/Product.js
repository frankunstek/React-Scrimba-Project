import React from 'react'

function Product(props) {
    return (
        <div>
            <p><b>Product: {props.product.name}</b></p>
            <p>Price: {props.product.price.toLocaleString("de-DE", { style: "currency", currency: "EUR" })}</p>
            <p>Description: {props.product.description}</p>
            <hr />
        </div>
    )
}

export default Product