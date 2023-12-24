import '../ComponentStyles/Library.css'
import Header from './Header.jsx'
import GridWhiteImg from '../assets/GridWhiteImg.png'
import GridBlackImg from '../assets/GridBlackImg.png'
import { useState } from 'react'

const Library = () => {
    const HandleCategoryMouseEnter = (target) => {
        console.log(target.children[0])
        target.children[1].style.opacity = '1'
        target.children[0].style.opacity = '0'
    }

    const HandleCategoryMouseLeave = (target) => {
        console.log(target.children[0])
        target.children[1].style.opacity = '0'
        target.children[0].style.opacity = '1'
    }

    return (
        <div>
            <Header></Header>
            <div className="ml-7">
                <div className="bg-gray-500 bg-opacity-10 w-52 px-4 py-2 rounded">
                    <h1 className="text-3xl font-bold">Your Games</h1>
                    <button
                        className="categoryButton flex flex-row items-center mt-5 mb-6 hover:cursor-pointer"
                        onMouseEnter={(e) =>
                            HandleCategoryMouseEnter(e.currentTarget)
                        }
                        onMouseLeave={(e) =>
                            HandleCategoryMouseLeave(e.currentTarget)
                        }
                    >
                        <img
                            className="categoryButtonImg w-10 p-2 bg-gray-500 bg-opacity-30 rounded-md duration-500"
                            src={GridWhiteImg}
                        ></img>
                        <img
                            className="categoryButtonImg opacity-0 w-10 p-2 bg-gray-500 bg-opacity-30 rounded-md duration-500"
                            src={GridBlackImg}
                        ></img>
                        <p className="pl-14">Added Games</p>
                    </button>
                    <button
                        className="categoryButton flex flex-row items-center mt-5 mb-6 hover:cursor-pointer"
                        onMouseEnter={(e) =>
                            HandleCategoryMouseEnter(e.currentTarget)
                        }
                        onMouseLeave={(e) =>
                            HandleCategoryMouseLeave(e.currentTarget)
                        }
                    >
                        <img
                            className="categoryButtonImg w-10 p-2 bg-gray-500 bg-opacity-30 rounded-md duration-500"
                            src={GridWhiteImg}
                        ></img>
                        <img
                            className="categoryButtonImg opacity-0 w-10 p-2 bg-gray-500 bg-opacity-30 rounded-md duration-500"
                            src={GridBlackImg}
                        ></img>
                        <p className="pl-14">Added Games</p>
                    </button>
                    <button
                        className="categoryButton flex flex-row items-center mt-5 mb-6 hover:cursor-pointer"
                        onMouseEnter={(e) =>
                            HandleCategoryMouseEnter(e.currentTarget)
                        }
                        onMouseLeave={(e) =>
                            HandleCategoryMouseLeave(e.currentTarget)
                        }
                    >
                        <img
                            className="categoryButtonImg w-10 p-2 bg-gray-500 bg-opacity-30 rounded-md duration-500"
                            src={GridWhiteImg}
                        ></img>
                        <img
                            className="categoryButtonImg opacity-0 w-10 p-2 bg-gray-500 bg-opacity-30 rounded-md duration-500"
                            src={GridBlackImg}
                        ></img>
                        <p className="pl-14">Added Games</p>
                    </button>
                    <button
                        className="categoryButton flex flex-row items-center mt-5 mb-6 hover:cursor-pointer"
                        onMouseEnter={(e) =>
                            HandleCategoryMouseEnter(e.currentTarget)
                        }
                        onMouseLeave={(e) =>
                            HandleCategoryMouseLeave(e.currentTarget)
                        }
                    >
                        <img
                            className="categoryButtonImg w-10 p-2 bg-gray-500 bg-opacity-30 rounded-md duration-500"
                            src={GridWhiteImg}
                        ></img>
                        <img
                            className="categoryButtonImg opacity-0 w-10 p-2 bg-gray-500 bg-opacity-30 rounded-md duration-500"
                            src={GridBlackImg}
                        ></img>
                        <p className="pl-14">Added Games</p>
                    </button>
                    <button
                        className="categoryButton flex flex-row items-center mt-5 mb-6 hover:cursor-pointer"
                        onMouseEnter={(e) =>
                            HandleCategoryMouseEnter(e.currentTarget)
                        }
                        onMouseLeave={(e) =>
                            HandleCategoryMouseLeave(e.currentTarget)
                        }
                    >
                        <img
                            className="categoryButtonImg w-10 p-2 bg-gray-500 bg-opacity-30 rounded-md duration-500"
                            src={GridWhiteImg}
                        ></img>
                        <img
                            className="categoryButtonImg opacity-0 w-10 p-2 bg-gray-500 bg-opacity-30 rounded-md duration-500"
                            src={GridBlackImg}
                        ></img>
                        <p className="pl-14">Added Games</p>
                    </button>
                    <button
                        className="categoryButton flex flex-row items-center mt-5 mb-6 hover:cursor-pointer"
                        onMouseEnter={(e) =>
                            HandleCategoryMouseEnter(e.currentTarget)
                        }
                        onMouseLeave={(e) =>
                            HandleCategoryMouseLeave(e.currentTarget)
                        }
                    >
                        <img
                            className="categoryButtonImg w-10 p-2 bg-gray-500 bg-opacity-30 rounded-md duration-500"
                            src={GridWhiteImg}
                        ></img>
                        <img
                            className="categoryButtonImg opacity-0 w-10 p-2 bg-gray-500 bg-opacity-30 rounded-md duration-500"
                            src={GridBlackImg}
                        ></img>
                        <p className="pl-14">Added Games</p>
                    </button>
                    <button
                        className="categoryButton flex flex-row items-center mt-5 mb-6 hover:cursor-pointer"
                        onMouseEnter={(e) =>
                            HandleCategoryMouseEnter(e.currentTarget)
                        }
                        onMouseLeave={(e) =>
                            HandleCategoryMouseLeave(e.currentTarget)
                        }
                    >
                        <img
                            className="categoryButtonImg w-10 p-2 bg-gray-500 bg-opacity-30 rounded-md duration-500"
                            src={GridWhiteImg}
                        ></img>
                        <img
                            className="categoryButtonImg opacity-0 w-10 p-2 bg-gray-500 bg-opacity-30 rounded-md duration-500"
                            src={GridBlackImg}
                        ></img>
                        <p className="pl-14">Added Games</p>
                    </button>
                    <button
                        className="categoryButton flex flex-row items-center mt-5 mb-6 hover:cursor-pointer"
                        onMouseEnter={(e) =>
                            HandleCategoryMouseEnter(e.currentTarget)
                        }
                        onMouseLeave={(e) =>
                            HandleCategoryMouseLeave(e.currentTarget)
                        }
                    >
                        <img
                            className="categoryButtonImg w-10 p-2 bg-gray-500 bg-opacity-30 rounded-md duration-500"
                            src={GridWhiteImg}
                        ></img>
                        <img
                            className="categoryButtonImg opacity-0 w-10 p-2 bg-gray-500 bg-opacity-30 rounded-md duration-500"
                            src={GridBlackImg}
                        ></img>
                        <p className="pl-14">Added Games</p>
                    </button>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Library
