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
    <div className="m-4 p-4 w-[250] rounded-xl bg-gray-200 hover:bg-yellow-100">
      <img
        className="w-[100%] h-[200] rounded-xl"
        src={ICON_URL + cloudinaryImageId}
        alt="cookie"
      />
      <h3 className="font-bold line-clamp-1">{name}</h3>
      <h4 className="line-clamp-1">{cuisines?.join(",")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRatingString}</h4>
      <h4>{deliveryTime} mins</h4>
    </div>
  );
};
