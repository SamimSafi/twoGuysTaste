import React, { useEffect, useRef, useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import FI1 from "../img/fi1.png";
import { motion } from "framer-motion";
import NotFound from "../img/NotFound.svg";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const RowContainer = ({ flag, scrollValue, data }) => {
  const [items, setItems] = useState([]);

  const [{ cartItems }, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: [...cartItems, items],
    });

    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  useEffect(() => {
    addToCart();

    console.log(items);
  }, [items]);

  const rowContainer = useRef();
  return (
    <div
      ref={rowContainer}
      className={`w-full flex items-center gap-2 my-12 scroll-smooth ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden scrollbar-none flex-wrap justify-center"
      }`}
    >
      {data && data.length > 0 ? (
        data.map((item) => (
          <div
            key={item.id}
            className="w-275 h-[175px] min-w-[275px]  md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg  py-2 px-4 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-between relative"
          >
            <div
              key={item.id}
              className="w-full flex items-center justify-between"
            >
              <motion.div
                className="w-40 h-40 -mt-8 drop-shadow-2xl"
                whileHover={{ scale: 1.2 }}
              >
                <img
                  src={item.imageSrc}
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.7 }}
                className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md"
                onClick={() => setItems([...cartItems, item])}
              >
                <MdAddShoppingCart className="text-white" />
              </motion.div>
            </div>
            <div
              className="w-full flex flex-col gap-4
         items-end justify-end"
            >
              <p className="text-textColor font-semibold text-base md:text-lg">
                {item.dec}
              </p>
              <p className="mt-1 text-sm text-gray-500"></p>
              <div className="flex items-center justify-center gap-8">
                <p className="text-lg text-headingColor font-semibold ">
                  {item.name}
                  <span className="text-sm text-red-500">$</span> {item.price}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <img src={NotFound} className="h-340" alt="NotFount" />
          <p className="text-xl text-headingColor font-semibold my-2">
            Items Not Available!
          </p>
        </div>
      )}
    </div>
  );
};

export default RowContainer;
