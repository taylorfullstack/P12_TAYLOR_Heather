import * as React from 'react';
import * as ReactDOM from "react-dom/client";
import './styles/index.css';
import {createHashRouter, RouterProvider} from "react-router-dom";

import App from './pages/App.jsx';
import ErrorPage from "./pages/ErrorPage.jsx";
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';

const router = createHashRouter([
    {
        path: "/",
        basename: "/P12_TAYLOR_Heather",
        element: <App/>,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/profil/user/:id",
                element: <Profile/>
            },   
            {
                path: "/reglage",
                element: <div>Réglage</div>
            },
            {
                path: "/communaute",
                element: <div>Communauté</div>
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
