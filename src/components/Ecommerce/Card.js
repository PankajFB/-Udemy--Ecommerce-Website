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
        
      <button type="button" className="btn btn-primary"
       onClick={()=>cart.setItem([...cart.item,{name:props.name,price:props.price}])}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Card;
