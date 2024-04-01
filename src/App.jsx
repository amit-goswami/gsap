import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Tangent from './components/Tangent';
import Vector from './components/Vector';
import Rays from './components/Rays';
import Units from './components/Units';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/tangents",
    element: <Tangent />,
  },
  {
    path: "/vectors",
    element: <Vector />,
  },
  {
    path: "/rays",
    element: <Rays />,
  },
  {
    path: "/units",
    element: <Units />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App