import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import OpenRoute from "./Components/Auth/OpenRoute.jsx";
import PrivateRoute from "./Components/Auth/PrivateRoute.jsx";
import Community2 from "./Components/Community2-section/components/Community2.jsx";
import Member from "./Components/Community2-section/components/Member.jsx";
import PhotoSlider from "./Components/Community2-section/components/Photoslider.jsx";
import DataLed from "./Components/DataLedGrowth/DataLed.jsx";
import EventLed from "./Components/EventLedGrowth/EventLed.jsx";
import Newsletter from "./Components/NewsLetter-master/Newsletter.jsx";
import Templatestask from "./Components/Template-task/Templatestask.jsx";
import Threeoutcomes from "./Components/ThreeOutcomes/Threeoutcomes.jsx";
import Threepillors from "./Components/ThreePillors/Threepillors.jsx";
import AnnualRetreatSection from "./Components/annual-retreat-section/components/AnnualRetreatSection.jsx";
import Application from "./Components/dashboard/src/Components/Application/Application.jsx";
import Help from "./Components/dashboard/src/Components/Help_page/help-page/help/Help.jsx";
import Home_part1 from "./Components/dashboard/src/Components/Home_part1/Home_part1.jsx";
import App from "./Components/dashboard/src/Components/Limited_Experience/Community/Community/src/App.jsx";
import Layout_dashboard from "./Components/dashboard/src/Layout_dashboard.jsx";
import Forteam from "./Components/for team/Forteam.jsx";
import Framework from "./Components/framwork-task/Framework.jsx";
import Elevate from "./Components/growthx-elevate-main/Elevate.jsx";
import Login from "./Components/login/login.jsx";
import Partnership from "./Components/partnership-page/PartnershipLed.jsx";
import Register from "./Components/register/Register.jsx";
import Home from "./Home";
import Layout from "./Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "learning",
        element: <Threepillors />,
      },
      {
        path: "Community",
        element: (
          <>
            <Member />
            <Community2 />
            <PhotoSlider />
          </>
        ),
      },
      {
        path: "Annual Retreat Section",
        element: <AnnualRetreatSection />,
      },
      {
        path: "Outcomes",
        element: <Threeoutcomes />,
      },
      {
        path: "DataLedGrowth",
        element: <DataLed />,
      },
      {
        path: "PartnershipLedGrowth",
        element: <Partnership />,
      },
      {
        path: "EventLedGrowth",
        element: <EventLed />,
      },
      {
        path: "Newsletter",
        element: <Newsletter />,
      },
      {
        path: "Framework",
        element: <Framework />,
      },
      {
        path: "Youtube",
        element: <Home />,
      },
      {
        path: "Elevate",
        element: <Elevate />,
      },
      {
        path: "for-teams",
        element: <Forteam />,
      },
      {
        path: "Template",
        element: <Templatestask />,
      },
      {
        path: "register",
        element: (
          <OpenRoute>
            <Register />
          </OpenRoute>
        ),
      },
      {
        path: "login",
        element: (
          <OpenRoute>
            <Login />
          </OpenRoute>
        ),
      },
      {
        // path:'dashboard/home',
        element: (
          <PrivateRoute>
            <Layout_dashboard />
          </PrivateRoute>
        ),
        children: [
          {
            path: "dashboard/home",
            element: <Home_part1 />,
          },
          {
            path: "dashboard/application",
            element: <Application />,
          },
          {
            path: "dashboard/help",
            element: <Help />,
          },
          {
            path: "dashboard/limited-experience",
            element: <App />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
