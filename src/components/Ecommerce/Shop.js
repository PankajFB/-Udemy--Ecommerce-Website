import React from "react";
import Card from "./Card";

function shop() {
  const items = [
    { id: 1, name: "Laptop", price: 100 },
    { id: 2, name: "Iwatch", price: 200 },
    { id: 3, name: "Iphone", price: 300 },
    { id: 4, name: "Macbook", price: 450 },
  ];

  return (
    <div>
      <h1>This is our shop component bro</h1>

      <div className="container">
        {items.map((item) => {
          return (
            <Card key={item.id} name={item.name} price={item.price}></Card>
          );
        })}
      </div>
      <br />
    </div>
  );
}

export default shop;
