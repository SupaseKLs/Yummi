"use client";
import { useState } from "react";
import Image from "next/image";
import Cart from "@/assets/svg/cart.svg"; 
import Close from "@/assets/svg/Close.svg"; 

const CartSlide = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen((prev) => !prev);
  };

  const closeCart = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div onClick={toggleCart} className="cursor-pointer">
        <Image src={Cart} alt="Cart" />
      </div>

      <div
        className={`z-20 fixed top-0 right-0 w-11/12 md:w-1/3 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          isOpen ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between">
          <h2>Your Cart</h2>
          <button onClick={closeCart} className="mt-4 p-2 bg-red-500 text-white rounded">
            <Image src={Close} alt="Close" width={24} height={24} />
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          onClick={closeCart}
          className="fixed inset-0 bg-black opacity-50 z-10"
        ></div>
      )}
    </div>
  );
};

export default CartSlide;
