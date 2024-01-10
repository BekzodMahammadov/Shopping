import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";
import { FaPlus } from "react-icons/fa6";
import { deleteItem, minus, plus } from "../../redux/actions";

const Card = ({ item }) => {
  const cartProduct = useSelector((state) => state.shopReducer.cartProduct);

  const [result, setResult] = useState(item.quantity);
  const dispatch = useDispatch();
  const handleMinus = (item) => {
    dispatch(minus(item));
    setResult(result - 1);
  };
  const handlePlus = (item) => {
    dispatch(plus(item));
    setResult(result + 1);
  };
  const handleClose = (item) => {
    dispatch(deleteItem(item));
  };
  console.log(cartProduct);
  return (
    <div>
      <div className="flex ite p-4 gap-3 shadow-md bg-white rounded-md">
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
              <button onClick={() => handleClose(item)} className="text-[20px]">
                <FaTrashAlt />
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5">
            <button
              onClick={() => {
                if (item.quantity === 1) {
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
                handlePlus(item);
              }}
              className="py-2 px-2 text-white bg-green-500 rounded-md"
            >
              <FaPlus />
            </button>
          </div>
          <div className="font-semibold text-[18px]">$ {item.price}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
