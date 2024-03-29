import DownArrowImg from '../../../../../Assets/GlobalImages/DownArrowImg.png'
import ButtonData from '../../../../../Assets/ButtonsData'

const Filters = ({
    gameGenre,
    gamePlatform,
    gameSpecialCategory,
    handleFilterSpecialCategory,
    handleFilterPlatformCategory,
    handleFilterGenreCategory,
}) => {
    // show filter list depending on which button is clicked
    document.addEventListener('click', (e) => {
        if ((e.target.id === 'special') === false) {
            hideFilterItems('special')
        }
        if ((e.target.id === 'platform') === false) {
            hideFilterItems('platform')
        }
        if ((e.target.id === 'genre') === false) {
            hideFilterItems('genre')
        }
    })

    // show filter list
    const showFilterItems = (id) => {
        document.querySelector('#' + id).style.display = 'none'
        document.querySelector('#' + id + 'Items').style.display = 'flex'
    }

    //hide filter list
    const hideFilterItems = (id) => {
        document.querySelector('#' + id).style.display = 'flex'
        document.querySelector('#' + id + 'Items').style.display = 'none'
    }

    // depending which filter is clicked run that function
    const handleFilterClick = (categoryInfo, text, id) => {
        if (id === 'special') {
            handleFilterSpecialCategory(categoryInfo, text)
        } else if (id === 'platform') {
            handleFilterPlatformCategory(categoryInfo, text)
        } else if (id === 'genre') {
            handleFilterGenreCategory(categoryInfo, text)
        }
        hideFilterItems(id)
    }

    return (
        <div
            id="Filters"
            className="flex flex-col lg:flex-row absolute w-[inherit] z-10 sm:w-auto justify-center lg:justify-between xl:justify-center items-center sm:items-start"
        >
            <div className="lg:mr-8 absolute top-1 lg:relative lg:top-0 rounded-lg flex">
                <button
                    className="flex bg-white text-black rounded-lg px-4 py-1 justify-center items-center h-8 w-[14rem]"
                    id="genre"
                    onClick={() => showFilterItems('genre')}
                >
                    <p id="genre">
                        Genre:
                        <span id="genre" className="font-bold">
                            {gameGenre.displayText}
                        </span>
                    </p>
                    <img
                        id="genre"
                        className="h-3 w-3 ml-2"
                        src={DownArrowImg}
                    ></img>
                </button>
                <div
                    className="hidden text-black relative flex-col rounded-xl p-2 bg-white w-[14rem] z-10"
                    id="genreItems"
                >
                    <button
                        className="hover:bg-gray-200 duration-300 rounded-lg px-2 w-full text-left"
                        key="allGenres"
                        id="genre"
                        onClick={() => handleFilterClick('', ' All', 'genre')}
                    >
                        <p>All</p>
                    </button>
                    {ButtonData.Genres.map((item) => {
                        return (
                            <button
                                className="hover:bg-gray-200 duration-300 rounded-lg px-2 w-full text-left"
                                key={item.text}
                                id="genre"
                                onClick={() =>
                                    handleFilterClick(
                                        item.categoryInfo,
                                        item.text,
                                        'genre'
                                    )
                                }
                            >
                                <p>{item.text}</p>
                            </button>
                        )
                    })}
                </div>
            </div>
            <div className="lg:mr-8 top-14 absolute lg:relative lg:top-0 rounded-lg">
                <button
                    className="flex bg-white text-black rounded-lg px-4 py-1 justify-center items-center h-8 w-[14rem]"
                    id="platform"
                    onClick={() => showFilterItems('platform')}
                >
                    <p id="platform">
                        Platform:
                        <span id="platform" className="font-bold">
                            {gamePlatform.displayText}
                        </span>
                    </p>
                    <img
                        id="platform"
                        className="h-3 w-3 ml-2"
                        src={DownArrowImg}
                    ></img>
                </button>
                <div
                    className="hidden text-black relative flex-col rounded-xl p-2 bg-white w-[14rem] z-10"
                    id="platformItems"
                >
                    <button
                        className="hover:bg-gray-200 duration-300 rounded-lg px-2 w-full text-left"
                        key="allPlatforms"
                        id="platform"
                        onClick={() =>
                            handleFilterClick('', ' All', 'platform')
                        }
                    >
                        <p>All</p>
                    </button>
                    {ButtonData.Platforms.map((item) => {
                        return (
                            <button
                                className="hover:bg-gray-200 duration-300 rounded-lg px-2 w-full text-left"
                                key={item.text}
                                id="platform"
                                onClick={() =>
                                    handleFilterClick(
                                        item.categoryInfo,
                                        item.text,
                                        'platform'
                                    )
                                }
                            >
                                <p>{item.text}</p>
                            </button>
                        )
                    })}
                </div>
            </div>

            <div className="lg:mr-8 top-[6.8rem] absolute lg:relative lg:top-0 rounded-lg">
                <button
                    className="flex text-black px-4 py-1 justify-center items-center bg-white rounded-lg h-8 w-[14rem]"
                    id="special"
                    onClick={() => showFilterItems('special')}
                >
                    <p id="special">
                        Order by:
                        <span id="special" className="font-bold">
                            {gameSpecialCategory.displayText}
                        </span>
                    </p>
                    <img
                        id="platform"
                        className="h-3 w-3 ml-2"
                        src={DownArrowImg}
                    ></img>
                </button>

                <div
                    className="hidden text-black relative flex-col rounded-xl p-2 bg-white w-[14rem] z-10"
                    id="specialItems"
                >
                    {ButtonData.Special.map((item) => {
                        return (
                            <button
                                className="hover:bg-gray-200 duration-300 rounded-lg px-2 w-full text-left"
                                key={item.text}
                                id="special"
                                onClick={() =>
                                    handleFilterClick(
                                        item.categoryInfo,
                                        item.text,
                                        'special'
                                    )
                                }
                            >
                                <p>{item.text}</p>
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Filters
