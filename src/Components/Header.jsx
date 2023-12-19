import { Link } from 'react-router-dom'
import '../ComponentStyles/Header.css'
import Logo from '../assets/GameifyLogo.png'
import SearchImg from '../assets/SearchImg.png'
import CartImg from '../assets/CartImg.png'
import LibraryImg from '../assets/LibraryImg.png'
import HomeImg from '../assets/HomeImg.png'

const Header = () => {
    return (
        <div className="px-5 py-5 flex flex-row items-center justify-between sm:px-7">
            <Link to="/">
                <div className="mr-2 flex flex-row items-center cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out">
                    <img className="w-12 sm:mr-4" src={Logo}></img>
                    <h1 className="hidden font-semibold text-3xl sm:block">
                        Gameify
                    </h1>
                </div>
            </Link>

            <div className="searchBar flex flex-row text-sm items-center bg-white rounded-md px-1 mx-2 w-5/12">
                <input
                    className="h-8 w-full outline-none text-black text-bold px-2"
                    placeholder="Search games..."
                ></input>
                <img className="h-5 cursor-pointer" src={SearchImg}></img>
            </div>

            <div className="flex flex-row justify-between items-center ml-1">
                <Link to="/">
                    <img
                        className="w-8 mx-1 cursor-pointer hover:scale-125 duration-200 ease-in-out sm:mx-2"
                        src={HomeImg}
                    ></img>
                </Link>
                <Link to="/library">
                    <img
                        className="w-8 mx-1 cursor-pointer hover:scale-125 duration-200 ease-in-out sm:mx-2"
                        src={LibraryImg}
                    ></img>
                </Link>
                <Link to="/library">
                    <img
                        className="w-8 mx-1 cursor-pointer hover:scale-125 duration-200 ease-in-out sm:mx-2"
                        src={CartImg}
                    ></img>
                </Link>
            </div>
        </div>
    )
}

// w-60 focus:w-[32rem] transition-all duration-500 ease-in-out

export default Header
