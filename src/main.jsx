import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Users from "./components/Users/Users.jsx";
import NewUser from "./components/NewUser/NewUser.jsx";
import UpdateUser from "./components/UpdateUser/UpdateUser.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Users />,
      },
      {
        path: "/new_user",
        element: <NewUser />,
      },
      {
        path: "/update_user/:id",
        element: <UpdateUser />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/users/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
