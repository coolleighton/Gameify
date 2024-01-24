import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { toggleCartOn } from '../Cart/CartFunctions'
import SearchList from './SearchBar/SearchList'
import './Header.css'
import Logo from '../../Assets/GlobalImages/GameifyLogo.png'
import SearchImg from '../../Assets/GlobalImages/SearchImg.png'
import CartImg from '../../Assets/GlobalImages/CartImg.png'
import LibraryImg from '../../Assets/GlobalImages/LibraryImg.png'
import HomeImg from '../../Assets/GlobalImages/HomeImg.png'
import HamburgerMenuImg from '../../Assets/GlobalImages/HamburgerMenuImg.png'
import CartActiveImg from '../../Assets/GlobalImages/CartActiveImg.png'

const Header = ({
    headerBgColour,
    cart,
    setSearchAmount,
    inputValue,
    searchValue,
    setInputValue,
    setSearchValue,
    handleCategoryClick,
    resetSearchCriteria,
}) => {
    const [cartActive, setCartActive] = useState(false)
    const [searchActive, setSearchActive] = useState(false)
    const [searchData, setSearchData] = useState({})

    // Navigate to a new page with a transition
    const navigate = useNavigate()
    const navigateToWithDelay = (location) => {
        // hide page with a transition
        document.querySelector('body').style.transitionDuration = '0.5s'
        document.querySelector('body').style.opacity = '0'

        // navigate to page after 0.3s, show page then remove transition effects.
        setTimeout(() => {
            setSearchAmount(12)
            navigate(location)
            resetSearchCriteria()
            document.querySelector('body').style.opacity = '1'
            document.querySelector('body').style.transitionDuration = '0'
        }, 500)
    }

    // check if cart has items in it
    useEffect(() => {
        if (cart.length > 0) {
            setCartActive(true)
        } else {
            setCartActive(false)
        }
    }, [cart])

    // determine if user is scrolling up or down and display header accordingly
    const doc = document.documentElement
    const w = window

    let prevScroll = w.scrollY || doc.scrollTop
    let curScroll
    let direction = 0
    let prevDirection = 0

    const checkScroll = function () {
        curScroll = w.scrollY || doc.scrollTop
        if (curScroll > prevScroll) {
            direction = 2
        } else if (curScroll < prevScroll) {
            direction = 1
        }

        if (direction !== prevDirection) {
            toggleHeader(direction, curScroll)
        }

        prevScroll = curScroll
    }

    const toggleHeader = function (direction, curScroll) {
        if (direction === 2 && curScroll > 50) {
            document.querySelector('#header').classList.add('hide')
            document.querySelector('#categoryButtonsWrapper').style.height =
                '100vh'
            document.querySelector('#categoryButtonsWrapper').style.marginTop =
                '0'
            prevDirection = direction
        } else if (direction === 1) {
            document.querySelector('#header').classList.remove('hide')
            document.querySelector('#categoryButtonsWrapper').style.height =
                'calc(100vh - 84px)'
            document.querySelector('#categoryButtonsWrapper').style.marginTop =
                '84px'
            prevDirection = direction
        }
    }

    window.addEventListener('scroll', checkScroll)

    // toggle the mobile menu on
    const toggleHamburgerMenuOn = async () => {
        const delay = (ms) => new Promise((res) => setTimeout(res, ms))
        document.querySelector('#hamburgerMenu').style.display = 'block'
        await delay(50)
        document.querySelector('#hamburgerMenu').style.opacity = '1'
    }

    // hide searchBarList when clicking outside search Bar or clicking an item in the search
    document.addEventListener('click', (e) => {
        if ((e.target.id === 'searchBar') === false) {
            setSearchActive(false)
        }
    })

    // handle when input value changes
    const handleSearchValueChange = (value) => {
        setSearchActive(true)
        setInputValue(value)
        document.querySelector('#searchLoader').style.display = 'flex'
        document.querySelector('#searchError').style.display = 'none'
    }

    // show search if there is already an inputvalue
    const handleSearchClick = () => {
        if (!!inputValue) {
            setSearchActive(true)
        }
    }

    // hide search list

    const hideSearchList = async () => {
        const delay = (ms) => new Promise((res) => setTimeout(res, ms))
        document.querySelector('#searchListInnerDiv').style.opacity = '0'
        await delay(300)
        document.querySelector('#searchListInnerDiv').style.display = 'none'
    }

    // run search function after user has stopped typing for 1 second
    useEffect(() => {
        hideSearchList()

        const timer = setTimeout(() => {
            setSearchValue(inputValue)
        }, 1000)

        // clear the timer when the component unmounts or when inputValue changes
        return () => clearTimeout(timer)
    }, [inputValue])

    // get request for search data on search value change
    useEffect(() => {
        // declare API URL
        let ApiUrl =
            'https://api.rawg.io/api/games?key=561d4b7435f64843bd5c65f0b931d7bf&search_precise=true&search=' +
            inputValue

        try {
            // function that will fetch data, keep what we need and set 'ApiData' with that data
            const fetchData = async () => {
                const delay = (ms) => new Promise((res) => setTimeout(res, ms))

                const response = await fetch(ApiUrl)
                const data = await response.json()
                const dataResult = data.results

                // create a new array with only the data we need
                let displayData = []
                displayData = dataResult.map((item) => {
                    return {
                        name: item.name,
                        image: item.background_image,
                    }
                })

                setSearchData(displayData)

                await delay(500)

                // hide loading animation when list has been loaded
                document.querySelector('#searchLoader').style.display = 'none'
                document.querySelector('#searchListInnerDiv').style.display =
                    'block'
                document.querySelector('#searchListInnerDiv').style.opacity =
                    '1'
            }
            fetchData()
        } catch (error) {
            console.error('Error fetching data from Rawg:', error)
        }
    }, [searchValue])

    // search button is clicked and input has value
    const searchButtonClick = () => {
        if (document.querySelector('.searchBarInput').value) {
            console.log('search button clicked and input has value')
            setSearchValue(document.querySelector('.searchBarInput').value)
            setInputValue(document.querySelector('.searchBarInput').value)
            setSearchAmount(12)
            handleCategoryClick(
                'search',
                document.querySelector('.searchBarInput').value,
                document.querySelector('.searchBarInput').value
            )
            setSearchValue('')
            setInputValue('')
            setSearchActive(false)

            if (window.location.href.includes('Library') === false) {
                navigate('/Library')
            }
        }
    }

    // Navigate to a new page with a transition

    const navigateToLibraryWithTransition = async (e) => {
        const delay = (ms) => new Promise((res) => setTimeout(res, ms))

        // hide page with a transition

        // navigate to page after 0.3s, show page then remove transition effects.
    }

    // if enter is pressed and input has a value trigger the below function
    const enterKeyPressed = async (e) => {
        const delay = (ms) => new Promise((res) => setTimeout(res, ms))
        if (
            e.key === 'Enter' &&
            document.querySelector('.searchBarInput').value
        ) {
            console.log('enter pressed and input has value')
            setSearchValue(document.querySelector('.searchBarInput').value)
            setInputValue(document.querySelector('.searchBarInput').value)
            setSearchAmount(12)
            handleCategoryClick(
                'search',
                document.querySelector('.searchBarInput').value,
                document.querySelector('.searchBarInput').value
            )
            setSearchActive(false)

            if (window.location.href.includes('Library') === false) {
                setSearchAmount(12)
                document.querySelector('body').style.transitionDuration = '0.5s'
                document.querySelector('body').style.opacity = '0'

                setTimeout(() => {
                    navigate('/Library')
                    resetSearchCriteria()
                    document.querySelector('body').style.opacity = '1'
                    document.querySelector('body').style.transitionDuration =
                        '0'
                }, 500)
            }
        }
    }

    // searchBarInput expand on focus
    document.addEventListener('click', (e) => {
        if (window.innerWidth > 1024) {
            if (e.target.id === 'searchBar') {
                document.querySelector('.searchBarInput').style.width = '36rem'
            } else {
                document.querySelector('.searchBarInput').style.width = '16rem'
            }
        }
    })

    return (
        <div
            id="header"
            className="sm:px-5 py-5 flex flex-row items-center justify-between sm:px-7 fixed w-full z-50 sm:px-9"
            style={{ backgroundColor: headerBgColour }}
        >
            <div className="flex justify-between items-center w-11/12 sm:w-full mx-auto">
                <button onClick={() => navigateToWithDelay('/')}>
                    <div className="mr-2 flex flex-row items-center cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out">
                        <img className="w-12 sm:mr-4" src={Logo}></img>
                        <h1 className="hidden font-semibold text-3xl sm:block">
                            Gameify
                        </h1>
                    </div>
                </button>

                <div
                    id="searchBar"
                    className="searchBar relative bg-white rounded-md px-1"
                >
                    <div
                        id="searchBar"
                        className="flex flex-row text-sm items-center"
                    >
                        <input
                            id="searchBar"
                            autoComplete="off"
                            className="searchBarInput h-8 w-full outline-none text-black text-md xs:text-[1rem] px-2"
                            placeholder="Search games..."
                            onChange={(e) =>
                                handleSearchValueChange(e.target.value)
                            }
                            onKeyDown={(e) => enterKeyPressed(e)}
                            value={inputValue}
                            onClick={handleSearchClick}
                        ></input>
                        <button
                            className="py-[2px]"
                            id="searchButton"
                            onClick={searchButtonClick}
                        >
                            <img
                                onClick={searchButtonClick}
                                id="searchButton"
                                className="hidden sm:block h-8 py-1 cursor-pointer duration-300 rounded hover:bg-gray-200"
                                src={SearchImg}
                            ></img>
                        </button>
                    </div>

                    <SearchList
                        searchData={searchData}
                        searchActive={searchActive}
                        setSearchAmount={setSearchAmount}
                        setSearchValue={setSearchValue}
                        setInputValue={setInputValue}
                    ></SearchList>
                </div>

                <div className="flex flex-row justify-between items-center ml-1">
                    <button
                        onClick={() => navigateToWithDelay('/')}
                        className="hidden sm:block"
                    >
                        <img
                            className="w-8 mx-1 cursor-pointer hover:scale-125 duration-200 ease-in-out sm:mx-2"
                            src={HomeImg}
                        ></img>
                    </button>
                    <button
                        onClick={() => navigateToWithDelay('/Library')}
                        className="hidden sm:block"
                    >
                        <img
                            className="w-8 mx-1 cursor-pointer hover:scale-125 duration-200 ease-in-out sm:mx-2"
                            src={LibraryImg}
                        ></img>
                    </button>
                    <button
                        className="relative hover:scale-125 duration-200"
                        onClick={() => toggleCartOn()}
                    >
                        <img
                            className="w-7 sm:w-8 mx-1 cursor-pointer  ease-in-out sm:mx-2"
                            src={CartImg}
                        ></img>
                        <img
                            className="opacity-0 absolute top-0 right-0 w-3 h-3 duration-200"
                            src={CartActiveImg}
                            style={{ opacity: cartActive ? '1' : '0' }}
                        ></img>
                    </button>
                    <button onClick={() => toggleHamburgerMenuOn()}>
                        <img
                            className="w-8 sm:w-10 ml-2 sm:hidden cursor-pointer hover:scale-125 duration-200 ease-in-out sm:mx-2"
                            src={HamburgerMenuImg}
                        ></img>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header
