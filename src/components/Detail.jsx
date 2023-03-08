import React, { useEffect, useState } from "react";
import { json, Link, useParams } from "react-router-dom";
import { BsYoutube } from "react-icons/bs";
import { GiCampCookingPot } from "react-icons/gi";

const Detail = () => {
  const { id } = useParams();
  const [meals, setMeals] = useState({});

  const [item, setItem] = useState([]); // for ingredients

  // for instruction and ingredient UI
  const [instruction, setInstruction] = useState(true);
  const [ingredient, setIngredient] = useState(false);

  // instruction and ingredient UI
  const instructionAndIngredient = (showUI) => {
    setInstruction(showUI);
    setIngredient(!showUI);
  };

  useEffect(() => {
    fetchMeal();
  }, []);

  const fetchMeal = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const { meals } = await api.json();
    setMeals(meals[0]);
    console.log(meals[0]);
  };

  // useEffect for ingredient
  useEffect(() => {
    const ingredients = [
      { id: 1, name: meals.strIngredient1 },
      { id: 2, name: meals.strIngredient2 },
      { id: 3, name: meals.strIngredient3 },
      { id: 4, name: meals.strIngredient4 },
      { id: 5, name: meals.strIngredient5 },
      { id: 6, name: meals.strIngredient6 },
      { id: 7, name: meals.strIngredient7 },
      { id: 8, name: meals.strIngredient8 },
      { id: 9, name: meals.strIngredient9 },
    ];
    setItem(ingredients);
  }, [meals]);

  return (
    <div className=" grid md:grid lg:flex w-[80%] mx-auto md:mt-30 h-screen gap-10 items-center">
      <img
        src={meals.strMealThumb}
        className=" h-[400px] rounded-lg object-cover shadow-lg shadow-gray-800"
        alt=""
      />
      <div className=" ">
        <h1 className=" text-3xl font-semibold text-gray-700 my-3 tracking-wide">
          {meals.strMeal}
        </h1>
        <h2 className=" text-2xl text-yellow-700 font-serif my-2">
          meal of {meals.strArea}
        </h2>
        <p className=" text-lg font-semibold shadow-lg text-blue-900 my-5 bg-orange-400 w-[100px] text-center rounded-sm">
          "{meals.strCategory}"
        </p>

        {/* For instruction and ingredient UI */}
        <div className="">
          <button
            className=" h-9 text-normal font-semibold font-mono shadow-xl text-blue-900 bg-red-500 w-[120px] text-center rounded-lg mr-2"
            onClick={() => instructionAndIngredient(true)}
          >
            Instruction
          </button>
          <button
            className=" h-9 text-normal font-semibold font-mono shadow-xl text-blue-900 bg-red-500 w-[120px] text-center rounded-lg"
            onClick={() => instructionAndIngredient(false)}
          >
            Ingredients
          </button>

          {/* toggle conditioning */}
          <div className={`${instruction ? "" : "hidden"}`}>
            <h1 className=" my-4 text-lg font-serif text-blue-700 font-semibold">
              Instruction
            </h1>
            <p className=" text-black tracking-wide text-sm mt-2 mb-5">
              {meals.strInstructions}
            </p>
          </div>

          <div className={`${ingredient ? "" : "hidden"}`}>
            <h1 className=" my-4 text-lg font-serif text-blue-700 font-semibold">
              Ingredients
            </h1>

            {item.map((item) => {
              return (
                <div className="" key={item.id}>
                  <div className=" text-sm flex items-center font-mono my-2 font-semibold w-[70%] text-black">
                    <GiCampCookingPot className="mr-2 text-orange-700" />
                    {item.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* This is ingredient with mapping */}

        <div className=" mt-10">
          <a
            href={meals.strYoutube}
            className="flex items-center w-[50%] px-2 py-2"
          >
            <BsYoutube className=" text-3xl text-red-700 mr-1" />
            <p className=" font-serif text-black">YouTube</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Detail;
