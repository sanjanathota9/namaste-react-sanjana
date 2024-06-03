import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import MenuItem from "./MenuItem";
import { useParams } from "react-router-dom";
export default RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const { resId } = useParams();
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.0082852&lng=79.5512119&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json?.data?.cards[2]?.card?.card?.info);
    //const restroData = json?.data?.cards[2]?.card?.card?.info;
    setResInfo(json.data);
  };
  if (resInfo === null) return <Shimmer />;
  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { cards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines.join(",")}</h2>
      <h2>{costForTwoMessage}</h2>
      {cards.map((e) => (
        <div class="menu-section">
          <p class="menu-item-title">{e?.card?.card?.title}</p>
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
