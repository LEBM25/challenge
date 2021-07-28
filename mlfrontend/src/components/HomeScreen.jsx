import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRouter } from '../router/AppRouter';
import { SearchInput } from './SearchInput';



export const HomeScreen = () => {

    return (
        <>  
            <Router>
                <SearchInput />
                <div className="container">
                    <AppRouter />
                </div>
            </Router>
        </>
    )
}
