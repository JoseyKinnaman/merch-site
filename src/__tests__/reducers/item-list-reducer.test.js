import itemListReducer from '../../reducers/item-list-reducer';

describe('itemListReducer', ()=> {

  const currentState = {
    1: {
      name: 'Magic Shirt',
      description: 'A shirt.',
      price: '$29',
      quantity: 25,
      id: 1},
    2: {
      name: 'Magic thong',
      description: 'Magic for your bum.',
      price: '$16',
      quantity: 30,
      id: 2
     }
  }
  let action;
  const itemData = {
    name: 'Magic Shirt',
    description: 'A shirt.',
    price: '$29',
    quantity: 25,
    id: 1
  };
  test('Should return default state if there is no action type passed into the reducer',  () => {
    expect(itemListReducer({}, { type: null })).toEqual({})
  });
  test('Should successfully add new item data to itemList', () => {
    const { name, description, price, quantity, id, path } = itemData;
    action = {
      type: 'ADD_ITEM',
      name: name,
      description: description,
      price: price,
      quantity: quantity,
      id: id,
      path: path
    };
    expect(itemListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        description: description,
        price: price,
        quantity: quantity,
        id: id
      }
    });
  });
  test('Should successfully delete an item', () => {
    action = {
      type: 'DELETE_ITEM',
      id: 1
    };
    expect(itemListReducer(currentState, action)).toEqual({
      2: {
        name: 'Magic thong',
        description: 'Magic for your bum.',
        price: '$16',
        quantity: 30,
        id: 2}
    });
  }); 
});