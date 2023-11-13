import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { router } from '../src/router/router';
import { Provider } from 'react-redux'
import '../public/output.css'
import { store } from '../src/redux/store'

const root = createRoot(document.getElementById('app') as HTMLElement)

root.render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </StrictMode>
)