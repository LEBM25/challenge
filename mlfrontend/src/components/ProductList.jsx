import React, { useCallback, useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import { ProductCard } from './ProductCard';


export const ProductList = ({ history }) => {

    const useQuery = () => new URLSearchParams(useLocation().search);
    const query = useQuery();    
    const search = query.get("search")
    const url = `http://localhost:8001/api/items?q=${search}`
    
    const [productList, setProductList] = useState({})
    const [loading, setLoading] = useState(false)

    const { items, categories } = productList

    const handleProductDetail = (id) => {
        history.push(`/items/${id}`)
    }

    const getProductList = useCallback(() =>{
        fetch(url)
        .then(response => response.json())
        .then(json => {
            localStorage.setItem('app', JSON.stringify(json.categories));
            setProductList(json)
            setLoading(true)
        })
    },[url])

    useEffect(() => {
        getProductList()
    }, [getProductList])

    return (
        <>
            {(loading && categories) && (
                <>
                    <div className="boxProductList">
                        <span className="breadcrumb">
                            {categories.join(" > ")}
                        </span>
                        <div className="displayProductList">
                            {
                                items.map(item => {
                                    return <ProductCard key={item.id} item={item} handleProductDetail={handleProductDetail} />
                                })

                            }
                        </div>

                    </div>

                </>
            )}

        </>
    )
}
