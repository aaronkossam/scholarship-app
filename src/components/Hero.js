import React from "react";

const Hero = () => {
  return (
    <div className=" mr-4 ml-4">
      <div className=" hidden lg:flex">
        <p className=" font-title  mt-56 font-abold ">
          <div className=" text-xm">
            Are You <span className=" text-primary-0"> Brilliant </span>but
            Needy ?<span className=" ml-44"> SUPPORT Got You </span>
          </div>
          <div>
            {" "}
            <p className=" italic text-base font-thin font-sans">
              {" "}
              Eu ea commodo proident sunt. Eu ea commodo proident sunt. Eu ea
              commodo proident sunt.
            </p>
          </div>
        </p>

        <img
          src="/aseset/college-students-studying2_0.jpg"
          alt=""
          className=" mr-6 rounded-full"
        />
      </div>
      <div className=" flex flex-col-reverse mt-10 gap-2 lg:hidden ">
        <img
          src="/aseset/college-students-studying2_0.jpg"
          alt=""
          className=" ml-2 mr-2"
        />
        <p className=" font-title text-3xl font-extrabold ml-2 mr-2">
          Are You <span className=" text-primary-0"> Brilliant </span>but Needy
          ?<span className=" ml-44"> SUPPORT Got You </span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
