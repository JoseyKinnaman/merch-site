import React from 'react';
import Shirt from "../img/Shirt.png";
import Hoodie from "../img/Hoodie.jpg";
import Socks from "../img/Socks.jpeg";
import Vinyl from "../img/Vinyl.jpg";


const initialState =  {
  1: {
  name: 'Magic Shirt',
  description: 'A shirt. With the Magic Sword logo on it.',
  price: '$29',
  quantity: 25,
  id: "0",
  path: Shirt
},
2: {
  name: 'Magic Hoodie',
  description: 'A hoodie. With the Magic Sword logo on it. Also, magic.',
  price: '$49',
  quantity: 50,
  id: "1",
  path: Hoodie
},
3: {
  name: 'Magic Socks',
  description: 'A rad pair of socks. They have swords on them.',
  price: '$20',
  quantity: 35,
  id: "2",
  path: Socks
},
4: {
  name: 'Endless Vinyl',
  description: 'Put that music in your ears!',
  price: '$20',
  quantity: 40,
  id: "3",
  path: Vinyl
}
}
export default initialState;