import { useEffect } from 'react'
import './SearchList.css'

const SearchList = ({ searchData, searchActive }) => {
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

    return (
        <div
            id="searchList"
            className="hidden p-3 opacity-0 duration-300 absolute -translate-x-1 bg-white h-[40vh] w-full rounded-b-md overflow-y-scroll no-scrollbar"
        >
            <div key="searchList" id="searchListInnerDiv">
                {searchData.length > 0 ? (
                    // Render content when searchData has a value
                    searchData.map((item) => (
                        <button
                            className="w-full p-3 flex items-center mb-4 duration-300 hover:bg-gray-200 p-2 rounded-xl"
                            key={item.name}
                        >
                            <img
                                className=" w-4/12 rounded-xl h-32 object-cover"
                                src={item.image}
                                alt={item.name}
                            ></img>
                            <p className="text-black text-xl ml-4">
                                {item.name}
                            </p>
                        </button>
                    ))
                ) : (
                    // Render loading state or other content when searchData is empty
                    <div className="mt-32 mb-64 w-6/12 m-auto flex justify-center">
                        <p className="text-black">
                            Try searching for something else
                        </p>
                    </div>
                )}
            </div>
            <div
                key="searchLoader"
                className="mt-28 pb-28 w-6/12 m-auto flex justify-center"
            >
                <div className="searchLoader"></div>
            </div>
        </div>
    )
}

export default SearchList
