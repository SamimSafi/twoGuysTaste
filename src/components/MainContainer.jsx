import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import HomeContainer from "./HomeContainer";
import { motion } from "framer-motion";
import RowContainer from "./RowContainer";
import MenuContainer from "./MenuContainer";
import { rowData } from "../utils/data";
import CartContainer from "./CartContainer";
import { useStateValue } from "../context/StateProvider";
const MainContainer = () => {
  const [scrollValue, setScrollValue] = useState(0);
  const [{ cartShow }, dispatch] = useStateValue();
  useEffect(() => {}, [scrollValue]);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <HomeContainer />
      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
            our fresh & healthy fruits
          </p>
          <div className="hidden md:flex gap-3 items-center">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg
          bg-orange-300 hover:bg-orange-500 cursor-pointer hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(-200)}
            >
              <MdChevronLeft className="text-white text-lg" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg
          bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
              onClick={() => {
                setScrollValue(200);
              }}
            >
              <MdChevronRight className="text-white text-lg" />
            </motion.div>
          </div>
        </div>
        <RowContainer scrollValue={scrollValue} flag={true} data={rowData} />
      </section>
      <MenuContainer />
      {cartShow && <CartContainer />}
    </div>
  );
};

export default MainContainer;
