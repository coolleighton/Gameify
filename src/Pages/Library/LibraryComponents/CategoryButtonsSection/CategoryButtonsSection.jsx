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

import StandardLinkButton from '../../../../GlobalComponents/StandardLinkButton/StandardLinkButton'
import './CategoryButtonsSection.css'

const CategoryButtonsSection = ({ handleCategoryClick }) => {
    return (
        <div
            id="categoryButtonsWrapper"
            className="categoryButtonsWrapper hidden w-72 sm:mr-2 sm:flex fixed duration-300 flex"
        >
            <div className="categoryButtons hidden sm:block bg-gray-500 bg-opacity-20 w-56 px-4 py-2 rounded-2xl overflow-auto no-scrollbar">
                <h1 className="text-3xl font-bold mb-2">Your Games</h1>
                <StandardLinkButton
                    whiteIcon={GridWhiteImg}
                    blackIcon={GridBlackImg}
                    text="Added Games"
                    handleCategoryClick={handleCategoryClick}
                ></StandardLinkButton>

                <h1 className="text-3xl font-bold mt-6 mb-2">Platforms</h1>
                <StandardLinkButton
                    whiteIcon={WindowsWhiteImg}
                    blackIcon={WindowsBlackImg}
                    handleCategoryClick={handleCategoryClick}
                    text="Windows"
                    categoryInfo="1"
                    category="platform"
                ></StandardLinkButton>
                <StandardLinkButton
                    whiteIcon={LinuxWhiteImg}
                    blackIcon={LinuxBlackImg}
                    handleCategoryClick={handleCategoryClick}
                    text="Linux"
                    categoryInfo="6"
                    category="platform"
                ></StandardLinkButton>
                <StandardLinkButton
                    whiteIcon={MacWhiteImg}
                    blackIcon={MacBlackImg}
                    handleCategoryClick={handleCategoryClick}
                    text="Mac OS"
                    categoryInfo="5"
                    category="platform"
                ></StandardLinkButton>
                <StandardLinkButton
                    whiteIcon={PlaystationWhiteImg}
                    blackIcon={PlaystationBlackImg}
                    handleCategoryClick={handleCategoryClick}
                    text="Playstation"
                    categoryInfo="2"
                    category="platform"
                ></StandardLinkButton>
                <StandardLinkButton
                    whiteIcon={XboxWhiteImg}
                    blackIcon={XboxBlackImg}
                    handleCategoryClick={handleCategoryClick}
                    text="Xbox"
                    categoryInfo="3"
                    category="platform"
                ></StandardLinkButton>
                <StandardLinkButton
                    whiteIcon={NintendoWhiteImg}
                    blackIcon={NintendoBlackImg}
                    handleCategoryClick={handleCategoryClick}
                    text="Nintendo"
                    categoryInfo="7"
                    category="platform"
                ></StandardLinkButton>
                <h1 className="text-3xl font-bold mt-6 mb-2">Genre</h1>
                <StandardLinkButton
                    whiteIcon={ActionWhiteImg}
                    blackIcon={ActionBlackImg}
                    handleCategoryClick={handleCategoryClick}
                    text="Action"
                    categoryInfo="action"
                    category="genre"
                ></StandardLinkButton>
                <StandardLinkButton
                    whiteIcon={AdventureWhiteImg}
                    blackIcon={AdventureBlackImg}
                    handleCategoryClick={handleCategoryClick}
                    text="Adventure"
                    categoryInfo="adventure"
                    category="genre"
                ></StandardLinkButton>
                <StandardLinkButton
                    whiteIcon={ShooterWhiteImg}
                    blackIcon={ShooterBlackImg}
                    handleCategoryClick={handleCategoryClick}
                    text="Shooter"
                    categoryInfo="shooter"
                    category="genre"
                ></StandardLinkButton>
                <StandardLinkButton
                    whiteIcon={RpgWhiteImg}
                    blackIcon={RpgBlackImg}
                    handleCategoryClick={handleCategoryClick}
                    text="RPG"
                    categoryInfo="role-playing-games-rpg"
                    category="genre"
                ></StandardLinkButton>
                <StandardLinkButton
                    whiteIcon={SportsWhiteImg}
                    blackIcon={SportsBlackImg}
                    handleCategoryClick={handleCategoryClick}
                    text="Sports"
                    categoryInfo="sports"
                    category="genre"
                ></StandardLinkButton>
                <StandardLinkButton
                    whiteIcon={StrategyWhiteImg}
                    blackIcon={StrategyBlackImg}
                    handleCategoryClick={handleCategoryClick}
                    text="Strategy"
                    categoryInfo="strategy"
                    category="genre"
                ></StandardLinkButton>
                <StandardLinkButton
                    whiteIcon={SimWhiteImg}
                    blackIcon={SimBlackImg}
                    handleCategoryClick={handleCategoryClick}
                    text="Simulation"
                    categoryInfo="simulation"
                    category="genre"
                ></StandardLinkButton>
                <StandardLinkButton
                    whiteIcon={FightingWhiteImg}
                    blackIcon={FightingBlackImg}
                    handleCategoryClick={handleCategoryClick}
                    text="Fighting"
                    categoryInfo="fighting"
                    category="genre"
                ></StandardLinkButton>
                <StandardLinkButton
                    whiteIcon={IndieWhiteImg}
                    blackIcon={IndieBlackImg}
                    handleCategoryClick={handleCategoryClick}
                    text="Indie"
                    categoryInfo="indie"
                    category="genre"
                ></StandardLinkButton>
                <StandardLinkButton
                    whiteIcon={CasualWhiteImg}
                    blackIcon={CasualBlackImg}
                    handleCategoryClick={handleCategoryClick}
                    text="Casual"
                    categoryInfo="casual"
                    category="genre"
                ></StandardLinkButton>
                <StandardLinkButton
                    whiteIcon={PuzzleWhiteImg}
                    blackIcon={PuzzleBlackImg}
                    handleCategoryClick={handleCategoryClick}
                    text="Puzzle"
                    categoryInfo="puzzle"
                    category="genre"
                ></StandardLinkButton>
                <StandardLinkButton
                    whiteIcon={ArcadeWhiteImg}
                    blackIcon={ArcadeBlackImg}
                    handleCategoryClick={handleCategoryClick}
                    text="Arcade"
                    categoryInfo="arcade"
                    category="genre"
                ></StandardLinkButton>
                <StandardLinkButton
                    whiteIcon={PlatformerWhiteImg}
                    blackIcon={PlatformerBlackImg}
                    handleCategoryClick={handleCategoryClick}
                    text="Platformer"
                    categoryInfo="platformer"
                    category="genre"
                ></StandardLinkButton>
                <StandardLinkButton
                    whiteIcon={MmoWhiteImg}
                    blackIcon={MmoBlackImg}
                    handleCategoryClick={handleCategoryClick}
                    text="MMO"
                    categoryInfo="massively-multiplayer"
                    category="genre"
                ></StandardLinkButton>
                <StandardLinkButton
                    whiteIcon={RacingWhiteImg}
                    blackIcon={RacingBlackImg}
                    handleCategoryClick={handleCategoryClick}
                    text="Racing"
                    categoryInfo="racing"
                    category="genre"
                ></StandardLinkButton>
                <StandardLinkButton
                    whiteIcon={EducationalWhiteImg}
                    blackIcon={EducationalBlackImg}
                    handleCategoryClick={handleCategoryClick}
                    text="Educational"
                    categoryInfo="educational"
                    category="genre"
                ></StandardLinkButton>
                <StandardLinkButton
                    whiteIcon={CardGameWhiteImg}
                    blackIcon={CardGameBlackImg}
                    handleCategoryClick={handleCategoryClick}
                    text="Card Games"
                    categoryInfo="card"
                    category="genre"
                ></StandardLinkButton>
                <StandardLinkButton
                    whiteIcon={BoardGameWhiteImg}
                    blackIcon={BoardGameBlackImg}
                    handleCategoryClick={handleCategoryClick}
                    text="Board Games"
                    categoryInfo="board-games"
                    category="genre"
                ></StandardLinkButton>
            </div>
        </div>
    )
}

export default CategoryButtonsSection
