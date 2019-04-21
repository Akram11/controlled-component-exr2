import React, {Component} from 'react';
import AddItem from  './addItem';
import DeleteItem from './Deleteitem';



class ShoppingList extends React.Component{

    render(){
        return (
            <form>
            <h1>this is a Shopping list</h1>
            <AddItem/>
            <DeleteItem/>
            </form>
        )

    }

}

export default ShoppingList