import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { toggleCartOn } from '../Cart/CartFunctions'
import './Header.css'
import Logo from '../../Assets/GlobalImages/GameifyLogo.png'
import SearchImg from '../../Assets/GlobalImages/SearchImg.png'
import CartImg from '../../Assets/GlobalImages/CartImg.png'
import LibraryImg from '../../Assets/GlobalImages/LibraryImg.png'
import HomeImg from '../../Assets/GlobalImages/HomeImg.png'
import HamburgerMenuImg from '../../Assets/GlobalImages/HamburgerMenuImg.png'
import CartActiveImg from '../../Assets/GlobalImages/CartActiveImg.png'

const Header = ({ headerBgColour, cart }) => {
    const [cartActive, setCartActive] = useState(false)

    // Navigate to a new page with a transition
    const navigate = useNavigate()
    const navigateToWithDelay = (location) => {

        
        // hide page with a transition
        document.querySelector('body').style.transitionDuration = '0.8s'
        document.querySelector('body').style.opacity = '0'

        // navigate to page after 0.8s, show page then remove transition effects.
        setTimeout(() => {
            navigate(location)
            document.querySelector('body').style.opacity = '1'
            document.querySelector('body').style.transitionDuration = '0'
        }, 800)
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
                'calc(100vh - 88px)'
            document.querySelector('#categoryButtonsWrapper').style.marginTop =
                '88px'
            prevDirection = direction
        }
    }

    window.addEventListener('scroll', checkScroll)

    // toggle the mobile menu on
    const toggleHamburgerMenuOn = async () => {
        const delay = (ms) => new Promise((res) => setTimeout(res, ms))

        document.querySelector('#hamburgerMenu').style.display = 'block'

        await delay(500)
        document.querySelector('#hamburgerMenu').style.opacity = '1'
    }

    return (
        <div
            id="header"
            className="px-5 py-5 flex flex-row items-center justify-between sm:px-7 fixed w-full"
            style={{ backgroundColor: headerBgColour }}
        >
            <button onClick={() => navigateToWithDelay('/')}>
                <div className="mr-2 xs:ml-2 flex flex-row items-center cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out">
                    <img className="w-12 sm:mr-4" src={Logo}></img>
                    <h1 className="hidden font-semibold text-3xl sm:block">
                        Gameify
                    </h1>
                </div>
            </button>

            <div className="searchBar flex flex-row text-sm items-center bg-white rounded-md px-1 mx-2">
                <input
                    className="h-8 w-full outline-none text-black text-bold px-2"
                    placeholder="Search games..."
                ></input>
                <img className="h-5 cursor-pointer" src={SearchImg}></img>
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
                        className=" w-8 mx-1 cursor-pointer  ease-in-out sm:mx-2"
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
                        className="w-10 ml-2 sm:hidden cursor-pointer hover:scale-125 duration-200 ease-in-out sm:mx-2"
                        src={HamburgerMenuImg}
                    ></img>
                </button>
            </div>
        </div>
    )
}

export default Header
