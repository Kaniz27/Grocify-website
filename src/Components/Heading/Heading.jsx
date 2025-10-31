import React from "react";

const Heading = ({highlight,heading}) => {
  return (
    <div>
      <div className=" mx-auto w-fit">
        <h2 className="md:text-5xl text-3xl font-bold ">
          <span className="text-orange-500">{highlight} </span>{heading}
        </h2>
        <div className="w-35 h-1 bg-orange-300 md:mt-6 mt-3 ml-auto"></div>
      </div>
    </div>
  );
};

export default Heading;
