import {React,useContext} from "react";
import {CartContext} from  "../../context/Cart"

function Card(props) {

  const cart = useContext(CartContext)
console.log(cart);
  return (
    <div className="box">
      <span />
      <div className="content">
        <h2>{props.name}</h2>
        <p>Price : ${props.price}</p>
      </div>
    </div>
  );
}

export default Card;
