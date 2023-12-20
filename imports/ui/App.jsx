import React from "react";
import { Result } from "antd";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Start } from "./Start";
import { About } from "./About";
import { Speciality } from "./Speciality";
import { Gallery } from "./Gallery";
import { Orbat } from "./Orbat";
import { Login } from "./Login";
import { Member } from "./Member";
import { Home } from "./Home";

export const Error404 = () => {
  return (
    <Home
      children={
        <Result
          status={404}
          title="404"
          subTitle="Die Seite, die du versuchst aufzurufen, existiert leider nicht."
        />
      }
    />
  );
};

const App = ({}) => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home children={<Start />} />,
      errorElement: <Error404 />,
    },
    {
      path: "/start",
      element: <Home children={<Start />} />,
      errorElement: <Error404 />,
    },
    {
      path: "/about",
      element: <Home children={<About />} />,
      errorElement: <Error404 />,
    },
    {
      path: "/speciality",
      element: <Home children={<Speciality />} />,
      errorElement: <Error404 />,
    },
    {
      path: "/gallery",
      element: <Home children={<Gallery />} />,
      errorElement: <Error404 />,
    },
    {
      path: "/orbat",
      element: <Home children={<Orbat />} />,
      errorElement: <Error404 />,
    },
    {
      path: "/login",
      element: <Home children={<Login />} />,
      errorElement: <Error404 />,
    },
    {
      path: "/member",
      element: <Member />,
      errorElement: <Error404 />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export const isSmall = () => !!(window.innerWidth < 980);

export default App;
