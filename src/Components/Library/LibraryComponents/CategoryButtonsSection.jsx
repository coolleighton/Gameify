import StandardLinkButton from '../../StandardLinkButton/StandardLinkButton'

import GridWhiteImg from '../../../assets/GridWhiteImg.png'
import GridBlackImg from '../../../assets/GridBlackImg.png'

import WindowsWhiteImg from '../../../assets/PlatformImages/WindowsWhiteImg.png'
import WindowsBlackImg from '../../../assets/PlatformImages/WindowsBlackImg.png'

import LinuxWhiteImg from '../../../assets/PlatformImages/LinuxWhiteImg.png'
import LinuxBlackImg from '../../../assets/PlatformImages/LinuxBlackImg.png'

import MacWhiteImg from '../../../assets/PlatformImages/MacWhiteImg.png'
import MacBlackImg from '../../../assets/PlatformImages/MacBlackImg.png'

import PlaystationWhiteImg from '../../../assets/PlatformImages/PlaystationWhiteImg.png'
import PlaystationBlackImg from '../../../assets/PlatformImages/PlaystationBlackImg.png'

import XboxWhiteImg from '../../../assets/PlatformImages/XboxWhiteImg.png'
import XboxBlackImg from '../../../assets/PlatformImages/XboxBlackImg.png'

import NintendoWhiteImg from '../../../assets/PlatformImages/NintendoWhiteImg.png'
import NintendoBlackImg from '../../../assets/PlatformImages/NintendoBlackImg.png'

import ActionWhiteImg from '../../../assets/GenreImages/ActionWhiteImg.png'
import ActionBlackImg from '../../../assets/GenreImages/ActionBlackImg.png'

import AdventureWhiteImg from '../../../assets/GenreImages/AdventureWhiteImg.png'
import AdventureBlackImg from '../../../assets/GenreImages/AdventureBlackImg.png'

import ShooterWhiteImg from '../../../assets/GenreImages/ShooterWhiteImg.png'
import ShooterBlackImg from '../../../assets/GenreImages/ShooterBlackImg.png'

import SportsWhiteImg from '../../../assets/GenreImages/SportsWhiteImg.png'
import SportsBlackImg from '../../../assets/GenreImages/SportsBlackImg.png'

import ArcadeWhiteImg from '../../../assets/GenreImages/ArcadeWhiteImg.png'
import ArcadeBlackImg from '../../../assets/GenreImages/ArcadeBlackImg.png'

import BoardGameWhiteImg from '../../../assets/GenreImages/BoardGameWhiteImg.png'
import BoardGameBlackImg from '../../../assets/GenreImages/BoardGameBlackImg.png'

import CardGameWhiteImg from '../../../assets/GenreImages/CardGameWhiteImg.png'
import CardGameBlackImg from '../../../assets/GenreImages/CardGameBlackImg.png'

import CasualWhiteImg from '../../../assets/GenreImages/CasualWhiteImg.png'
import CasualBlackImg from '../../../assets/GenreImages/CasualBlackImg.png'

import EducationalWhiteImg from '../../../assets/GenreImages/EducationalWhiteImg.png'
import EducationalBlackImg from '../../../assets/GenreImages/EducationalBlackImg.png'

import FightingWhiteImg from '../../../assets/GenreImages/FightingWhiteImg.png'
import FightingBlackImg from '../../../assets/GenreImages/FightingBlackImg.png'

import IndieWhiteImg from '../../../assets/GenreImages/IndieWhiteImg.png'
import IndieBlackImg from '../../../assets/GenreImages/IndieBlackImg.png'

import MmoWhiteImg from '../../../assets/GenreImages/MmoWhiteImg.png'
import MmoBlackImg from '../../../assets/GenreImages/MmoBlackImg.png'

import PlatformerWhiteImg from '../../../assets/GenreImages/PlatformerWhiteImg.png'
import PlatformerBlackImg from '../../../assets/GenreImages/PlatformerBlackImg.png'

import PuzzleWhiteImg from '../../../assets/GenreImages/PuzzleWhiteImg.png'
import PuzzleBlackImg from '../../../assets/GenreImages/PuzzleBlackImg.png'

import RacingWhiteImg from '../../../assets/GenreImages/RacingWhiteImg.png'
import RacingBlackImg from '../../../assets/GenreImages/RacingBlackImg.png'

import RpgWhiteImg from '../../../assets/GenreImages/RpgWhiteImg.png'
import RpgBlackImg from '../../../assets/GenreImages/RpgBlackImg.png'

import SimWhiteImg from '../../../assets/GenreImages/SimWhiteImg.png'
import SimBlackImg from '../../../assets/GenreImages/SimBlackImg.png'

import StrategyWhiteImg from '../../../assets/GenreImages/StrategyWhiteImg.png'
import StrategyBlackImg from '../../../assets/GenreImages/StrategyBlackImg.png'

const CategoryButtonsSection = ({
    handleCategoryClick,
    handlePlatformClick,
}) => {
    return (
        <div
            id="categoryButtons"
            className="hidden sm:block bg-gray-500 bg-opacity-20 w-52 px-4 py-2 rounded-2xl h-[87vh] overflow-auto no-scrollbar fixed mt-24 duration-500 ml-7"
        >
            <h1 className="text-3xl font-bold mb-2">Your Games</h1>
            <StandardLinkButton
                whiteIcon={GridWhiteImg}
                blackIcon={GridBlackImg}
                text="Added Games"
                handleClick={handleCategoryClick}
            ></StandardLinkButton>

            <h1 className="text-3xl font-bold mt-6 mb-2">Platforms</h1>
            <StandardLinkButton
                whiteIcon={WindowsWhiteImg}
                blackIcon={WindowsBlackImg}
                handleClick={handlePlatformClick}
                text="Windows"
                genre="1"
            ></StandardLinkButton>
            <StandardLinkButton
                whiteIcon={LinuxWhiteImg}
                blackIcon={LinuxBlackImg}
                handleClick={handlePlatformClick}
                text="Linux"
                genre="6"
            ></StandardLinkButton>
            <StandardLinkButton
                whiteIcon={MacWhiteImg}
                blackIcon={MacBlackImg}
                handleClick={handlePlatformClick}
                text="Mac OS"
                genre="5"
            ></StandardLinkButton>
            <StandardLinkButton
                whiteIcon={PlaystationWhiteImg}
                blackIcon={PlaystationBlackImg}
                handleClick={handlePlatformClick}
                text="Playstation"
                genre="2"
            ></StandardLinkButton>
            <StandardLinkButton
                whiteIcon={XboxWhiteImg}
                blackIcon={XboxBlackImg}
                handleClick={handlePlatformClick}
                text="Xbox"
                genre="3"
            ></StandardLinkButton>
            <StandardLinkButton
                whiteIcon={NintendoWhiteImg}
                blackIcon={NintendoBlackImg}
                handleClick={handlePlatformClick}
                text="Nintendo"
                genre="7"
            ></StandardLinkButton>
            <h1 className="text-3xl font-bold mt-6 mb-2">Genres</h1>
            <StandardLinkButton
                whiteIcon={ActionWhiteImg}
                blackIcon={ActionBlackImg}
                handleClick={handleCategoryClick}
                text="Action"
                genre="action"
            ></StandardLinkButton>
            <StandardLinkButton
                whiteIcon={AdventureWhiteImg}
                blackIcon={AdventureBlackImg}
                handleClick={handleCategoryClick}
                text="Adventure"
                genre="adventure"
            ></StandardLinkButton>
            <StandardLinkButton
                whiteIcon={ShooterWhiteImg}
                blackIcon={ShooterBlackImg}
                handleClick={handleCategoryClick}
                text="Shooter"
                genre="shooter"
            ></StandardLinkButton>
            <StandardLinkButton
                whiteIcon={RpgWhiteImg}
                blackIcon={RpgBlackImg}
                handleClick={handleCategoryClick}
                text="RPG"
                genre="role-playing-games-rpg"
            ></StandardLinkButton>
            <StandardLinkButton
                whiteIcon={SportsWhiteImg}
                blackIcon={SportsBlackImg}
                handleClick={handleCategoryClick}
                text="Sports"
                genre="sports"
            ></StandardLinkButton>
            <StandardLinkButton
                whiteIcon={StrategyWhiteImg}
                blackIcon={StrategyBlackImg}
                handleClick={handleCategoryClick}
                text="Strategy"
                genre="strategy"
            ></StandardLinkButton>
            <StandardLinkButton
                whiteIcon={SimWhiteImg}
                blackIcon={SimBlackImg}
                handleClick={handleCategoryClick}
                text="Simulation"
                genre="simulation"
            ></StandardLinkButton>
            <StandardLinkButton
                whiteIcon={FightingWhiteImg}
                blackIcon={FightingBlackImg}
                handleClick={handleCategoryClick}
                text="Fighting"
                genre="fighting"
            ></StandardLinkButton>
            <StandardLinkButton
                whiteIcon={IndieWhiteImg}
                blackIcon={IndieBlackImg}
                handleClick={handleCategoryClick}
                text="Indie"
                genre="indie"
            ></StandardLinkButton>
            <StandardLinkButton
                whiteIcon={CasualWhiteImg}
                blackIcon={CasualBlackImg}
                handleClick={handleCategoryClick}
                text="Casual"
                genre="casual"
            ></StandardLinkButton>
            <StandardLinkButton
                whiteIcon={PuzzleWhiteImg}
                blackIcon={PuzzleBlackImg}
                handleClick={handleCategoryClick}
                text="Puzzle"
                genre="puzzle"
            ></StandardLinkButton>
            <StandardLinkButton
                whiteIcon={ArcadeWhiteImg}
                blackIcon={ArcadeBlackImg}
                handleClick={handleCategoryClick}
                text="Arcade"
                genre="arcade"
            ></StandardLinkButton>
            <StandardLinkButton
                whiteIcon={PlatformerWhiteImg}
                blackIcon={PlatformerBlackImg}
                handleClick={handleCategoryClick}
                text="Platformer"
                genre="platformer"
            ></StandardLinkButton>
            <StandardLinkButton
                whiteIcon={MmoWhiteImg}
                blackIcon={MmoBlackImg}
                handleClick={handleCategoryClick}
                text="MMO"
                genre="massively-multiplayer"
            ></StandardLinkButton>
            <StandardLinkButton
                whiteIcon={RacingWhiteImg}
                blackIcon={RacingBlackImg}
                handleClick={handleCategoryClick}
                text="Racing"
                genre="racing"
            ></StandardLinkButton>
            <StandardLinkButton
                whiteIcon={EducationalWhiteImg}
                blackIcon={EducationalBlackImg}
                handleClick={handleCategoryClick}
                text="Educational"
                genre="educational"
            ></StandardLinkButton>
            <StandardLinkButton
                whiteIcon={CardGameWhiteImg}
                blackIcon={CardGameBlackImg}
                handleClick={handleCategoryClick}
                text="Card Games"
                genre="card"
            ></StandardLinkButton>
            <StandardLinkButton
                whiteIcon={BoardGameWhiteImg}
                blackIcon={BoardGameBlackImg}
                handleClick={handleCategoryClick}
                text="Board Games"
                genre="board-games"
            ></StandardLinkButton>
        </div>
    )
}

export default CategoryButtonsSection
