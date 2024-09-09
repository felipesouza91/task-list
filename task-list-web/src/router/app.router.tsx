import React from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from '../pages/Home';
import TaskList from '../pages/TaskList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "task-list/:id",
    element: <TaskList />,
  },
])

const AppRouter: React.FC = () => {
  return <RouterProvider router={router}/>;
}

export default AppRouter;