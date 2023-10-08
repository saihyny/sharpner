import UserEnterFace from "./components/userEnterFace";
import UserDetail from "./components/UserDetail";

import React, { useState } from "react";
import "./App.css";

function App() {

  const [oldProductDetails, SetProduct] = useState([]);
  const [oldPrice, totalPrice] = useState(0);
 console.log(oldPrice)
  const ChangeUsers = (PrdId, PrdName, PrdPrice) => {

    totalPrice(PrdPrice);
    let mergeTxt = ' product Name ='+PrdName+' product Price='+PrdPrice+' Product id='+PrdId
    localStorage.setItem(PrdId,mergeTxt)
    SetProduct((previosState) => {
      return [
        ...previosState,
        { ProductId: PrdId, ProductName: PrdName, ProductPrice: PrdPrice,MergedText:mergeTxt,Total:oldPrice },
      ];
    });
  };

  return (
    <div>
      <UserEnterFace changeUsers={ChangeUsers}></UserEnterFace>
      <h2>Products Details</h2>
      <UserDetail users={oldProductDetails} Total={oldPrice} ></UserDetail>
    </div>
  );
}

export default App;
