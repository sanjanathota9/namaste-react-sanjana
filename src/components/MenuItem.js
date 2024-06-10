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
    <div class="flex p-4 m-8 bg-gray-200 rounded-xl justify-between">
      <div className="w-[70%] text-lg font-bold">
        <p>{name}</p>
        <p>INR {defaultPrice / 100 || price / 100}</p>
        <p>{aggregatedRating.rating}</p>
        <p>{description}</p>
      </div>
      <div>
        <img class="h-[200]" src={ICON_URL + imageId} />
      </div>
    </div>
  );
};
