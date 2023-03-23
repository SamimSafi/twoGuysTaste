import React from "react";
import Deleivery from "../img/delivery.png";
import Herobg from "../img/heroBg.png";
import I1 from "../img/i1.png";
import { heroData } from "../utils/data";

const HomeContainer = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
      id="home"
    >
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-2 py-1 rounded-full">
          <p className="text-base text-orange-400 font-semibold">
            Bike Delivery
          </p>
          <div className=" w-6 h-6 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Deleivery}
              className="w-full h-full object-contain"
              alt="Delivery"
            />
          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery in
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            Your City
          </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          dolor dignissimos ab fugit quasi vitae repellat atque eius ducimus
          impedit deleniti repudiandae, ipsa assumenda totam commodi
          reprehenderit, adipisci illum quibusdam!
        </p>
        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={Herobg}
          className="ml-auto h-420 w-full lg:w-auto lg:h-650"
          alt="image"
        />
        <div className="w-full h-full absolute top-0 left-0 flex  flex-wrap items-center justify-center lg:px-32 py-4 gap-4  ">
          {heroData &&
            heroData.map((i) => (
              <div
                key={i.id}
                className=" lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl  flex flex-col items-center justify-center  shadow-lg "
              >
                <img
                  src={i.imageSrc}
                  className="w-20 lg:w-40 -mt-10 lg:-mt-20"
                  alt={i.name}
                />
                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {i.name}
                </p>
                <p className="text-[12px] lg:text-sm font-semibold text-lighttextGray my-1 lg:my-3">
                  {i.dec}
                </p>
                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600">$</span>
                  {i.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
