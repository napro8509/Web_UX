import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import HomePage from "views/HomePage/HomePage.jsx";
import ProductPage from "views/Features/ProductPage.jsx";
import ProductDetail from "views/Features/ProductDetail";

var indexRoutes = [
  { path: "/landing-page", name: "LandingPage", component: LandingPage },
  { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
  { path: "/login-page", name: "LoginPage", component: LoginPage },
  { path: "/home-page", name: "HomePage", component: HomePage },
  { path: "/product-page", name: "ProductPage", component:ProductPage },
  { path: "/", name: "Components", component: Components },
  { path: "/ProductDetail", name: "ProductDetail", component: ProductDetail }
];

export default indexRoutes;
