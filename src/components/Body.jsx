import React from 'react';
import Login from './Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NFTShowcase from './NFTShowcase';
import Content from './Content';

function Body() {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element:<NFTShowcase/>
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/content",
            element: <Content/>
        },
    ]);

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    );
}

export default Body;
