import GridWhiteImg from './GlobalImages/GridWhiteImg.png'

import RatingWhiteImg from './GlobalImages/RatingWhiteImg.png'
import TopWhiteImg from './GlobalImages/TopWhiteImg.png'
import DateWhiteImg from './GlobalImages/DateWhiteImg.png'
import RatingBlackImg from './GlobalImages/RatingBlackImg.png'
import TopBlackImg from './GlobalImages/TopBlackImg.png'
import DateBlackImg from './GlobalImages/DateBlackImg.png'

import WindowsWhiteImg from './PlatformImages/WindowsWhiteImg.png'
import LinuxWhiteImg from './PlatformImages/LinuxWhiteImg.png'
import MacWhiteImg from './PlatformImages/MacWhiteImg.png'
import PlaystationWhiteImg from './PlatformImages/PlaystationWhiteImg.png'
import XboxWhiteImg from './PlatformImages/XboxWhiteImg.png'
import NintendoWhiteImg from './PlatformImages/NintendoWhiteImg.png'

import ActionWhiteImg from './GenreImages/ActionWhiteImg.png'
import AdventureWhiteImg from './GenreImages/AdventureWhiteImg.png'
import ShooterWhiteImg from './GenreImages/ShooterWhiteImg.png'
import SportsWhiteImg from './GenreImages/SportsWhiteImg.png'
import ArcadeWhiteImg from './GenreImages/ArcadeWhiteImg.png'
import BoardGameWhiteImg from './GenreImages/BoardGameWhiteImg.png'
import CardGameWhiteImg from './GenreImages/CardGameWhiteImg.png'
import CasualWhiteImg from './GenreImages/CasualWhiteImg.png'
import EducationalWhiteImg from './GenreImages/EducationalWhiteImg.png'
import FightingWhiteImg from './GenreImages/FightingWhiteImg.png'
import IndieWhiteImg from './GenreImages/IndieWhiteImg.png'
import MmoWhiteImg from './GenreImages/MmoWhiteImg.png'
import PlatformerWhiteImg from './GenreImages/PlatformerWhiteImg.png'
import PuzzleWhiteImg from './GenreImages/PuzzleWhiteImg.png'
import RacingWhiteImg from './GenreImages/RacingWhiteImg.png'
import RpgWhiteImg from './GenreImages/RpgWhiteImg.png'
import SimWhiteImg from './GenreImages/SimWhiteImg.png'
import StrategyWhiteImg from './GenreImages/StrategyWhiteImg.png'

const ButtonData = {
    Special: [
        {
            whiteIcon: TopWhiteImg,
            BlackIcon: TopBlackImg,
            text: 'All Time Top',
            categoryInfo: '',
        },
        {
            whiteIcon: RatingWhiteImg,
            BlackIcon: RatingBlackImg,
            text: 'Rating',
            categoryInfo: 'metacritic',
        },
        {
            whiteIcon: DateWhiteImg,
            BlackIcon: DateBlackImg,
            text: 'Release Date',
            categoryInfo: 'released',
        },
    ],

    Platforms: [
        {
            whiteIcon: WindowsWhiteImg,
            text: 'Windows',
            categoryInfo: '1',
        },
        {
            whiteIcon: LinuxWhiteImg,
            text: 'Linux',
            categoryInfo: '6',
        },
        {
            whiteIcon: MacWhiteImg,
            text: 'Mac OS',
            categoryInfo: '5',
        },
        {
            whiteIcon: PlaystationWhiteImg,
            text: 'Playstation',
            categoryInfo: '2',
        },
        {
            whiteIcon: XboxWhiteImg,
            text: 'Xbox',
            categoryInfo: '3',
        },
        {
            whiteIcon: NintendoWhiteImg,
            text: 'Nintendo',
            categoryInfo: '7',
        },
    ],

    Genres: [
        {
            whiteIcon: ActionWhiteImg,
            text: 'Action',
            categoryInfo: 'action',
        },
        {
            whiteIcon: AdventureWhiteImg,
            text: 'Adventure',
            categoryInfo: 'adventure',
        },
        {
            whiteIcon: ShooterWhiteImg,
            text: 'Shooter',
            categoryInfo: 'shooter',
        },
        {
            whiteIcon: RpgWhiteImg,
            text: 'RPG',
            categoryInfo: 'role-playing-games-rpg',
        },
        {
            whiteIcon: SportsWhiteImg,
            text: 'Sports',
            categoryInfo: 'sports',
        },
        {
            whiteIcon: StrategyWhiteImg,
            text: 'Strategy',
            categoryInfo: 'strategy',
        },
        {
            whiteIcon: SimWhiteImg,
            text: 'Simulation',
            categoryInfo: 'simulation',
        },
        {
            whiteIcon: FightingWhiteImg,
            text: 'Fighting',
            categoryInfo: 'fighting',
        },
        {
            whiteIcon: IndieWhiteImg,
            text: 'Indie',
            categoryInfo: 'indie',
        },
        {
            whiteIcon: CasualWhiteImg,
            text: 'Casual',
            categoryInfo: 'casual',
        },
        {
            whiteIcon: PuzzleWhiteImg,
            text: 'Puzzle',
            categoryInfo: 'puzzle',
        },
        {
            whiteIcon: ArcadeWhiteImg,
            text: 'Arcade',
            categoryInfo: 'arcade',
        },
        {
            whiteIcon: PlatformerWhiteImg,
            text: 'Platformer',
            categoryInfo: 'platformer',
        },
        {
            whiteIcon: MmoWhiteImg,
            text: 'MMO',
            categoryInfo: 'massively-multiplayer',
        },
        {
            whiteIcon: RacingWhiteImg,
            text: 'Racing',
            categoryInfo: 'racing',
        },
        {
            whiteIcon: EducationalWhiteImg,
            text: 'Educational',
            categoryInfo: 'educational',
        },
        {
            whiteIcon: CardGameWhiteImg,
            text: 'Card Games',
            categoryInfo: 'card',
        },
        {
            whiteIcon: BoardGameWhiteImg,
            text: 'Board Games',
            categoryInfo: 'board-games',
        },
    ],
}

export default ButtonData
