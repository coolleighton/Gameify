import LibraryButton from '../StandardLinkButton/StandardLinkButton'
import './MobileMenu.css'

import WindowsWhiteImg from '../../assets/WindowsWhiteImg.png'
import WindowsBlackImg from '../../assets/WindowsBlackImg.png'
import GridWhiteImg from '../../assets/GridWhiteImg.png'
import GridBlackImg from '../../assets/GridBlackImg.png'
import XboxWhiteImg from '../../assets/XboxWhiteImg.png'
import XboxBlackImg from '../../assets/XboxBlackImg.png'
import ActionWhiteImg from '../../assets/GenreImages/ActionWhiteImg.png'
import ActionBlackImg from '../../assets/GenreImages/ActionBlackImg.png'

import CloseImg from '../../assets/CloseImg.png'
import { Link } from 'react-router-dom'

const MobileMenu = () => {
    const toggleHamburgerMenuOff = async () => {
        const delay = (ms) => new Promise((res) => setTimeout(res, ms))

        document.querySelector('#hamburgerMenu').style.opacity = '0'

        await delay(500)
        document.querySelector('#hamburgerMenu').style.display = 'none'
    }

    return (
        <div
            id="hamburgerMenu"
            className="hidden opacity-0 fixed bg-white z-50 inset-0 px-7 py-5 duration-500 overflow-auto"
        >
            <div className="hamburgerMenu grid">
                <div className="hamburgerMenuCol1">
                    <h1 className="text-3xl text-black font-bold mb-2">
                        Quick Links
                    </h1>
                    <Link
                        to="/"
                        onClick={() => {
                            toggleHamburgerMenuOff()
                        }}
                    >
                        <LibraryButton
                            whiteIcon={WindowsWhiteImg}
                            blackIcon={WindowsBlackImg}
                            text="Home"
                            style={{ backgroundColor: 'black' }}
                            textStyle={{ color: 'black' }}
                        ></LibraryButton>
                    </Link>
                    <Link
                        to="/library"
                        onClick={() => {
                            toggleHamburgerMenuOff()
                        }}
                    >
                        <LibraryButton
                            whiteIcon={WindowsWhiteImg}
                            blackIcon={WindowsBlackImg}
                            text="Library"
                            style={{ backgroundColor: 'black' }}
                            textStyle={{ color: 'black' }}
                        ></LibraryButton>
                    </Link>

                    <h1 className="text-3xl text-black font-bold mt-6 mb-2">
                        Your Games
                    </h1>
                    <LibraryButton
                        whiteIcon={GridWhiteImg}
                        blackIcon={GridBlackImg}
                        text="Added Games"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></LibraryButton>

                    <h1 className="text-3xl text-black font-bold mt-6 mb-2">
                        Platforms
                    </h1>
                    <LibraryButton
                        whiteIcon={WindowsWhiteImg}
                        blackIcon={WindowsBlackImg}
                        text="Windows"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={XboxWhiteImg}
                        blackIcon={XboxBlackImg}
                        text="Xbox One"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={WindowsWhiteImg}
                        blackIcon={WindowsBlackImg}
                        text="Windows"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={XboxWhiteImg}
                        blackIcon={XboxBlackImg}
                        text="Xbox One"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></LibraryButton>
                </div>
                <div className="hamburgerMenuCol2">
                    <h1 className="text-3xl text-black font-bold mb-2">
                        Genres
                    </h1>
                    <LibraryButton
                        whiteIcon={ActionWhiteImg}
                        blackIcon={ActionBlackImg}
                        text="Action"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={ActionWhiteImg}
                        blackIcon={ActionBlackImg}
                        text="Action"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={ActionWhiteImg}
                        blackIcon={ActionBlackImg}
                        text="Action"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={ActionWhiteImg}
                        blackIcon={ActionBlackImg}
                        text="Action"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={ActionWhiteImg}
                        blackIcon={ActionBlackImg}
                        text="Action"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={ActionWhiteImg}
                        blackIcon={ActionBlackImg}
                        text="Action"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={ActionWhiteImg}
                        blackIcon={ActionBlackImg}
                        text="Action"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={ActionWhiteImg}
                        blackIcon={ActionBlackImg}
                        text="Action"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={ActionWhiteImg}
                        blackIcon={ActionBlackImg}
                        text="Action"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={ActionWhiteImg}
                        blackIcon={ActionBlackImg}
                        text="Action"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={ActionWhiteImg}
                        blackIcon={ActionBlackImg}
                        text="Action"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={ActionWhiteImg}
                        blackIcon={ActionBlackImg}
                        text="Action"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={ActionWhiteImg}
                        blackIcon={ActionBlackImg}
                        text="Action"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={ActionWhiteImg}
                        blackIcon={ActionBlackImg}
                        text="Action"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={ActionWhiteImg}
                        blackIcon={ActionBlackImg}
                        text="Action"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={ActionWhiteImg}
                        blackIcon={ActionBlackImg}
                        text="Action"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={ActionWhiteImg}
                        blackIcon={ActionBlackImg}
                        text="Action"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={ActionWhiteImg}
                        blackIcon={ActionBlackImg}
                        text="Action"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={ActionWhiteImg}
                        blackIcon={ActionBlackImg}
                        text="Action"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={ActionWhiteImg}
                        blackIcon={ActionBlackImg}
                        text="Action"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={ActionWhiteImg}
                        blackIcon={ActionBlackImg}
                        text="Action"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={ActionWhiteImg}
                        blackIcon={ActionBlackImg}
                        text="Action"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></LibraryButton>
                    <LibraryButton
                        whiteIcon={ActionWhiteImg}
                        blackIcon={ActionBlackImg}
                        text="Action"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></LibraryButton>
                </div>
            </div>

            <button
                onClick={() => {
                    toggleHamburgerMenuOff()
                }}
            >
                <img src={CloseImg} className="fixed right-10 bottom-10"></img>
            </button>
        </div>
    )
}

export default MobileMenu
