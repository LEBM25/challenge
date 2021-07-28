import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';

import { ProductDetails } from '../components/ProductDetails';
import { ProductList } from '../components/ProductList'


export const AppRouter = () => {
    return (
        <>  
        
            <Switch>
                <Route exact path="/items" component={ProductList} />
                <Route exact path="/items/:id" component={ProductDetails} />
                <Redirect to="/" />
            </Switch>
        
        </>
    )
}
