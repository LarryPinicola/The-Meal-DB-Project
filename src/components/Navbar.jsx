import React, { useEffect, useRef, useState } from "react";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const ref = useRef();
  const nav = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    const data = ref.current.value;
    nav("/search", { state: { value: data } });
    console.log(ref);
    console.log(data);
  };

  return (
    <div className=" flex justify-between top-0 z-10 p-4 sticky bg-blue-100 items-center rounded-lg shadow">
      <Link to={"/"}>
        <GiForkKnifeSpoon className=" text-5xl ml-10 text-orange-600" />
      </Link>
      <div className=" flex align-middle">
        <form action="" onSubmit={submitHandler}>
          <input
            ref={ref}
            type="text"
            className=" px-2 rounded-xl shadow=lg placeholder-white bg-orange-500 h-10 w-[190px]"
            placeholder="Search Meals.."
          />
        </form>
      </div>
    </div>
  );
};

export default Navbar;
