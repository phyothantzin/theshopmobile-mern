import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import HomeScreen from "./screen/HomeScreen";
import ProductScreen from "./screen/ProductScreen.jsx";
import store from "./store.js";
import CartScreen from "./screen/CartScreen.jsx";
import LoginScreen from "./screen/LoginScreen.jsx";
import RegisterScreen from "./screen/RegisterScreen.jsx";
import ShippingScreen from "./screen/ShippingScreen.jsx";
import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/AdminRoute.jsx";
import PaymentScreen from "./screen/PaymentScreen.jsx";
import PlaceOrderScreen from "./screen/PlaceOrderScreen.jsx";
import OrderScreen from "./screen/OrderScreen.jsx";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import ProfileScreen from "./screen/ProfileScreen.jsx";
import OrderListScreen from "./screen/admin/OrderListScreen.jsx";
import ProductListScreen from "./screen/admin/ProductListScreen.jsx";
import ProductEditScreen from "./screen/admin/ProductEditScreen.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/product/:id" element={<ProductScreen />} />
      <Route path="/cart" element={<CartScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />

      <Route path="" element={<PrivateRoute />}>
        <Route path="/shipping" element={<ShippingScreen />} />
        <Route path="/payment" element={<PaymentScreen />} />
        <Route path="/placeorder" element={<PlaceOrderScreen />} />
        <Route path="/order/:id" element={<OrderScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
      </Route>

      <Route path="" element={<AdminRoute />}>
        <Route path="/admin/orders" element={<OrderListScreen />} />
        <Route path="/admin/products" element={<ProductListScreen />} />
        <Route
          path="/admin/products/:id/edit"
          element={<ProductEditScreen />}
        />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PayPalScriptProvider deferLoading={true}>
        <RouterProvider router={router} />
      </PayPalScriptProvider>
    </Provider>
  </React.StrictMode>
);
