import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Library from './Components/Library/LibraryPage/Library.jsx'
import ErrorPage from './Components/ErrorPage.jsx'

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
            errorElement: <ErrorPage />,
        },
        {
            path: 'Library',
            element: <Library />,
        },
    ])

    return <RouterProvider router={router} />
}

export default Router
