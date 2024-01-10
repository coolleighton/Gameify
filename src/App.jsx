import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useState, useEffect } from 'react'

import clearCart from './Functions/CartFunctions.jsx'
import Home from './Pages/Home/Home.jsx'
import Library from './Pages/Library/Library.jsx'
import ErrorPage from './GlobalComponents/ErrorPage/ErrorPage.jsx'

const App = () => {
    const [cart, setCart] = useState([])
    const [ApiData, setApiData] = useState([])
    const [loadingScreenPlayed, setLoadingScreenPlayed] = useState(false)

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
    /*const clearCart = () => {
        const clearedCart = []
        setCart(clearedCart)
        window.localStorage.setItem('storedCart', JSON.stringify(clearedCart))
    }*/

    // handle removing an item from the cart
    const removeItemFromCart = (name) => {
        const newArray = cart.filter((item) => item.name !== name)
        window.localStorage.setItem('storedCart', JSON.stringify(newArray))
        setCart(newArray)
    }

    // loading animation while wait for page to load

    const authenticate = () =>
        new Promise((resolve) => setTimeout(resolve, 1000)) // 2 seconds

    useEffect(() => {
        authenticate().then(() => {
            const ele = document.querySelector('.pageLoader')
            if (ele) {
                // tell app loading screen has played and play background video if on the home page
                setLoadingScreenPlayed(true)

                setTimeout(() => {
                    // hide from DOM and play video
                    ele.style.transition = '0.5s'
                    ele.style.opacity = '0'
                    if (document.querySelector('#backgroundVideo')) {
                        document.querySelector('#backgroundVideo').play()
                    }
                    setTimeout(() => {
                        // remove from DOM
                        ele.style.display = 'none'
                    }, 500)
                }, 1000)
            }
        })
    }, [])

    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <Home
                    cart={cart}
                    setCart={setCart}
                    clearCart={clearCart}
                    loadingScreenPlayed={loadingScreenPlayed}
                    setLoadingScreenPlayed={setLoadingScreenPlayed}
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
                    setCart={setCart}
                    clearCart={clearCart}
                    removeItemFromCart={removeItemFromCart}
                    ApiData={ApiData}
                    setApiData={setApiData}
                />
            ),
            errorElement: <ErrorPage />,
        },
    ])

    return <RouterProvider router={router}></RouterProvider>
}

export default App
