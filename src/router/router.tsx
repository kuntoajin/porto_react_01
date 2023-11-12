import { createBrowserRouter } from "react-router-dom";
import Product from "../../pages/product";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <div>Hello world!</div>,
    },
    {
        path: '/product',
        element: <Product />
    }
]);