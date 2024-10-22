import React from "react";

const Hero = () => {
  return (
    <div className=" flex flex-col-reverse mt-10 gap-2">
      <img
        src="/aseset/college-students-studying2_0.jpg"
        alt=""
        className=" ml-2 mr-2"
      />
      <p className=" font-title text-3xl font-extrabold ml-2 mr-2">
        Are You <span className=" text-primary-0"> Brilliant </span>but Needy ?
        <span className=" ml-44"> SUPPORT Got You </span>
      </p>
    </div>
  );
};

export default Hero;
