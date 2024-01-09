import React from "react";
import data from "../../components/database/index.json";
import { BsCart } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addItem, addSubTotal } from "../../redux/actions";

const Home = () => {
  const products = data.product;
  const dispatch = useDispatch();
  const cartProduct = useSelector((state) => state.shopReducer.cartProduct);

  const handleAdd = (item) => {
    let findItem = cartProduct.find((elem) => elem.id === item.id);
    if (findItem) {
      findItem.quantity += 1;
      dispatch(addSubTotal(2));
    } else {
      dispatch(addItem(item));
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10 px-10">
      {products.map((item) => {
        return (
          <div
            key={item.id}
            className="p-5 shadow-md bg-white rounded-md w-full"
          >
            <div className="flex justify-center h-[200px] w-full">
              <img
                src={item.img}
                className="w-[200px] object-cover h-full"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-2 p-2">
              <div className="text-[20px] font-semibold">{item.name}</div>
              <div>
                {item.description.length > 100
                  ? item.description.slice(0, 100) + "...."
                  : ""}
              </div>
              <div className="flex justify-between items-center">
                <div className="font-semibold">$ {item.price}</div>
                <button
                  onClick={() => {
                    handleAdd(item);
                  }}
                  className="text-[17px] py-2 text-white px-4 bg-green-600 rounded"
                >
                  <BsCart />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
