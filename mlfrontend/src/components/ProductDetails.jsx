import React, { useEffect, useState } from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import freeShipping from '../Assets/ic_shipping.png'

export const ProductDetails = React.memo(({ match }) => {

    const translateCondition = {
        new: "Nuevo",
        used: "Usado"
    }

    const { id } = match.params
    const url = `http://localhost:8001/api/items/${id}`
    const [productDetails, setProductDetails] = useState({})
    const [loading, setLoading] = useState(false)
    const categories = JSON.parse(localStorage.getItem('app')) || [];
    const { condition, title, price, free_shipping, description, pictureDetail, sold_quantity } = productDetails


    const fixDescription = (description) => {
        const newText = description.split('\n').map((str, idx) => <p key={idx}>{str}</p>);
        return newText;
    }


    const getCurrency = () => {
        const { amount, currency, decimals } = price
        const formatter = new Intl.NumberFormat('es-ar', {
            style: 'currency',
            currency
        });

        return formatter.format((amount + decimals))
    }

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => {
                setProductDetails({ ...json.item })
                setLoading(true)
            })
    }, [url])
    
    return (
        <div className="boxProductList">
            {loading && (<span className="breadcrumb">
                {`${categories.join(" > ")} > ${title}`}
            </span>)
            }
            <div className="productDetails">
                {
                    (loading && condition) && (
                        <>

                            <div className="boxDetail ">
                                <div className="slider">
                                    {
                                        <SimpleImageSlider
                                            width={680}
                                            height={500}
                                            images={pictureDetail}
                                            showBullets={true}
                                            showNavs={true}
                                        />
                                    }
                                </div>

                                <div className="boxSold">
                                    <p className="soldDetail">
                                        {`${translateCondition[condition]} - ${sold_quantity} vendidos`} {free_shipping && <img src={freeShipping} alt="free_Shipping" />}
                                    </p>
                                    <p className="title">{title}</p>
                                    <p className="currency">{getCurrency()}</p>
                                    <button
                                        type="button"
                                        className="buyButton" >
                                        Comprar
                                    </button>
                                </div>

                                <div className="description">
                                    <p className="titleDescription"> Descripción del Producto</p>
                                    {fixDescription(description)}
                                </div>
                            </div>

                        </>
                    )
                }

            </div>
        </div>
    )
})
