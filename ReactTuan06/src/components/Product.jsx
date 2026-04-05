import React from 'react'

function Product() {
 
    const products = {
    1: "Iphone",
    2: "Samsung",
    3: "Laptop"
    }

    const { id } = useParams()

    return (
    <div>
        <h1>{products[id]}</h1>
        <p>Product ID: {id}</p>
    </div>
    )
}

export default Product