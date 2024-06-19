import restaurantList from "../utils/mockData";
import { obj } from "../utils/constants";
import RestaurantCard, { RestaurantCardPromoted } from "./RestaurantCard";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "./Shimmer";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { UserClass } from "./UserClass";
import UserContext from "../utils/UserContext";
export default Body = () => {
  //when state variable(Local state variables) updates then the component rerenders
  const [restroList, setRestroList] = useState([]);
  const [filteredRestroList, setFilteredRestroList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const PromotedRestaurantCard = RestaurantCardPromoted(RestaurantCard);
  const { userName, setUserName } = useContext(UserContext);
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
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>Internet is down</h1>;
  return !restroList?.length ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter-section flex items-center">
        <div className="search m-4 p-4">
          <input
            className="search-box border border-solid border-black"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            value={searchTerm}
          ></input>
          <button
            className="px-4 py-2 bg-green-200 m-4 rounded-2xl"
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
        <div className="p-2 bg-green-200 rounded-2xl">
          <button onClick={filterTopRatedRestros}>Top Rated Restaurants</button>
        </div>
        <div className="p-2">
          <label>UserName </label>
          <input
            className="border border-solid border-black"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestroList.map((e) => (
          <Link to={"/restaurant/" + e.info.id}>
            {e.info.id ? (
              <PromotedRestaurantCard key={e.info.id} resData={e} />
            ) : (
              <RestaurantCard key={e.info.id} resData={e} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
