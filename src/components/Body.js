import restaurantList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
export default Body = () => {
  const [restroList, setRestroList] = useState(restaurantList);
  const filterTopRatedRestros = () => {
    const filteredList = restroList.filter(
      (e) => e.info.rating.rating_text > 4
    );
    setRestroList(filteredList);
  };
  return (
    <div className="body">
      <div className="filter-btn">
        <button onClick={filterTopRatedRestros}>Top Rated Restaurants</button>
      </div>
      <div className="restaurant-container">
        {restroList.map((e) => (
          <RestaurantCard key={e.info.resId} resData={e} />
        ))}
      </div>
    </div>
  );
};
