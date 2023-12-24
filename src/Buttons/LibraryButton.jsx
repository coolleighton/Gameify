import '../Buttons/LibraryButton.css'

const LibraryButton = ({ whiteIcon, blackIcon, text }) => {
    const HandleCategoryMouseEnter = (target) => {
        target.children[1].style.opacity = '1'
        target.children[0].style.opacity = '0'
    }

    const HandleCategoryMouseLeave = (target) => {
        target.children[1].style.opacity = '0'
        target.children[0].style.opacity = '1'
    }

    return (
        <button
            className="categoryButton flex flex-row items-center mt-5 mb-6 hover:cursor-pointer"
            onMouseEnter={(e) => HandleCategoryMouseEnter(e.currentTarget)}
            onMouseLeave={(e) => HandleCategoryMouseLeave(e.currentTarget)}
        >
            <img
                className="categoryButtonImg w-10 p-2 bg-gray-500 bg-opacity-30 rounded-md duration-500"
                src={whiteIcon}
            ></img>
            <img
                className="categoryButtonImg opacity-0 w-10 p-2 bg-gray-500 bg-opacity-30 rounded-md duration-500"
                src={blackIcon}
            ></img>
            <p className="pl-12 font-semibold">{text}</p>
        </button>
    )
}

export default LibraryButton
