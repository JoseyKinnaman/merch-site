export default (state = {}, action) => {
  const { name, description, price, quantity, id, path } = action;
  switch (action.type) {
    case 'ADD_ITEM':
      return Object.assign({}, state, {
        [id]: {
          name: name,
          description: description,
          price: price,
          quantity: quantity,
          id: id,
          path: path
        }
      });
    case 'DELETE_ITEM':
      const newState = { ...state };
      delete newState[id];
      return newState;
      default:
        return state;
  }
};