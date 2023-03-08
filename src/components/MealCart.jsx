import React from "react";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./MealCart.css";

const MealCart = ({ name, image, id }) => {
  return (
    <div className=" relative parent">
      <img
        src={image}
        className=" w-[260px] h-[260px] rounded-lg object-cover image shadow-lg"
        alt=""
      />
      <div className=" h-10 font-serif font-medium truncate w-28 text-orange-500 text-xl title">
        {name}
      </div>
      <Link to={`/detail/${id}`}>
        <p className=" top-[40%] left-[40%] w-12 h-12 rounded-[100%] bg-orange-500  flex items-center justify-center absolute icon">
          <BiSearch className=" text-2xl text-white" />
        </p>
      </Link>
    </div>
  );
};

export default MealCart;
