import { ICON_URL } from "../utils/constants";
export default MenuItem = ({ item }) => {
  const { info } = item;
  console.log("info test:", info);
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
    <div className="flex p-4 m-8 bg-gray-200 rounded-xl justify-between">
      <div className="w-[70%] text-lg">
        <p className="font-bold">{name}</p>
        <p>INR {defaultPrice / 100 || price / 100}</p>
        <p>{aggregatedRating.rating}</p>
        <p>{description}</p>
      </div>
      <div className="flex flex-col	">
        <img className="h-[200] w-[200]" src={ICON_URL + imageId} />
        <button className="bg-white text-green-400 font-bold w-[70%] text-lg p-3 self-center -mt-8">
          ADD
        </button>
      </div>
    </div>
  );
};
