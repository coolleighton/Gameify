import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './SearchList.css'
import GlobalFunctions from '../../../GlobalFunctions/GlobalFunctions'

const SearchList = ({
    searchData,
    searchActive,
    setIsFadingOut,
    handleCategoryClick,
}) => {
    // display search list when searchList is active
    useEffect(() => {
        const searchListElement = document.querySelector('#searchList')

        // show or hide search list and apply styling depending on if the search field is active
        if (searchActive === true) {
            document.querySelector('#searchList').style.display = 'block'
            document.querySelector('#searchBar').style.borderBottomRightRadius =
                '0'
            document.querySelector('#searchBar').style.borderBottomLeftRadius =
                '0'
            void searchListElement.offsetWidth // Trigger reflow before applying the transition class
            document.querySelector('#searchList').style.opacity = '1'
        } else {
            document.querySelector('#searchList').style.opacity = '0'
            document.querySelector('#searchBar').style.borderBottomRightRadius =
                '0.325rem'
            document.querySelector('#searchBar').style.borderBottomLeftRadius =
                '0.325rem'

            // remove search list from dom
            setTimeout(() => {
                document.querySelector('#searchList').style.display = 'none'
            }, 300)
        }
    }, [searchActive])

    // display loader when loading, display error message if search returns nothing
    useEffect(() => {
        if (!searchData.length > 0) {
            document.querySelector('#searchLoader').style.display = 'none'
            document.querySelector('#searchError').style.display = 'flex'
        } else {
            document.querySelector('#searchLoader').style.display = 'flex'
            document.querySelector('#searchError').style.display = 'none'
        }
    }, [searchData])

    // naigate to game screen when an item form list is clicked
    const navigate = useNavigate()
    const NavigateToGame = async (GameId) => {
        // fill library with the games from that search query
        handleCategoryClick(
            'search',
            document.querySelector('.searchBarInput').value,
            document.querySelector('.searchBarInput').value
        )

        document.querySelector('body').style.opacity = '0'
        await GlobalFunctions.delay(300)
        navigate('/Game/' + GameId, { state: { id: GameId } }) // go to game screen and pass in game data
    }

    return (
        <div
            id="searchList"
            className="hidden sm:px-3 opacity-0 duration-300 absolute -translate-x-1 bg-white h-[40vh] w-full rounded-b-md overflow-y-scroll no-scrollbar"
        >
            <div key="searchList" id="searchListInnerDiv">
                {searchData.length > 0 ? (
                    // Render content when searchData has a value
                    searchData.map((item) => (
                        <button
                            className="w-full p-2 xs:p-3 flex flex-col sm:flex-row items-center mb-1 sm:mb-4 duration-300 hover:bg-gray-200 rounded-xl"
                            key={item.name}
                            onClick={() => NavigateToGame(item.id)}
                        >
                            <img
                                className="w-11/12 sm:w-4/12 rounded-xl h-20 xs:h-28 object-cover mb-1 sm:h-32"
                                src={item.image}
                                alt={item.name}
                            ></img>
                            <p className="text-black text-center text-sm sm:text-xl sm:ml-4">
                                {item.name}
                            </p>
                        </button>
                    ))
                ) : (
                    // Render loading state or other content when searchData is empty
                    <div></div>
                )}
            </div>
            <div
                key="searchLoader"
                id="searchLoader"
                className="mt-28 mb-12 w-6/12 m-auto flex justify-center"
            >
                <div className="searchLoader"></div>
            </div>
            <div
                id="searchError"
                className="mt-28 w-6/12 mx-auto flex justify-center"
            >
                <p className="text-black">Try searching for something else</p>
            </div>
        </div>
    )
}

export default SearchList
