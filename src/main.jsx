import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import AddCoffee from "./components/AddCoffee.jsx";
import SingIn from "./components/SingIn.jsx";
import SingUp from "./components/SingUp.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import UserCard from "./components/UserCard.jsx";
import "./index.css";
import AuthProvider from "./provider/AuthProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch("http://localhost:5000/coffee"),
  },
  {
    path: "/updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`),
  },
  {
    path: "/addCoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "/singup",
    element: <SingUp></SingUp>,
  },
  {
    path: "/singin",
    element: <SingIn></SingIn>,
  },
  {
    path: "/users",
    element: <UserCard></UserCard>,
    loader: () => fetch("http://localhost:5000/user"),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
