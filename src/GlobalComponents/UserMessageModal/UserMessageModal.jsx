import GlobalFunctions from '../../GlobalFunctions/GlobalFunctions'

const UserMessageModal = ({ title, message, classID }) => {
    const CloseModal = async () => {
        document.querySelector('#' + classID).style.opacity = '0'
        await GlobalFunctions.delay(300)
        document.querySelector('#' + classID).style.display = 'none'
    }
    return (
        <div
            id={classID}
            className={`${classID} hidden fixed inset-0 w-screen h-screen backdrop-blur-sm z-50 duration-300 opacity-0`}
        >
            <div className="bg-gray-900 rounded-xl w-11/12 sm:w-8/12 lg:w-5/12 xl:w-3/12 mx-auto mt-[40vh] p-5">
                <h1 className="text-2xl mb-2 font-bold">{title}</h1>
                <p>{message}</p>
                <div className="w-full flex justify-end">
                    <button
                        onClick={() => CloseModal()}
                        className="mt-5 py-1 px-3 bg-gray-700 rounded-xl hover:bg-gray-500 duration-300"
                    >
                        Understood
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UserMessageModal
