import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Home from './Pages/Home/Home.jsx'
import Library from './Pages/Library/Library.jsx'
import ErrorPage from './GlobalComponents/ErrorPage/ErrorPage.jsx'

const App = () => {
    const [loadingScreenPlayed, setLoadingScreenPlayed] = useState(false)
    const [cart, setCart] = useState([])
    const [ApiData, setApiData] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [searchValue, setSearchValue] = useState('')
    const [searchAmount, setSearchAmount] = useState(12)
    const [heading, setHeading] = useState('All Time Top')
    const [gameGenre, setGameGenre] = useState({
        url: '',
        displayText: ' All',
    })
    const [gamePlatform, setGamePlatform] = useState({
        url: '',
        displayText: ' All',
    })
    const [gameSpecialCategory, setGameSpecialCategory] = useState({
        url: '',
        displayText: ' All Time Top',
    })
    const [gameSearch, setGameSearch] = useState({ url: '', displayText: '' })

    // set all search criteria to default
    const resetSearchCriteria = () => {
        setGameSearch({ url: '', displayText: '' })
        setGameGenre({ url: '', displayText: ' All' })
        setGamePlatform({ url: '', displayText: ' All' })
        setGameSpecialCategory({
            url: '',
            displayText: ' All Time Top',
        })
        setHeading('All Time Top')
        setSearchAmount(12)
    }

    // load cart data from local storage
    useEffect(() => {
        let storedData = JSON.parse(localStorage.getItem('storedCart'))
        // if null set to '[]'
        if (!storedData) {
            storedData = []
        }
        setCart(storedData)
    }, [])

    // handle removing an item from the cart
    const removeItemFromCart = async (name) => {
        const delay = (ms) => new Promise((res) => setTimeout(res, ms))

        // apply transition and wait 0.3s for transition to run
        document.getElementById(name).style.transition = '0.3s'
        document.getElementById(name).style.opacity = '0'
        await delay(300)

        // create new array with this item removed and update cart with array
        const newArray = cart.filter((item) => item.name !== name)
        window.localStorage.setItem('storedCart', JSON.stringify(newArray))
        setCart(newArray)
    }

    // handle when a user adds an item to the cart
    const handleAddToCart = (id, active) => {
        if (!active) {
            const object = ApiData.find((obj) => obj.name === id)
            const newCart = [...cart, object]
            setCart(newCart)
            window.localStorage.setItem('storedCart', JSON.stringify(newCart))
        }
    }

    // loading animation while wait for page to load
    const authenticate = () =>
        new Promise((resolve) => setTimeout(resolve, 1000))

    useEffect(() => {
        // prevent scrolling
        document.querySelector('body').style.overflowY = 'hidden'
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
                        // re-enable scrolling
                        document.querySelector('body').style.overflowY = 'auto'
                    }, 500)
                }, 1000)
            }
        })
    }, [])

    // return a price based on what the first letter of game name (doing random prices each time changes price on re render)
    const generateRandomPrice = (name) => {
        const myArray = [
            '4.99',
            '9.99',
            '14.99',
            '19.98',
            '24.50',
            '29.97',
            '35',
            '40',
            '45',
            '59.99',
        ]

        const firstLetter = name.charAt(0).toLowerCase()

        if (['a', 'b', 'c'].includes(firstLetter)) {
            return myArray[0]
        }

        if (['d', 'e', 'f'].includes(firstLetter)) {
            return myArray[1]
        }

        if (['g', 'h', 'i'].includes(firstLetter)) {
            return myArray[2]
        }

        if (['j', 'k', 'l'].includes(firstLetter)) {
            return myArray[3]
        }

        if (['m', 'n', 'o'].includes(firstLetter)) {
            return myArray[4]
        }

        if (['p', 'q', 'r'].includes(firstLetter)) {
            return myArray[5]
        }

        if (['s', 't', 'u'].includes(firstLetter)) {
            return myArray[6]
        }

        if (['v', 'w', 'x'].includes(firstLetter)) {
            return myArray[7]
        }

        if (['y', 'z'].includes(firstLetter)) {
            return myArray[8]
        } else {
            return myArray[9]
        }
    }

    // handle when user has scrolled to bottom of the games section and increase search amount
    window.onscroll = function () {
        if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
            // you're at the bottom of the page
            if (searchAmount < 39) {
                let newSearchAmount = searchAmount + 4
                setSearchAmount(newSearchAmount)
            }
        }
    }

    // handle what games we want to display when clicking a category button
    const handleCategoryClick = async (category, categoryInfo, text) => {
        const delay = (ms) => new Promise((res) => setTimeout(res, ms))

        // apply transition, scroll to top and wait 0.5s to complete (opacity set back to 1 when api call complete)
        if (document.querySelector('#GamesGrid')) {
            document.querySelector('#GamesGrid').style.transition = '0.3s'
            document.querySelector('#GamesGrid').style.opacity = '0'
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }

        await delay(300)

        //  set heading and reset search amount
        setHeading(text)
        setSearchAmount(12)

        // check which type of button has been clicked and set api info
        if (category === 'genre') {
            setGamePlatform({ url: '', displayText: ' All' })
            setGameSpecialCategory({ url: '', displayText: ' All Time Top' })
            setGameSearch({ url: '', displayText: '' })
            setGameGenre({
                url: '&genres=' + categoryInfo,
                displayText: ' ' + text,
            })
        } else if (category === 'platform') {
            // set Api/displayText data
            setGameGenre({ url: '', displayText: ' All' })
            setGameSpecialCategory({ url: '', displayText: ' All Time Top' })
            setGameSearch({ url: '', displayText: '' })
            setGamePlatform({
                url: '&parent_platforms=' + categoryInfo,
                displayText: ' ' + text,
            })
        } else if (category === 'special') {
            // set Api/displayText data
            setGameGenre({ url: '', displayText: ' All' })
            setGamePlatform({ url: '', displayText: ' All' })
            setGameSearch({ url: '', displayText: '' })
            setGameSpecialCategory({
                url: '&ordering=-' + categoryInfo,
                displayText: ' ' + text,
            })
        } else if (category === 'search') {
            // set Api/displayText data
            setGameGenre({ url: '', displayText: ' All' })
            setGamePlatform({ url: '', displayText: ' All' })
            setGameSpecialCategory({ url: '', displayText: ' All Time Top' })
            setGameSearch({
                url: '&search_precise=true&search=' + categoryInfo,
                displayText: '',
            })
        }
    }

    // filter results by a special category
    const handleFilterSpecialCategory = async (categoryInfo, text) => {
        const delay = (ms) => new Promise((res) => setTimeout(res, ms))

        // apply transition, scroll to top and wait 0.5s to complete (opacity set back to 1 when api call complete)
        if (document.querySelector('#GamesGrid')) {
            document.querySelector('#GamesGrid').style.transition = '0.3s'
            document.querySelector('#GamesGrid').style.opacity = '0'
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }

        await delay(300)

        setHeading(text)
        setGameSpecialCategory({
            url: '&ordering=-' + categoryInfo,
            displayText: ' ' + text,
        })
    }

    // filter results by a special category
    const handleFilterPlatformCategory = async (categoryInfo, text) => {
        const delay = (ms) => new Promise((res) => setTimeout(res, ms))

        // apply transition, scroll to top and wait 0.5s to complete (opacity set back to 1 when api call complete)
        if (document.querySelector('#GamesGrid')) {
            document.querySelector('#GamesGrid').style.transition = '0.3s'
            document.querySelector('#GamesGrid').style.opacity = '0'
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }

        await delay(300)

        setHeading(text)
        setGamePlatform({
            url: '&parent_platforms=' + categoryInfo,
            displayText: ' ' + text,
        })
    }

    // filter results by a special category
    const handleFilterGenreCategory = async (categoryInfo, text) => {
        const delay = (ms) => new Promise((res) => setTimeout(res, ms))

        // apply transition, scroll to top and wait 0.5s to complete (opacity set back to 1 when api call complete)
        if (document.querySelector('#GamesGrid')) {
            document.querySelector('#GamesGrid').style.transition = '0.3s'
            document.querySelector('#GamesGrid').style.opacity = '0'
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }

        await delay(300)

        setHeading(text)
        setGameGenre({
            url: '&genres=' + categoryInfo,
            displayText: ' ' + text,
        })
    }

    useEffect(() => {
        // declare API URL

        let ApiUrl =
            'https://api.rawg.io/api/games?key=561d4b7435f64843bd5c65f0b931d7bf&parent_platforms=1,2,3,5,6,7' +
            gameGenre.url +
            gameSpecialCategory.url +
            gamePlatform.url +
            gameSearch.url +
            '&page_size=' +
            searchAmount

        try {
            // function that will fetch data, keep what we need and set 'ApiData' with that data
            const fetchData = async () => {
                const response = await fetch(ApiUrl)
                const data = await response.json()
                const dataResult = data.results

                // create a new array with only the data we need
                let displayData = []
                displayData = dataResult.map((item) => {
                    return {
                        name: item.name,
                        image: item.background_image,
                        platforms: item.parent_platforms,
                        price: generateRandomPrice(item.name),
                        rating: item.metacritic,
                    }
                })
                console.log(displayData)

                setApiData(displayData)
                if (document.querySelector('#GamesGrid')) {
                    document.querySelector('#GamesGrid').style.opacity = '1'
                    document.querySelector('#GamesGrid').style.transition = '0'
                }
                document.querySelector('body').style.opacity = '1'
                document.querySelector('body').style.transitionDuration = '0'
            }
            fetchData()
        } catch (error) {
            console.error('Error fetching data from Rawg:', error)
        }
    }, [gameGenre, gamePlatform, searchAmount, gameSpecialCategory])

    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <Home
                    cart={cart}
                    setCart={setCart}
                    loadingScreenPlayed={loadingScreenPlayed}
                    removeItemFromCart={removeItemFromCart}
                    handleCategoryClick={handleCategoryClick}
                    setSearchAmount={setSearchAmount}
                    setGamePlatform={setGamePlatform}
                    setGameSpecialCategory={setGameSpecialCategory}
                    setGameGenre={setGameGenre}
                    inputValue={inputValue}
                    searchValue={searchValue}
                    setInputValue={setInputValue}
                    setSearchValue={setSearchValue}
                    resetSearchCriteria={resetSearchCriteria}
                />
            ),
            errorElement: <ErrorPage />,
        },
        {
            path: 'Library',
            element: (
                <Library
                    heading={heading}
                    cart={cart}
                    setCart={setCart}
                    handleAddToCart={handleAddToCart}
                    removeItemFromCart={removeItemFromCart}
                    ApiData={ApiData}
                    setApiData={setApiData}
                    handleCategoryClick={handleCategoryClick}
                    setSearchAmount={setSearchAmount}
                    gameGenre={gameGenre}
                    gamePlatform={gamePlatform}
                    gameSpecialCategory={gameSpecialCategory}
                    handleFilterSpecialCategory={handleFilterSpecialCategory}
                    handleFilterPlatformCategory={handleFilterPlatformCategory}
                    handleFilterGenreCategory={handleFilterGenreCategory}
                    inputValue={inputValue}
                    searchValue={searchValue}
                    setInputValue={setInputValue}
                    setSearchValue={setSearchValue}
                    loadingScreenPlayed={loadingScreenPlayed}
                    resetSearchCriteria={resetSearchCriteria}
                />
            ),
            errorElement: <ErrorPage />,
        },
    ])

    return <RouterProvider router={router}></RouterProvider>
}

export default App
