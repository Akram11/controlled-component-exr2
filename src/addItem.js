import React, {Component} from 'react';

class AddItem extends React.Component {
    render(){
        return(
            <div>
            <input type = "text" value = {this.props.value}></input>
            <button disabled={this.props.addItem}>Add</button>
            </div>
        )
    }

}

export default AddItem