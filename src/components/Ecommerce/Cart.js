import React , {useContext} from 'react'
import {CartContext} from '../../context/Cart'
import Card from './Cart-card'


function Cart()  {
    const cart = useContext(CartContext)
    console.log(cart)
  return (
    <div className="container">
    {cart.item.map((item) => {
      return (
        <Card key={item.name} name={item.name} price={item.price}></Card>
      );
    })}
  </div>
  )
}

export default Cart;