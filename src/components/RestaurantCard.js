export default RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisine, cft, rating } = resData?.info;
  const { deliveryTime } = resData?.order;
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-img"
        src={resData.info.image.url}
        alt="cookie"
      />
      <h3>{name}</h3>
      <h4>{cuisine.map((e) => e.name).join(",")}</h4>
      <h4>{cft.text}</h4>
      <h4>{rating.aggregate_rating}</h4>
      <h4>{deliveryTime} mins</h4>
    </div>
  );
};
