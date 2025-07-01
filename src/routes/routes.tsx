import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Cart from "../pages/Cart/Cart";
import Home from "../pages/home/Home";
import ProductDetails from "../pages/productDetails/ProductDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/product/:slug',
                element: <ProductDetails />
            },
            {
                path: 'my-cart',
                element: <Cart />
            }
        ]
    }
])


export default router;