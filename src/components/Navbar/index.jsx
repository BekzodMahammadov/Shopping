import React from "react";
import { NavLink } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartProduct = useSelector((state) => state.shopReducer.cartProduct);

  return (
    <div className="flex justify-evenly py-8 bg-white shadow-md">
      <NavLink className="text-[18px] font-semibold uppercase" to={"/"}>
        Home
      </NavLink>
      <NavLink className={"text-2xl relative"} to={"/cart"}>
        <div
          className={`absolute ${
            cartProduct.length === 0 ? "hidden" : "block"
          } text-white text-[14px] w-[20px] top-[-8px] right-[-8px] h-[20px] bg-pink-500 flex justify-center items-center rounded-full`}
        >
          {cartProduct.length === 0 ? "" : cartProduct.length}
        </div>
        <BsCart />
      </NavLink>
    </div>
  );
};

export default Navbar;
