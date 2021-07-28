import React from 'react'
import freeShipping from '../Assets/ic_shipping.png'

export const ProductCard = ({ item, handleProductDetail }) => {
    const { picture, title, price, id, state_name,free_shipping } = item
    const { amount, currency, decimals } = price
    const formatter = new Intl.NumberFormat('es-ar', {
        style: 'currency',
        currency
    });
    return (
        <>
            <div className="card" onClick={() => handleProductDetail(id)}>
                
                <img
                    className="imgProduct"
                    src={picture}
                    alt={title}
                />

                <div className="productDescription" >
                    <p className="price">
                        {formatter.format((amount + decimals))} {free_shipping && <img src={freeShipping} alt="free_Shipping" />}
                    </p>

                    <p className="title" >
                        {title}
                    </p>
                </div>
                
                <div className="stateName">
                    {state_name}
                </div>
            </div>
        </>
    )
}
