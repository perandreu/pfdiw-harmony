import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import ServerView from './views/ServerView';
import PersonalView from './views/PersonalView';
import RootView from './views/RootView';

import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootView />,
    children: [
      {
        path: "me/chat/:id",
        element: <PersonalView type="chat" />
      },
      {
        path: "me/friends",
        element: <PersonalView type="friends" />
      },
      {
        path: "me/group/:id",
        element: <PersonalView type="group" />
      },
      {
        path: "server/:serverId",
        element: <ServerView />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
