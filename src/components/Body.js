import restaurantList from "../utils/mockData";
import { obj } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState } from "react";
import { useEffect } from "react";
export default Body = () => {
  const [restroList, setRestroList] = useState([]);
  const [filteredRestroList, setFilteredRestroList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const filterTopRatedRestros = () => {
    obj = { name: "sss" };
    console.log(obj);
    const filteredList = restroList.filter((e) => e.info.avgRatingString > 4);
    setFilteredRestroList(filteredList);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.0082852&lng=79.5512119&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log(restaurants);
    setRestroList(restaurants);
    setFilteredRestroList(restaurants);
  };

  return !restroList?.length ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter-section">
        <div className="search">
          <input
            className="search-box"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            value={searchTerm}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              const matchedItems = restroList.filter((e) =>
                e.info.name.toLowerCase().includes(searchTerm.toLowerCase())
              );
              setFilteredRestroList(matchedItems);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter-btn">
          <button onClick={filterTopRatedRestros}>Top Rated Restaurants</button>
        </div>
      </div>
      <div className="restaurant-container">
        {filteredRestroList.map((e) => (
          <RestaurantCard key={e.info.id} resData={e} />
        ))}
      </div>
    </div>
  );
};
