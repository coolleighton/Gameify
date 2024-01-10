import StandardLinkButton from '../../../../GlobalComponents/StandardLinkButton/StandardLinkButton'

import GridWhiteImg from '../../../../Assets/GlobalImages/GridWhiteImg.png'
import GridBlackImg from '../../../../Assets/GlobalImages/GridBlackImg.png'

import WindowsWhiteImg from '../../../../Assets/PlatformImages/WindowsWhiteImg.png'
import WindowsBlackImg from '../../../../Assets/PlatformImages/WindowsBlackImg.png'

import LinuxWhiteImg from '../../../../Assets/PlatformImages/LinuxWhiteImg.png'
import LinuxBlackImg from '../../../../Assets/PlatformImages/LinuxBlackImg.png'

import MacWhiteImg from '../../../../Assets/PlatformImages/MacWhiteImg.png'
import MacBlackImg from '../../../../Assets/PlatformImages/MacBlackImg.png'

import PlaystationWhiteImg from '../../../../Assets/PlatformImages/PlaystationWhiteImg.png'
import PlaystationBlackImg from '../../../../Assets/PlatformImages/PlaystationBlackImg.png'

import XboxWhiteImg from '../../../../Assets/PlatformImages/XboxWhiteImg.png'
import XboxBlackImg from '../../../../Assets/PlatformImages/XboxBlackImg.png'

import NintendoWhiteImg from '../../../../Assets/PlatformImages/NintendoWhiteImg.png'
import NintendoBlackImg from '../../../../Assets/PlatformImages/NintendoBlackImg.png'

import ActionWhiteImg from '../../../../Assets/GenreImages/ActionWhiteImg.png'
import ActionBlackImg from '../../../../Assets/GenreImages/ActionBlackImg.png'

import AdventureWhiteImg from '../../../../Assets/GenreImages/AdventureWhiteImg.png'
import AdventureBlackImg from '../../../../Assets/GenreImages/AdventureBlackImg.png'

import ShooterWhiteImg from '../../../../Assets/GenreImages/ShooterWhiteImg.png'
import ShooterBlackImg from '../../../../Assets/GenreImages/ShooterBlackImg.png'

import SportsWhiteImg from '../../../../Assets/GenreImages/SportsWhiteImg.png'
import SportsBlackImg from '../../../../Assets/GenreImages/SportsBlackImg.png'

import ArcadeWhiteImg from '../../../../Assets/GenreImages/ArcadeWhiteImg.png'
import ArcadeBlackImg from '../../../../Assets/GenreImages/ArcadeBlackImg.png'

import BoardGameWhiteImg from '../../../../Assets/GenreImages/BoardGameWhiteImg.png'
import BoardGameBlackImg from '../../../../Assets/GenreImages/BoardGameBlackImg.png'

import CardGameWhiteImg from '../../../../Assets/GenreImages/CardGameWhiteImg.png'
import CardGameBlackImg from '../../../../Assets/GenreImages/CardGameBlackImg.png'

import CasualWhiteImg from '../../../../Assets/GenreImages/CasualWhiteImg.png'
import CasualBlackImg from '../../../../Assets/GenreImages/CasualBlackImg.png'

import EducationalWhiteImg from '../../../../Assets/GenreImages/EducationalWhiteImg.png'
import EducationalBlackImg from '../../../../Assets/GenreImages/EducationalBlackImg.png'

import FightingWhiteImg from '../../../../Assets/GenreImages/FightingWhiteImg.png'
import FightingBlackImg from '../../../../Assets/GenreImages/FightingBlackImg.png'

import IndieWhiteImg from '../../../../Assets/GenreImages/IndieWhiteImg.png'
import IndieBlackImg from '../../../../Assets/GenreImages/IndieBlackImg.png'

import MmoWhiteImg from '../../../../Assets/GenreImages/MmoWhiteImg.png'
import MmoBlackImg from '../../../../Assets/GenreImages/MmoBlackImg.png'

import PlatformerWhiteImg from '../../../../Assets/GenreImages/PlatformerWhiteImg.png'
import PlatformerBlackImg from '../../../../Assets/GenreImages/PlatformerBlackImg.png'

import PuzzleWhiteImg from '../../../../Assets/GenreImages/PuzzleWhiteImg.png'
import PuzzleBlackImg from '../../../../Assets/GenreImages/PuzzleBlackImg.png'

import RacingWhiteImg from '../../../../Assets/GenreImages/RacingWhiteImg.png'
import RacingBlackImg from '../../../../Assets/GenreImages/RacingBlackImg.png'

import RpgWhiteImg from '../../../../Assets/GenreImages/RpgWhiteImg.png'
import RpgBlackImg from '../../../../Assets/GenreImages/RpgBlackImg.png'

import SimWhiteImg from '../../../../Assets/GenreImages/SimWhiteImg.png'
import SimBlackImg from '../../../../Assets/GenreImages/SimBlackImg.png'

import StrategyWhiteImg from '../../../../Assets/GenreImages/StrategyWhiteImg.png'
import StrategyBlackImg from '../../../../Assets/GenreImages/StrategyBlackImg.png'

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
