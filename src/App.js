import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AuthProvider from "contexts/auth";
import CommonProvider from "contexts/common";
import ProductsProvider from "contexts/products";
import CartProvider from "contexts/cart";
import CheckoutProvider from "contexts/checkout";
import RouteWrapper from "layouts/RouteWrapper";
import AuthLayout from "layouts/AuthLayout";
import CommonLayout from "layouts/CommonLayout";
import AuthPage from "pages/auth";
import FruitsPage from "pages/fruits"
import HomePage from "pages/home";
import AboutPage from "pages/about";
import BlogPage from "pages/blog";
import ContactPage from "pages/contactus";
import CheckoutPage from "pages/checkout";
import RegisterPage from "pages/register";
import LoginPage from "pages/login";
import "assets/scss/style.scss";

const App = () => {
  return (
    <AuthProvider>
      <CommonProvider>
        <ProductsProvider>
          <CartProvider>
            <CheckoutProvider>
              <Router>
                <Switch>
                  <RouteWrapper
                    path="/"
                    exact
                    component={HomePage}
                    layout={CommonLayout}
                  />
                  <RouteWrapper
                    path="/fruits"
                    component={FruitsPage}
                    layout={CommonLayout}
                  />
                  <RouteWrapper
                    path="/about"
                    component={AboutPage}
                    layout={CommonLayout}
                  />
                  <RouteWrapper
                    path="/blog"
                    component={BlogPage}
                    layout={CommonLayout}
                  />
                  <RouteWrapper
                    path="/contactus"
                    component={ContactPage}
                    layout={CommonLayout}
                  />
                  <RouteWrapper
                    path="/register"
                    component={RegisterPage}
                    layout={CommonLayout}
                  />
                  <RouteWrapper
                    path="/login"
                    component={LoginPage}
                    layout={CommonLayout}
                  />
                  <RouteWrapper
                    path="/checkout"
                    component={CheckoutPage}
                    layout={CommonLayout}
                  />
                  <RouteWrapper
                    path="/auth"
                    component={AuthPage}
                    layout={AuthLayout}
                  />
                </Switch>
              </Router>
            </CheckoutProvider>
          </CartProvider>
        </ProductsProvider>
      </CommonProvider>
    </AuthProvider>
  );
};

export default App;
