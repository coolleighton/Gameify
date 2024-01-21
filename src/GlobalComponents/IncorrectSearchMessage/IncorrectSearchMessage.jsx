const IncorrectSearchMessage = () => {
    const CloseModal = () => {
        document.querySelector('#modal').style.display = 'none'
    }
    return (
        <div
            id="modal"
            className="hidden fixed inset-0 w-screen h-screen backdrop-blur-sm z-50"
        >
            <div className="bg-gray-900 rounded-xl w-3/12 mx-auto mt-[40vh] p-5">
                <h1 className="text-2xl mb-2 font-bold">No games found</h1>
                <p>
                    Sorry, but no games were found with this set of search
                    criteria. Please try searching for something else or try
                    removing filters.
                </p>
                <div className="w-full flex justify-end">
                    <button
                        onClick={CloseModal}
                        className="mt-5 py-1 px-3 bg-gray-700 rounded-xl hover:bg-gray-500 duration-300"
                    >
                        Understood
                    </button>
                </div>
            </div>
        </div>
    )
}

export default IncorrectSearchMessage
