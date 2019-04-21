import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingList from './shoppingList'
import ItemsList from './ItemsList'
import DeleteItem from './Deleteitem'


class App extends React.Component {
  state = {
    items: [],
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleAddItem = item => {
    this.setState(prevState => ({ items: [...prevState.items, item] }));
  };

  handleDeleteLastItem = item => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    const value = this.state.value;
    const items = this.state.items;
    return (
      <div className="App">
        <ShoppingList value = {value} onAddItem={this.handleAddItem}/>
        <DeleteItem onDeleteLastItem = {this.handleDeleteLastItem}/>

        <ItemsList items = {items} items = {this.state.items}/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
      </div>
    );
  }
}

export default App;
