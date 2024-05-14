import { ICON_URL } from "../utils/constants";
export default RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    sla,
    costForTwo,
    avgRatingString,
    cloudinaryImageId,
  } = resData?.info;
  const deliveryTime = sla?.deliveryTime;
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-img"
        src={ICON_URL + cloudinaryImageId}
        alt="cookie"
      />
      <h3 className="line-clamp">{name}</h3>
      <h4 className="line-clamp">{cuisines?.join(",")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRatingString}</h4>
      <h4>{deliveryTime} mins</h4>
    </div>
  );
};
