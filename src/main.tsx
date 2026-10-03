import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, redirect } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./redux/store";
import { NewInvoiceProvider } from "./context/NewInvoiceContext";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, loader: () => redirect("/home") },
      { path: "home", Component: Home },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <NewInvoiceProvider>
        <RouterProvider router={router} />
      </NewInvoiceProvider>
    </Provider>
  </StrictMode>,
);
