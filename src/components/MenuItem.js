import { ICON_URL } from "../utils/constants";
export default MenuItem = ({ item }) => {
  const { info } = item;
  console.log("info:", info);
  const {
    name,
    showImage,
    imageId,
    ratings,
    description,
    price,
    defaultPrice,
  } = info;
  const { aggregatedRating } = ratings;
  return (
    <div class="menu-card">
      <div>
        <p>{name}</p>
        <p>INR {defaultPrice / 100 || price / 100}</p>
        <p>{aggregatedRating.rating}</p>
        <p>{description}</p>
      </div>
      <div>
        <img class="menu-item-img" src={ICON_URL + imageId} />
      </div>
    </div>
  );
};
