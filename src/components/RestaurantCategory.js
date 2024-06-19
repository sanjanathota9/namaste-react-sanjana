import { Fragment, useState } from "react";
import MenuItem from "./MenuItem";
const RestaurantCategory = ({ itemCards, title, showIcon, showItems }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [icon, changeIcon] = useState("👇🏽");
  const toggle = () => {
    setIsOpened(!isOpened);
    !isOpened ? changeIcon("👆🏽") : changeIcon("👇🏽");
  };
  return (
    <div>
      <div
        className={`mx-auto my-4 ${
          showIcon ? "shadow-lg" : ""
        } bg-gray-50 flex justify-between p-4 pointer-events-auto`}
      >
        <span
          className={
            showIcon ? "ml-8 font-bold text-lg" : "ml-8 font-bold text-2xl"
          }
        >
          {title}
          {showIcon ? `(${itemCards?.length})` : ""}
        </span>
        <span onClick={toggle}>{showIcon ? icon : ""}</span>
      </div>
      {isOpened && (
        <ul>
          {itemCards?.map((i) => (
            <MenuItem item={i?.card} />
          ))}
        </ul>
      )}
    </div>
  );
};
export default RestaurantCategory;
