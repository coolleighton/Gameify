import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import Home from './Components/Home/Home.jsx'
import Library from './Components/Library/Library.jsx'
import ErrorPage from './Components/ErrorPage.jsx'

const App = () => {
    const [cart, setCart] = useState([])
    const [ApiData, setApiData] = useState([])

    // load cart data from local storage
    useEffect(() => {
        let storedData = JSON.parse(localStorage.getItem('storedCart'))
        // if null set to '[]'
        if (!storedData) {
            storedData = []
        }
        setCart(storedData)
    }, [])

    // handle when a user wants to clear the cart
    const clearCart = () => {
        const clearedCart = []
        setCart(clearedCart)
        window.localStorage.setItem('storedCart', JSON.stringify(clearedCart))
    }

    // handle removing an item from the cart
    const removeItemFromCart = (name) => {
        console.log(name)
        const newArray = cart.filter((item) => item.name !== name)
        setCart(newArray)
    }

    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <Home
                    cart={cart}
                    clearCart={clearCart}
                    removeItemFromCart={removeItemFromCart}
                />
            ),
            errorElement: <ErrorPage />,
        },
        {
            path: 'Library',
            element: (
                <Library
                    cart={cart}
                    clearCart={clearCart}
                    removeItemFromCart={removeItemFromCart}
                    ApiData={ApiData}
                    setCart={setCart}
                    setApiData={setApiData}
                />
            ),
            errorElement: <ErrorPage />,
        },
    ])

    return (
        <AnimatePresence>
            <RouterProvider router={router}></RouterProvider>
        </AnimatePresence>
    )
}

export default App
