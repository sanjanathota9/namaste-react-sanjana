//JSX---html like structure inside js,below jsx is converted into
//ReactElement in background which is js object(this convertion is done by babel which is transpiler)

import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";

//Dynamic Bundling
//lazy Loading
//On demand loading
//Dynamic import
const Grocery = lazy(() => import("./components/Grocery"));
const App = () => {
  const [username, setUserName] = useState("");
  useEffect(() => {
    const data = {
      name: "sanjana thota",
    };
    setUserName(data.name);
  }, []);
  return (
    //below is the way to change userContext if we wrap this only around header only the updated username will be visible in header
    <UserContext.Provider value={{ userName: username, setUserName }}>
      <div className="app-container">
        <Header />
        <Outlet />
        {/**outlet will be filled with children based on path */}
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense>
            <Grocery fallback={<h1>Loading</h1>} />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
