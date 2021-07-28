import React, {  useState } from 'react'
import { useHistory } from "react-router-dom";
import mlLogo from '../Assets/Logo_ML.png'
import imgSearch from '../Assets/ic_Search.png'

export const SearchInput = () => {

   
    const history = useHistory()
    const [inputSearch, setInputSearch] = useState("")
    const handleClick = () => {
        if (inputSearch === '')
            return

        history.push(`/items?search=${inputSearch}`)
    }


    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleClick()
        }
    }

    const handleHome = () => {
        setInputSearch("")
        history.push(`/`)
    }

    

    return (
        <div className="boxSearch">
            <div className="boxWrapper">
                <img className="logo" src={mlLogo} alt="MercadoLibre" onClick={handleHome} />
                <div className="formBox">
                    <input
                        className="inputSearch"
                        type="text"
                        placeholder="Nunca dejes de Buscar"
                        value={inputSearch}
                        onChange={({ target }) => setInputSearch(target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <button className="inputButton" onClick={handleClick}>
                        <img className="iconButton" src={imgSearch} alt="searchButton" />
                    </button>
                </div>
            </div>
        </div>
    )
}
