import GridWhiteImg from '../../Assets/GlobalImages/GridWhiteImg.png'

import WindowsWhiteImg from '../../Assets/PlatformImages/WindowsWhiteImg.png'
import LinuxWhiteImg from '../../Assets/PlatformImages/LinuxWhiteImg.png'
import MacWhiteImg from '../../Assets/PlatformImages/MacWhiteImg.png'
import PlaystationWhiteImg from '../../Assets/PlatformImages/PlaystationWhiteImg.png'
import XboxWhiteImg from '../../Assets/PlatformImages/XboxWhiteImg.png'

import NintendoWhiteImg from '../../Assets/PlatformImages/NintendoWhiteImg.png'

import ActionWhiteImg from '../../Assets/GenreImages/ActionWhiteImg.png'
import AdventureWhiteImg from '../../Assets/GenreImages/AdventureWhiteImg.png'
import ShooterWhiteImg from '../../Assets/GenreImages/ShooterWhiteImg.png'
import SportsWhiteImg from '../../Assets/GenreImages/SportsWhiteImg.png'
import ArcadeWhiteImg from '../../Assets/GenreImages/ArcadeWhiteImg.png'
import BoardGameWhiteImg from '../../Assets/GenreImages/BoardGameWhiteImg.png'
import CardGameWhiteImg from '../../Assets/GenreImages/CardGameWhiteImg.png'
import CasualWhiteImg from '../../Assets/GenreImages/CasualWhiteImg.png'
import EducationalWhiteImg from '../../Assets/GenreImages/EducationalWhiteImg.png'
import FightingWhiteImg from '../../Assets/GenreImages/FightingWhiteImg.png'
import IndieWhiteImg from '../../Assets/GenreImages/IndieWhiteImg.png'
import MmoWhiteImg from '../../Assets/GenreImages/MmoWhiteImg.png'
import PlatformerWhiteImg from '../../Assets/GenreImages/PlatformerWhiteImg.png'
import PuzzleWhiteImg from '../../Assets/GenreImages/PuzzleWhiteImg.png'
import RacingWhiteImg from '../../Assets/GenreImages/RacingWhiteImg.png'
import RpgWhiteImg from '../../Assets/GenreImages/RpgWhiteImg.png'
import SimWhiteImg from '../../Assets/GenreImages/SimWhiteImg.png'
import StrategyWhiteImg from '../../Assets/GenreImages/StrategyWhiteImg.png'

const ButtonData = {
    General: [
        {
            whiteIcon: GridWhiteImg,
            text: 'Your Games',
        },
    ],

    Special: [
        {
            whiteIcon: GridWhiteImg,
            text: 'All Time Top',
            categoryInfo: '',
        },
        {
            whiteIcon: GridWhiteImg,
            text: 'Rating',
            categoryInfo: 'metacritic',
        },
        {
            whiteIcon: GridWhiteImg,
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
