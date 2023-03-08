import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./MealCart.css";

const Searcher = () => {
  const location = useLocation();
  const [meals, setMeals] = useState([]);
  const data = location.state.value;

  console.log(location);

  useEffect(() => {
    fetchMealName();
  }, []);

  const fetchMealName = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${data}`
    );
    const { meals } = await api.json();
    setMeals(meals);
    console.log(meals);
  };

  const filterMeals = meals.filter((meal) => {
    return meal.strMeal.toLowerCase().includes(data.toLowerCase());
  });
  console.log(data);
  console.log(filterMeals);

  return (
    <>
      <div className=" mt-20">
        {filterMeals?.map((filterMeal, index) => {
          return (
            <div className=" flex flex-wrap justify-center my-5">
              <div className=" relative parent">
                <img
                  src={filterMeal.strMealThumb}
                  className=" w-[260px] h-[260px] rounded-lg object-cover image shadow-lg"
                  alt=""
                />
                <div className=" h-10 font-serif font-medium truncate w-28 text-orange-500 text-xl title">
                  {filterMeal.strMeal}
                </div>
                <Link to={`/detail/${filterMeal.idMeal}`}>
                  <p className=" top-[40%] left-[40%] w-12 h-12 rounded-[100%] bg-orange-500  flex items-center justify-center absolute icon">
                    <BiSearch className=" text-2xl text-white" />
                  </p>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Searcher;
