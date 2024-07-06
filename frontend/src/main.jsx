import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { getContacts } from "./contacts"

import "./index.css";
import ErrorPage from "./error-page";
import Contact from "./routes/contact"
import Root from './routes/root'

export async function rootLoader() {
  const contacts = await getContacts()
  return { contacts }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />
      }
    ]
  },
], { basename: "/naiyachiri-portfolio" });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);