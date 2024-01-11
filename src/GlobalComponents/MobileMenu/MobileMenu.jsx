import GridWhiteImg from '../../Assets/GlobalImages/GridWhiteImg.png'
import GridBlackImg from '../../Assets/GlobalImages/GridBlackImg.png'
import WindowsWhiteImg from '../../Assets/PlatformImages/WindowsWhiteImg.png'
import WindowsBlackImg from '../../Assets/PlatformImages/WindowsBlackImg.png'
import LinuxWhiteImg from '../../Assets/PlatformImages/LinuxWhiteImg.png'
import LinuxBlackImg from '../../Assets/PlatformImages/LinuxBlackImg.png'
import MacWhiteImg from '../../Assets/PlatformImages/MacWhiteImg.png'
import MacBlackImg from '../../Assets/PlatformImages/MacBlackImg.png'
import PlaystationWhiteImg from '../../Assets/PlatformImages/PlaystationWhiteImg.png'
import PlaystationBlackImg from '../../Assets/PlatformImages/PlaystationBlackImg.png'
import XboxWhiteImg from '../../Assets/PlatformImages/XboxWhiteImg.png'
import XboxBlackImg from '../../Assets/PlatformImages/XboxBlackImg.png'
import NintendoWhiteImg from '../../Assets/PlatformImages/NintendoWhiteImg.png'
import NintendoBlackImg from '../../Assets/PlatformImages/NintendoBlackImg.png'
import ActionWhiteImg from '../../Assets/GenreImages/ActionWhiteImg.png'
import ActionBlackImg from '../../Assets/GenreImages/ActionBlackImg.png'
import AdventureWhiteImg from '../../Assets/GenreImages/AdventureWhiteImg.png'
import AdventureBlackImg from '../../Assets/GenreImages/AdventureBlackImg.png'
import ShooterWhiteImg from '../../Assets/GenreImages/ShooterWhiteImg.png'
import ShooterBlackImg from '../../Assets/GenreImages/ShooterBlackImg.png'
import SportsWhiteImg from '../../Assets/GenreImages/SportsWhiteImg.png'
import SportsBlackImg from '../../Assets/GenreImages/SportsBlackImg.png'
import ArcadeWhiteImg from '../../Assets/GenreImages/ArcadeWhiteImg.png'
import ArcadeBlackImg from '../../Assets/GenreImages/ArcadeBlackImg.png'
import BoardGameWhiteImg from '../../Assets/GenreImages/BoardGameWhiteImg.png'
import BoardGameBlackImg from '../../Assets/GenreImages/BoardGameBlackImg.png'
import CardGameWhiteImg from '../../Assets/GenreImages/CardGameWhiteImg.png'
import CardGameBlackImg from '../../Assets/GenreImages/CardGameBlackImg.png'
import CasualWhiteImg from '../../Assets/GenreImages/CasualWhiteImg.png'
import CasualBlackImg from '../../Assets/GenreImages/CasualBlackImg.png'
import EducationalWhiteImg from '../../Assets/GenreImages/EducationalWhiteImg.png'
import EducationalBlackImg from '../../Assets/GenreImages/EducationalBlackImg.png'
import FightingWhiteImg from '../../Assets/GenreImages/FightingWhiteImg.png'
import FightingBlackImg from '../../Assets/GenreImages/FightingBlackImg.png'
import IndieWhiteImg from '../../Assets/GenreImages/IndieWhiteImg.png'
import IndieBlackImg from '../../Assets/GenreImages/IndieBlackImg.png'
import MmoWhiteImg from '../../Assets/GenreImages/MmoWhiteImg.png'
import MmoBlackImg from '../../Assets/GenreImages/MmoBlackImg.png'
import PlatformerWhiteImg from '../../Assets/GenreImages/PlatformerWhiteImg.png'
import PlatformerBlackImg from '../../Assets/GenreImages/PlatformerBlackImg.png'
import PuzzleWhiteImg from '../../Assets/GenreImages/PuzzleWhiteImg.png'
import PuzzleBlackImg from '../../Assets/GenreImages/PuzzleBlackImg.png'
import RacingWhiteImg from '../../Assets/GenreImages/RacingWhiteImg.png'
import RacingBlackImg from '../../Assets/GenreImages/RacingBlackImg.png'
import RpgWhiteImg from '../../Assets/GenreImages/RpgWhiteImg.png'
import RpgBlackImg from '../../Assets/GenreImages/RpgBlackImg.png'
import SimWhiteImg from '../../Assets/GenreImages/SimWhiteImg.png'
import SimBlackImg from '../../Assets/GenreImages/SimBlackImg.png'
import StrategyWhiteImg from '../../Assets/GenreImages/StrategyWhiteImg.png'
import StrategyBlackImg from '../../Assets/GenreImages/StrategyBlackImg.png'
import CloseImg from '../../Assets/GlobalImages/CloseImg.png'

import StandardLinkButton from '../StandardLinkButton/StandardLinkButton.jsx'
import './MobileMenu.css'
import { useNavigate } from 'react-router-dom'

const MobileMenu = ({ handleCategoryClick }) => {
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

    // close hamburger menu with transition
    const toggleHamburgerMenuOff = async () => {
        const delay = (ms) => new Promise((res) => setTimeout(res, ms))
        document.querySelector('#hamburgerMenu').style.opacity = '0'
        await delay(500)
        document.querySelector('#hamburgerMenu').style.display = 'none'
    }

    // set new api info, close menu
    const handleClick = (text, categoryInfo, category) => {
        handleCategoryClick(text, categoryInfo, category)
        toggleHamburgerMenuOff()
        navigateToWithDelay('/Library')
        navigateToWithDelay('/Library')
    }

    // close menu then go to page
    const handleNavigate = (location) => {
        toggleHamburgerMenuOff()
        navigateToWithDelay(location)
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
                    <StandardLinkButton
                        whiteIcon={WindowsWhiteImg}
                        blackIcon={WindowsBlackImg}
                        text="Home"
                        handleCategoryClick={() => handleNavigate('/')}
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></StandardLinkButton>

                    <StandardLinkButton
                        whiteIcon={WindowsWhiteImg}
                        blackIcon={WindowsBlackImg}
                        text="Library"
                        handleCategoryClick={() => handleNavigate('/Library')}
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></StandardLinkButton>

                    <h1 className="text-3xl text-black font-bold mt-6 mb-2">
                        Your Games
                    </h1>
                    <StandardLinkButton
                        whiteIcon={GridWhiteImg}
                        blackIcon={GridBlackImg}
                        text="Added Games"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></StandardLinkButton>

                    <h1 className="text-3xl text-black font-bold mt-6 mb-2">
                        Platforms
                    </h1>
                    <StandardLinkButton
                        whiteIcon={WindowsWhiteImg}
                        blackIcon={WindowsBlackImg}
                        handleCategoryClick={handleClick}
                        text="Windows"
                        categoryInfo="1"
                        category="platform"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></StandardLinkButton>
                    <StandardLinkButton
                        whiteIcon={LinuxWhiteImg}
                        blackIcon={LinuxBlackImg}
                        handleCategoryClick={handleClick}
                        text="Linux"
                        categoryInfo="6"
                        category="platform"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></StandardLinkButton>
                    <StandardLinkButton
                        whiteIcon={MacWhiteImg}
                        blackIcon={MacBlackImg}
                        handleCategoryClick={handleClick}
                        text="Mac OS"
                        categoryInfo="5"
                        category="platform"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></StandardLinkButton>
                    <StandardLinkButton
                        whiteIcon={PlaystationWhiteImg}
                        blackIcon={PlaystationBlackImg}
                        handleCategoryClick={handleClick}
                        text="Playstation"
                        categoryInfo="2"
                        category="platform"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></StandardLinkButton>
                    <StandardLinkButton
                        whiteIcon={XboxWhiteImg}
                        blackIcon={XboxBlackImg}
                        handleCategoryClick={handleClick}
                        text="Xbox"
                        categoryInfo="3"
                        category="platform"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></StandardLinkButton>
                    <StandardLinkButton
                        whiteIcon={NintendoWhiteImg}
                        blackIcon={NintendoBlackImg}
                        handleCategoryClick={handleClick}
                        text="Nintendo"
                        categoryInfo="7"
                        category="platform"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></StandardLinkButton>
                </div>
                <div className="hamburgerMenuCol2">
                    <h1 className="text-3xl text-black font-bold mb-2">
                        Genre
                    </h1>
                    <StandardLinkButton
                        whiteIcon={ActionWhiteImg}
                        blackIcon={ActionBlackImg}
                        handleCategoryClick={handleClick}
                        text="Action"
                        categoryInfo="action"
                        category="genre"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></StandardLinkButton>
                    <StandardLinkButton
                        whiteIcon={AdventureWhiteImg}
                        blackIcon={AdventureBlackImg}
                        handleCategoryClick={handleClick}
                        text="Adventure"
                        categoryInfo="adventure"
                        category="genre"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></StandardLinkButton>
                    <StandardLinkButton
                        whiteIcon={ShooterWhiteImg}
                        blackIcon={ShooterBlackImg}
                        handleCategoryClick={handleClick}
                        text="Shooter"
                        categoryInfo="shooter"
                        category="genre"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></StandardLinkButton>
                    <StandardLinkButton
                        whiteIcon={RpgWhiteImg}
                        blackIcon={RpgBlackImg}
                        handleCategoryClick={handleClick}
                        text="RPG"
                        categoryInfo="role-playing-games-rpg"
                        category="genre"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></StandardLinkButton>
                    <StandardLinkButton
                        whiteIcon={SportsWhiteImg}
                        blackIcon={SportsBlackImg}
                        handleCategoryClick={handleClick}
                        text="Sports"
                        categoryInfo="sports"
                        category="genre"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></StandardLinkButton>
                    <StandardLinkButton
                        whiteIcon={StrategyWhiteImg}
                        blackIcon={StrategyBlackImg}
                        handleCategoryClick={handleClick}
                        text="Strategy"
                        categoryInfo="strategy"
                        category="genre"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></StandardLinkButton>
                    <StandardLinkButton
                        whiteIcon={SimWhiteImg}
                        blackIcon={SimBlackImg}
                        handleCategoryClick={handleClick}
                        text="Simulation"
                        categoryInfo="simulation"
                        category="genre"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></StandardLinkButton>
                    <StandardLinkButton
                        whiteIcon={FightingWhiteImg}
                        blackIcon={FightingBlackImg}
                        handleCategoryClick={handleClick}
                        text="Fighting"
                        categoryInfo="fighting"
                        category="genre"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></StandardLinkButton>
                    <StandardLinkButton
                        whiteIcon={IndieWhiteImg}
                        blackIcon={IndieBlackImg}
                        handleCategoryClick={handleClick}
                        text="Indie"
                        categoryInfo="indie"
                        category="genre"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></StandardLinkButton>
                    <StandardLinkButton
                        whiteIcon={CasualWhiteImg}
                        blackIcon={CasualBlackImg}
                        handleCategoryClick={handleClick}
                        text="Casual"
                        categoryInfo="casual"
                        category="genre"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></StandardLinkButton>
                    <StandardLinkButton
                        whiteIcon={PuzzleWhiteImg}
                        blackIcon={PuzzleBlackImg}
                        handleCategoryClick={handleClick}
                        text="Puzzle"
                        categoryInfo="puzzle"
                        category="genre"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></StandardLinkButton>
                    <StandardLinkButton
                        whiteIcon={ArcadeWhiteImg}
                        blackIcon={ArcadeBlackImg}
                        handleCategoryClick={handleClick}
                        text="Arcade"
                        categoryInfo="arcade"
                        category="genre"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></StandardLinkButton>
                    <StandardLinkButton
                        whiteIcon={PlatformerWhiteImg}
                        blackIcon={PlatformerBlackImg}
                        handleCategoryClick={handleClick}
                        text="Platformer"
                        categoryInfo="platformer"
                        category="genre"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></StandardLinkButton>
                    <StandardLinkButton
                        whiteIcon={MmoWhiteImg}
                        blackIcon={MmoBlackImg}
                        handleCategoryClick={handleClick}
                        text="MMO"
                        categoryInfo="massively-multiplayer"
                        category="genre"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></StandardLinkButton>
                    <StandardLinkButton
                        whiteIcon={RacingWhiteImg}
                        blackIcon={RacingBlackImg}
                        handleCategoryClick={handleClick}
                        text="Racing"
                        categoryInfo="racing"
                        category="genre"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></StandardLinkButton>
                    <StandardLinkButton
                        whiteIcon={EducationalWhiteImg}
                        blackIcon={EducationalBlackImg}
                        handleCategoryClick={handleClick}
                        text="Educational"
                        categoryInfo="educational"
                        category="genre"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></StandardLinkButton>
                    <StandardLinkButton
                        whiteIcon={CardGameWhiteImg}
                        blackIcon={CardGameBlackImg}
                        handleCategoryClick={handleClick}
                        text="Card Games"
                        categoryInfo="card"
                        category="genre"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></StandardLinkButton>
                    <StandardLinkButton
                        whiteIcon={BoardGameWhiteImg}
                        blackIcon={BoardGameBlackImg}
                        handleCategoryClick={handleClick}
                        text="Board Games"
                        categoryInfo="board-games"
                        category="genre"
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                    ></StandardLinkButton>
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
