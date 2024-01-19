import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './SearchList.css'

const SearchList = ({ searchData, searchActive, inputValue }) => {
    // Navigate to a new page with a transition
    const navigate = useNavigate()
    const navigateToWithDelay = () => {
        // hide page with a transition
        document.querySelector('body').style.transitionDuration = '0.8s'
        document.querySelector('body').style.opacity = '0'

        // navigate to page after 0.8s, show page then remove transition effects.
        setTimeout(() => {
            setSearchAmount(12)
            navigate('./Library')
            document.querySelector('body').style.opacity = '1'
            document.querySelector('body').style.transitionDuration = '0'
        }, 800)
    }

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Enter' && inputValue) {
            console.log(document.querySelector('#searchBar'))
            console.log('enter pressed while search active')
        }
    })

    // display search list when searchList is active
    useEffect(() => {
        const searchListElement = document.querySelector('#searchList')

        if (searchActive === true) {
            document.querySelector('#searchList').style.display = 'block'
            document.querySelector('#searchBar').style.borderBottomRightRadius =
                '0'
            document.querySelector('#searchBar').style.borderBottomLeftRadius =
                '0'
            // Trigger reflow before applying the transition class
            void searchListElement.offsetWidth
            document.querySelector('#searchList').style.opacity = '1'
        } else {
            document.querySelector('#searchList').style.opacity = '0'
            document.querySelector('#searchBar').style.borderBottomRightRadius =
                '0.325rem'
            document.querySelector('#searchBar').style.borderBottomLeftRadius =
                '0.325rem'
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
                        >
                            <img
                                className=" sm:w-4/12 rounded-xl h-20 xs:h-28 object-cover mb-1 sm:h-32"
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
