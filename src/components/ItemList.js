import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

function ItemList(props) {
  return (
    <React.Fragment>
      {Object.values(props.itemList).map((item) => {
        return <Item 
          whenItemClicked = {props.onItemSelection}
          path={item.path}
          name={item.name}
          description={item.description}
          price={item.price}
          quantity={item.quantity}
          id={item.id}
          key={item.id} />
      })}
    </React.Fragment>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.object,
  onItemSelection: PropTypes.func
}

export default ItemList;