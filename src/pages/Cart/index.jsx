import React from "react";
import { useSelector } from "react-redux";

import Card from "../../components/Card";

const Cart = () => {
  const cartProduct = useSelector((state) => state.shopReducer.cartProduct);
  const totalPrice = useSelector((state) => state.shopReducer.totalPrice);

  console.log(cartProduct);
  return (
    <div>
      <div className="mt-10 grid lg:grid-cols-2 xl:grid-cols-3 gap-4 px-10">
        {cartProduct.map((item) => {
          return <Card key={item.id} item={item} />;
        })}
      </div>
      <div className="flex justify-center mt-10 font-semibold text-[20px]">
        Umumiy narx : ({totalPrice})
      </div>
    </div>
  );
};

export default Cart;
