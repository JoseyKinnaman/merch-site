import React from 'react';
import NewItemForm from './NewItemForm';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';
import EditItemForm from "./EditItemForm";
import Shirt from "../img/Shirt.png";
import Hoodie from "../img/Hoodie.jpg";
import Socks from "../img/Socks.jpeg";
import Vinyl from "../img/Vinyl.jpg";
import Pin from "../img/Pin.jpg";

class ItemControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedItem: null,
      editing: false,
      itemList: [
        {
          path: Shirt,
          name: 'Magic Shirt',
          description: 'A shirt. With the Magic Sword logo on it.',
          price: '$29',
          quantity: 25,
          id: "0"
        },
        {
          path: Hoodie,
          name: 'Magic Hoodie',
          description: 'A hoodie. With the Magic Sword logo on it. Also, magic.',
          price: '$49',
          quantity: 50,
          id: "1"
        },
        {
          path: Socks,
          name: 'Magic Socks',
          description: 'A rad pair of socks. They have swords on them.',
          price: '$20',
          quantity: 35,
          id: "2"
        },
        {
          path: Vinyl,
          name: 'Endless Vinyl',
          description: 'Put that music in your ears!',
          price: '$20',
          quantity: 40,
          id: "3"
        }
      ]
    };
  }

  handleClick = () => {
    if (this.state.selectedItem != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedItem: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
     }));
    }
  }

  handleAddingNewItemToList = (newItem) => {
    const newItemList = this.state.itemList.concat(newItem);
    this.setState({itemList: newItemList,
                  formVisibleOnPage: false})
  }
  
  handleChangingSelectedItem = (id) => {
    const selectedItem = this.state.itemList.filter(item => item.id === id)[0];
    this.setState({selectedItem: selectedItem});
  }

  handleDeletingItem = (id) => {
    const newItemList = this.state.itemList.filter(item => item.id !== id)[0];
    this.setState({
      itemList: newItemList,
      selectedItem: null
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingItemInList = (itemToEdit) => {
    const editedItemList = this.state.itemList
                            .filter(item => item.id !== this.state.selectedItem.id)
                            .concat(itemToEdit);
    this.setState({
      itemList: editedItemList,
      editing: false,
      selectedItem: null
    });
  }

  handleBuyingItem = (id) => {
    const purchasedItem = this.state.itemList.filter(item => item.id === id)[0];
    purchasedItem.quantity -= 1;
    const editedItemList = this.state.itemList
                            .filter(item => item.id !== this.state.selectedItem.id)
                            .concat(purchasedItem);
    this.setState({
      itemList: editedItemList
    });
  }

  handleRestockingItem = (id) => {
    const restockedItem = this.state.itemList.filter(item => item.id === id)[0];
    restockedItem.quantity += 1;
    const editedItemList = this.state.itemList
                            .filter(item => item.id !== this.state.selectedItem.id)
                            .concat(restockedItem);
    this.setState({
      itemList: editedItemList
    });
  }



  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditItemForm 
                              item = {this.state.selectedItem} 
                              onEditItem = {this.handleEditingItemInList} />
      buttonText = "Return To Item List";
    } else if (this.state.selectedItem !== null) {
      currentlyVisibleState = <ItemDetail
                              item = {this.state.selectedItem}
                              onClickingDelete = {this.handleDeletingItem} 
                              onClickingEdit = {this.handleEditClick} 
                              onClickingBuy = {this.handleBuyingItem}
                              onClickingRestock = {this.handleRestockingItem}/>
      buttonText = "Return To Item List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewItemForm 
                              onNewItemCreation={this.handleAddingNewItemToList}/>
      buttonText = "Return To Item List";
    } else {
      currentlyVisibleState = <ItemList
                              itemList={this.state.itemList}
                              onItemSelection={this.handleChangingSelectedItem}/>;
      buttonText = "Add Item"
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default ItemControl;