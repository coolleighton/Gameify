import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Profile from './Components/Profile.jsx'
import NotFound from './Components/NotFound.jsx'

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            errorElement: <NotFound />,
        },
        {
            path: 'profile/:name',
            element: <Profile />,
        },
        {
            path: 'profile/:name',
            element: <Profile />,
        },
    ])

    return <RouterProvider router={router} />
}

export default Router
