import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import C3 from "../img/c1.png";
import { motion } from "framer-motion";
import { BiMinus, BiPlus } from "react-icons/bi";
import { RiRefreshFill } from "react-icons/ri";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
const CartContainer = () => {
  const [{ cartShow, cartItems }, dispatch] = useStateValue();
  const hideCart = () => {
    dispatch({ type: actionType.SET_CART_SHOW, cartShow: !cartShow });
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 1, y: 0 }}
      className=" fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col z-[101]"
    >
      <div className="w-full flex items-center justify-between p-4 cursor-pointer">
        <motion.div whileTap={{ scale: 0.75 }} onClick={hideCart}>
          <MdOutlineKeyboardBackspace className="text-textColor text-3xl" />
        </motion.div>
        <p className="text-textColor text-lg font-semibold">Cart</p>
        <motion.p
          whileTap={{ scale: 0.75 }}
          className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md cursor-pointer text-textColor text-base"
        >
          Clear <RiRefreshFill />{" "}
        </motion.p>
      </div>
      {/* Bottom Section */}
      <div className=" w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col">
        <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
          {/* Cart Item */}
          {cartItems &&
            cartItems.map((item) => (
              <div
                key={item.id}
                className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2"
              >
                <img
                  src={item.imageSrc}
                  className="w-20 h-20 max-w-[60px] rounded-full object-contain"
                  alt=""
                />

                {/* Name Section */}
                <div className="flex flex-col gap-2">
                  <p className="text-base text-gray-50">{item.name}</p>
                  <p className="text-sm block text-gray-300 font-semibold">
                    $ {item.price}
                  </p>
                </div>

                {/* Button Section */}
                <div className="group flex items-center gap-2 ml-auto cursor-pointer">
                  <motion.div whileTap={{ scale: 0.75 }}>
                    <BiMinus className="text-gray-50" />
                  </motion.div>
                  <p className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">
                    {item.length}
                  </p>
                  <motion.div whileTap={{ scale: 0.75 }}>
                    <BiPlus className="text-gray-50" />
                  </motion.div>
                </div>
              </div>
            ))}
        </div>
        {/* Cart Item End */}
        {/* Cart Total Section */}
        <div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
          <div className="w-full flex items-center justify-between">
            <p className="text-gray-400 text-lg">sub Total</p>
            <p className="text-gray-400 text-lg">$ 8.5</p>
          </div>
          <div className="w-full flex items-center justify-between">
            <p className="text-gray-400 text-lg">Delivery</p>
            <p className="text-gray-400 text-lg">$ 2.5</p>
          </div>
          <div className="w-full border-b border-gray-600 my-2"></div>
          <div className="w-full flex items-center justify-between">
            <p className="text-gray-200 text-xl font-semibold">Total</p>
            <p className="text-gray-200 text-xl font-semibold">$11.5</p>
          </div>
          <motion.button
            whileTap={{ scale: 0.8 }}
            type="button"
            className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg "
          >
            Check out
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default CartContainer;
