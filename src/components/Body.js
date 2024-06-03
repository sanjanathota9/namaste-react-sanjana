import restaurantList from "../utils/mockData";
import { obj } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
export default Body = () => {
  //when state variable(Local state variables) updates then the component rerenders
  const [restroList, setRestroList] = useState([]);
  const [filteredRestroList, setFilteredRestroList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const filterTopRatedRestros = () => {
    obj = { name: "sss" };
    console.log(obj);
    const filteredList = restroList.filter((e) => e.info.avgRatingString > 4);
    setFilteredRestroList(filteredList);
    //console.log(filteredList) this log gives old value of filteredList because new value will updates only when the component rerenders
  };
  //if dependency array is not specified useEffect called everytime when the component renders
  //if dependency array is empty useEffect its called only on initial component render
  //if dependency array is [restroList] its called when restroList is updated
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.0082852&lng=79.5512119&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
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
          <Link to={"/restaurant/" + e.info.id}>
            <RestaurantCard key={e.info.id} resData={e} />
          </Link>
        ))}
      </div>
    </div>
  );
};
