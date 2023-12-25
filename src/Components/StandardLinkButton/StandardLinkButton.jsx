import './StandardLinkButton.css'

const LibraryButton = ({ whiteIcon, blackIcon, text, style, textStyle }) => {
    // handles when the mouse enters the button
    const HandleCategoryMouseEnter = (target) => {
        // hides white image
        target.children[1].style.opacity = '1'
        target.children[0].style.opacity = '0'
    }

    // handles when the mouse Leaves the button
    const HandleCategoryMouseLeave = (target) => {
        // hides black image
        target.children[1].style.opacity = '0'
        target.children[0].style.opacity = '1'
    }

    // renders button
    return (
        <button
            className="categoryButton flex flex-row items-center my-2 hover:cursor-pointer py-2"
            onMouseEnter={(e) => HandleCategoryMouseEnter(e.currentTarget)}
            onMouseLeave={(e) => HandleCategoryMouseLeave(e.currentTarget)}
        >
            <img
                className="categoryButtonImg w-10 p-2 bg-gray-500 bg-opacity-30 rounded-md duration-500"
                style={style}
                src={whiteIcon}
            ></img>
            <img
                className="categoryButtonImg opacity-0 w-10 p-2 bg-gray-500 bg-opacity-30 rounded-md duration-500"
                style={style}
                src={blackIcon}
            ></img>
            <p className="pl-12 font-semibold" style={textStyle}>
                {text}
            </p>
        </button>
    )
}

export default LibraryButton
