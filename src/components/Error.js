import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  const { data } = err;
  return (
    <div>
      <h1>Oopss!!</h1>
      <h2>Something Went Wrong {data}</h2>
    </div>
  );
};
export default Error;
