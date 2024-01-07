import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Header.css'
import Logo from '../../assets/GameifyLogo.png'
import SearchImg from '../../assets/SearchImg.png'
import CartImg from '../../assets/CartImg.png'
import LibraryImg from '../../assets/LibraryImg.png'
import HomeImg from '../../assets/HomeImg.png'
import HamburgerMenuImg from '../../assets/HamburgerMenuImg.png'
import CartActiveImg from '../../assets/CartActiveImg.png'

const Header = ({ headerBgColour, cart }) => {
    const [cartActive, setCartActive] = useState(false)

    useEffect(() => {
        if (cart.length > 0) {
            setCartActive(true)
        } else {
            setCartActive(false)
        }
    }, [cart])

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
            document.querySelector('#categoryButtons').style.marginTop =
                '1.7rem'
            document.querySelector('#categoryButtons').style.height = '94vh'
            prevDirection = direction
        } else if (direction === 1) {
            document.querySelector('#header').classList.remove('hide')
            document.querySelector('#categoryButtons').style.marginTop = '6rem'
            document.querySelector('#categoryButtons').style.height = '87vh'
            prevDirection = direction
        }
    }

    const toggleHamburgerMenuOn = async () => {
        const delay = (ms) => new Promise((res) => setTimeout(res, ms))

        document.querySelector('#hamburgerMenu').style.display = 'block'

        await delay(0)
        document.querySelector('#hamburgerMenu').style.opacity = '1'
    }

    const toggleCartOn = async () => {
        const delay = (ms) => new Promise((res) => setTimeout(res, ms))

        document.querySelector('#Cart').style.display = 'block'

        await delay(0)
        document.querySelector('#Cart').style.opacity = '1'

        // stop user from scrolling the body
        document.querySelector('body').style.position = 'fixed'
        document.querySelector('body').style.overflowY = 'scroll'
    }

    window.addEventListener('scroll', checkScroll)

    return (
        <div
            id="header"
            className="px-5 py-5 flex flex-row items-center justify-between sm:px-7 fixed w-full"
            style={{ backgroundColor: headerBgColour }}
        >
            <Link to="/">
                <div className="mr-2 flex flex-row items-center cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out">
                    <img className="w-12 sm:mr-4" src={Logo}></img>
                    <h1 className="hidden font-semibold text-3xl sm:block">
                        Gameify
                    </h1>
                </div>
            </Link>

            <div className="searchBar flex flex-row text-sm items-center bg-white rounded-md px-1 mx-2">
                <input
                    className="h-8 w-full outline-none text-black text-bold px-2"
                    placeholder="Search games..."
                ></input>
                <img className="h-5 cursor-pointer" src={SearchImg}></img>
            </div>

            <div className="flex flex-row justify-between items-center ml-1">
                <Link to="/" className="hidden sm:block">
                    <img
                        className="w-8 mx-1 cursor-pointer hover:scale-125 duration-200 ease-in-out sm:mx-2"
                        src={HomeImg}
                    ></img>
                </Link>
                <Link to="/library" className="hidden sm:block">
                    <img
                        className="w-8 mx-1 cursor-pointer hover:scale-125 duration-200 ease-in-out sm:mx-2"
                        src={LibraryImg}
                    ></img>
                </Link>
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
                <button
                    onClick={() => {
                        toggleHamburgerMenuOn()
                    }}
                >
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
