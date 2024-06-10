import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import MenuItem from "./MenuItem";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantmenu";

export default RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  console.log(resInfo?.data?.cards[2]?.card?.card?.info);
  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { cards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;

  return (
    <div className="w-[80%] mx-auto my-0">
      <div className="ml-16">
        <h1 className="font-bold">{name}</h1>
        <h2>{cuisines.join(",")}</h2>
        <h2>{costForTwoMessage}</h2>
      </div>
      {cards.map((e) => (
        <div class="ml-8">
          <p class="ml-8 font-bold text-lg">{e?.card?.card?.title}</p>
          <ul>
            {e?.card?.card?.itemCards?.map((i) => (
              <MenuItem item={i?.card} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
