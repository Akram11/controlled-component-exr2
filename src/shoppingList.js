import React, {Component} from 'react';
import AddItem from  './addItem';
import DeleteItem from './Deleteitem';
import ItemsList from './ItemsList';


class ShoppingList extends React.Component{

    render(){
        return (
            <div>
            
            <h1>this is a Shopping list</h1>
            <DeleteItem/>
           
            </div>
        )

    }

}

export default ShoppingList