import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Body } from "./components/Body";
import Error from "./components/Error";
import UserContext from "./utils/UserContext";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import BasicExample from "./components/Login";
import { Shimmer } from "./components/Shimmer";
import store from "./utils/store";
import { Provider } from "react-redux";
import { Cart } from "./components/Cart";
const Profile = lazy(() => import("./components/ProfileClass"));
const About = lazy(() => import("./components/About"));
const Contact = lazy (()=> import("./components/Contact"));
const Instamart = lazy(()=> import("./components/Instamart"));


const AppLayout = () => {

  const [user,setUser] = useState({
    name: "Mayuri",
    email: "mayuri@gmail.com"
  });

  return (
    <Provider store={store}>
    <UserContext.Provider value={{user: user, setUser:setUser}}>
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element:(
          <Suspense fallback={<Shimmer/>}>
            <About />
          </Suspense>
        )
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/instamart",
        element:(
          <Suspense fallback={<Shimmer/>}>
            <Instamart/>
          </Suspense>
        )
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/login",
        element: <BasicExample />,
      },
      {
        path: "/cart",
        element: <Cart/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
