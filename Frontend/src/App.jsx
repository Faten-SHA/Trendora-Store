import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import Myaccount from "./pages/Myaccount.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Announcement from "./components/Announcement.jsx";
import Product from "./pages/Product.jsx";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import ProductsList from "./pages/ProductsList";
import Order from "./pages/Order.jsx";

function App() {
  //create layout for the app to show on all pages
  const Layout = () => {
    return (
      <div>
        <Announcement />
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/create-account",
          element: <Register />,
        },
        {
          path: "/myaccount",
          element: <Myaccount />,
        },
        {
          path: "/product/:productId",
          element: <Product />,
        },
        {
          path: "/products/:categoryId",
          element: <ProductsList />,
        },
        {
          path: "/myorders",
          element: <Order />,
          
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
