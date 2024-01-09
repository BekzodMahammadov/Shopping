import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";
import { FaPlus } from "react-icons/fa6";
import { deleteItem } from "../../redux/actions";

const Cart = () => {
  const cartProduct = useSelector((state) => state.shopReducer.cartProduct);

  const dispatch = useDispatch();
  const [result, setResult] = useState(0);

  const handleMinus = (id) => {
    if (result > 1) {
      setResult(result - 1);
    } else if (result === 1) {
      dispatch(deleteItem(id));
    }
  };
  const handlePlus = () => {};
  const handleClose = (item) => {
    dispatch(deleteItem(item));
  };

  return (
    <div>
      <div className="mt-10 grid lg:grid-cols-2 xl:grid-cols-3 gap-4 px-10">
        {cartProduct.map((item) => {
          return (
            <div
              key={item.id}
              className="flex ite p-4 gap-3 shadow-md bg-white rounded-md"
            >
              <div>
                <img
                  src={item.img}
                  className="w-[200px] h-[120px] object-cover"
                  alt=""
                />
              </div>
              <div className="w-full flex flex-col gap-3">
                <div className="flex justify-between w-full items-center h-[30px]">
                  <div className="text-[18px] font-semibold">{item.name}</div>
                  <div>
                    <button
                      onClick={() => handleClose(item)}
                      className="text-[20px]"
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
                <div className="flex justify-center items-center gap-5">
                  <button
                    onClick={() => {
                      if (result === 1) {
                        handleClose(item);
                      } else {
                        handleMinus(item);
                      }
                    }}
                    className="py-2 px-2 text-white bg-green-500 rounded-md"
                  >
                    <TiMinus />
                  </button>
                  <p>{result}</p>
                  <button
                    onClick={() => {
                      handlePlus();
                    }}
                    className="py-2 px-2 text-white bg-green-500 rounded-md"
                  >
                    <FaPlus />
                  </button>
                </div>
                <div className="font-semibold text-[18px]">$ {item.price}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-10 font-semibold text-[20px]">
        Total price : (
        {cartProduct.reduce((accumulator, currentValue) => {
          console.log("test", cartProduct);
          return accumulator + currentValue.price * currentValue.quantity;
        }, 0)}
        )
      </div>
    </div>
  );
};

export default Cart;
