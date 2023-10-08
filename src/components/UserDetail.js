import React, { useState, useEffect } from "react";

const UserDetail = (props) => {
  const [TotalPrice, UpdatePrice] = useState(0);
  useEffect(() => {
    UpdatePrice((prev) => {
        console.log(prev,props.Total)
      let numericPrev = parseFloat(prev);
      let numericPrdPrice = parseFloat(props.Total);
      let sum = (numericPrev = numericPrev + numericPrdPrice);

      return sum;
    });
  }, [props.Total]);


  const [oldItems, setItems] = useState([]);
  console.log(oldItems);
  useEffect(() => {
    setItems(props.users);
  }, [props]);

  const handleDelete = (prdId,prdPrice) => {
    UpdatePrice((prev) => {
       
      let numericPrev = parseFloat(prev);
      let numericPrdPrice = parseFloat(prdPrice);
      let sum = numericPrev-numericPrdPrice

      return sum;
    });
    setItems((prevItems) =>
      prevItems.filter((users) => users.ProductId !== prdId)
    );

    localStorage.removeItem(prdId);
  };
  return (
    <div>
      <ul>
        {oldItems.map((user) => (
          <div key={user.ProductId}>
            <li key={user.ProductId}>
              {user.ProductName + "-" + user.ProductPrice}$
            </li>
            <button onClick={() => handleDelete(user.ProductId,user.ProductPrice)}>delete</button>
          </div>
        ))}
      </ul>
      <h2>Products Total Price</h2>
      <ul>
        <li>{TotalPrice}</li>
      </ul>
    </div>
  );
};
export default UserDetail;
