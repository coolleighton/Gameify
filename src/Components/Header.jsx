import Logo from '../assets/GameifyLogo.png'
import SearchImg from '../assets/SearchImg.png'
import CartImg from '../assets/CartImg.png'
import LibraryImg from '../assets/LibraryImg.png'

const Header = () => {
    return (
        <div className="px-10 py-7 flex flex-row items-center justify-between">
            <div className="flex flex-row items-center cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out">
                <img className="w-12 h-12" src={Logo}></img>
                <h1 className="font-semibold text-3xl pl-3">Gameify</h1>
            </div>
            <div className="flex flex-row items-center bg-white rounded-md px-2">
                <input
                    className="outline-none text-black text-bold py-1 px-2 w-60 focus:w-[32rem] transition-all duration-500 ease-in-out"
                    placeholder="Search games..."
                ></input>
                <img className="h-5 w-5 cursor-pointer" src={SearchImg}></img>
            </div>
            <div className="w-20 flex flex-row items-center justify-between ">
                <img
                    className="h-8 w-8 cursor-pointer hover:scale-125 duration-200 ease-in-out"
                    src={LibraryImg}
                ></img>
                <img
                    className="h-8 w-8 cursor-pointer hover:scale-125 duration-200 ease-in-out"
                    src={CartImg}
                ></img>
            </div>
        </div>
    )
}

export default Header
