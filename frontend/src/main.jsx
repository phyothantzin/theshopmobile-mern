import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import App from "./App.jsx";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import store from "./store.js";
import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/AdminRoute.jsx";
import HomeScreen from "./screen/HomeScreen";
import ProductScreen from "./screen/ProductScreen.jsx";
import CartScreen from "./screen/CartScreen.jsx";
import OrderScreen from "./screen/OrderScreen.jsx";
import ProfileScreen from "./screen/ProfileScreen.jsx";
import LoginScreen from "./screen/auth/LoginScreen.jsx";
import RegisterScreen from "./screen/auth/RegisterScreen.jsx";
import ShippingScreen from "./screen/checkout/ShippingScreen.jsx";
import PaymentScreen from "./screen/checkout/PaymentScreen.jsx";
import PlaceOrderScreen from "./screen/checkout/PlaceOrderScreen.jsx";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import OrderListScreen from "./screen/admin/OrderListScreen.jsx";
import ProductListScreen from "./screen/admin/ProductListScreen.jsx";
import ProductEditScreen from "./screen/admin/ProductEditScreen.jsx";
import UserListScreen from "./screen/admin/UserListScreen.jsx";
import UserEditScreen from "./screen/admin/UserEditScreen.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/search/:keyword" element={<HomeScreen />} />
      <Route path="/page/:pageNumber" element={<HomeScreen />} />
      <Route
        path="/search/:keyword/page/:pageNumber"
        element={<HomeScreen />}
      />
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
          path="/admin/products/:pageNumber"
          element={<ProductListScreen />}
        />
        <Route
          path="/admin/products/:id/edit"
          element={<ProductEditScreen />}
        />
        <Route path="/admin/users" element={<UserListScreen />} />
        <Route path="/admin/users/:id/edit" element={<UserEditScreen />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <PayPalScriptProvider deferLoading={true}>
          <RouterProvider router={router} />
        </PayPalScriptProvider>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);
