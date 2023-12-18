import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './Components/Home.jsx'
import Library from './Components/Library.jsx'
import ErrorPage from './Components/ErrorPage.jsx'

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            errorElement: <ErrorPage />,
        },
        {
            path: 'Home',
            element: <Home />,
        },
        {
            path: 'Library',
            element: <Library />,
        },
    ])

    return <RouterProvider router={router} />
}

export default Router
