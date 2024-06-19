import { Fragment, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantmenu";

export default RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  console.log(resInfo?.data?.cards[2]?.card?.card?.info);
  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const cards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (e) =>
        e.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
        e.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );
  console.log("Inside", cards);
  return (
    <div className="w-[80%] mx-auto my-0">
      <div className="ml-16 text-center text-2xl">
        <h1 className="font-bold">{name}</h1>
        <h2 className="m-2">
          {cuisines.join(",")}-{costForTwoMessage}
        </h2>
      </div>
      {cards.map((e) => (
        <div className="ml-8">
          <RestaurantCategory
            key={e?.card?.card?.title}
            title={e?.card?.card?.title}
            itemCards={e?.card?.card?.itemCards}
            showIcon={
              e?.card?.card?.["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" &&
              !e?.card?.card?.categories?.length
            }
          />
          {e?.card?.card?.categories?.map((i) => {
            return (
              <div key={i?.title}>
                <RestaurantCategory
                  title={i?.title}
                  key={i?.title}
                  itemCards={i?.itemCards}
                  showIcon="true"
                />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};
