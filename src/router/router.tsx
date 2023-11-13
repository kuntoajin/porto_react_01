import { createBrowserRouter } from "react-router-dom";
import Product from "../../pages/product";
import Home from "../../pages";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/product',
        element: <Product />
    }
]);