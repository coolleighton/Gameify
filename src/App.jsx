import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useState, useEffect } from 'react'

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

    // loading animation while wait for page to load

    const authenticate = () =>
        new Promise((resolve) => setTimeout(resolve, 1000)) // 2 seconds

    useEffect(() => {
        authenticate().then(() => {
            const ele = document.querySelector('.pageLoader')
            if (ele) {
                // fade out
                setTimeout(() => {
                    // remove from DOM
                    ele.style.transition = '0.5s'
                    ele.style.opacity = '0'
                    setTimeout(() => {
                        // remove from DOM

                        ele.style.display = 'none'
                    }, 500)
                }, 1000)
            }
        })
    }, [])

    /*window.addEventListener('load', () => {
        const ele = document.querySelector('.pageLoader')
        setTimeout(() => {
            // remove from DOM
            console.log('loaded')
            //  ele.style.display = 'none'
        }, 2000)
    })*/

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

    return <RouterProvider router={router}></RouterProvider>
}

export default App
