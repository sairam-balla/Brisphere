import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import PaymentPage from "./pages/PaymentPage.jsx";
import OrderPage from "./pages/OrderPage.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import Layout from "./components/Layout.jsx";
import NotFound from "./pages/NotFound.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
            <Route path="payment" element={<PaymentPage />} />
            <Route path="order" element={<OrderPage />} />
          </Route>
          <Route path="/notfound" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/notfound" />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
