import './Loading.css'

const Loading = ({ increaseSearchAmount, searchAmount }) => {
    function isInViewport(element) {
        const rect = element.getBoundingClientRect()
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
                (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <=
                (window.innerWidth || document.documentElement.clientWidth)
        )
    }

    const box = document.querySelector('#loading')

    document.addEventListener('scroll', function () {
        if (isInViewport(box) === true) {
            increaseSearchAmount(searchAmount)
        }
    })

    return (
        <div id="loading" className="flex justify-center">
            <div className="rounded-2xl bg-gray-500 bg-opacity-20 py-4 px-6 w-36 flex justify-center mb-7">
                <div className="loader"></div>
            </div>
        </div>
    )
}

export default Loading
