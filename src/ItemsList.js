import React  from 'react';


const ItemsList = props => {

    return (
        
        <ol className="item">{props.items.map((item, index) => <li key={index}> {item} </li>)}</ol>
        
    )

}

export default ItemsList