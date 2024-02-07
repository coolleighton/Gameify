import './Loading.css'

const Loading = () => {
    // loading animation
    return (
        <div id="loading" className="flex justify-center">
            <div className="rounded-2xl bg-gray-500 bg-opacity-20 py-4 px-6 w-36 flex justify-center mb-7">
                <div className="loader"></div>
            </div>
        </div>
    )
}

export default Loading
