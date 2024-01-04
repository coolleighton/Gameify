import CloseImgWhite from '../../../assets/CloseImgWhite.png'

const Cart = ({ cart, clearCart }) => {
    const toggleCartOff = async () => {
        const delay = (ms) => new Promise((res) => setTimeout(res, ms))

        // re-enable body scrolling
        document.querySelector('body').style.position = 'static'
        document.querySelector('body').style.overflowY = 'auto'

        document.querySelector('#Cart').style.opacity = '0'
        await delay(500)
        document.querySelector('#Cart').style.display = 'none'
    }

    return (
        <div
            id="Cart"
            className="hidden opacity-0 fixed w-screen h-screen backdrop-brightness-50 z-50 top-0 right-0 duration-300"
        >
            <div className="fixed bg-[#04020b] h-screen top-0 right-0 w-2/12 z-50">
                <div className="fixed flex flex-col justify-between h-screen bg-gray-500 bg-opacity-20 w-2/12">
                    <div className="flex justify-between pt-8 pb-4 px-8">
                        <h2 className="text-2xl font-bold">4 Games</h2>
                        <button onClick={() => toggleCartOff()}>
                            <img className="w-8" src={CloseImgWhite}></img>
                        </button>
                    </div>
                    <div className="h-[80vh] top-20 absolute overflow-y-scroll no-scrollbar mx-8">
                        {cart.map((item) => {
                            return (
                                <div className="bg-gray-500 bg-opacity-20 my-5 rounded-xl ">
                                    <img
                                        className="rounded-t-xl"
                                        src={item.image}
                                    ></img>
                                    <div className="p-2">
                                        <p>{item.name}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        <button onClick={() => clearCart()}>Clear</button>
                    </div>
                </div>
            </div>
            <div className=""></div>
        </div>
    )
}

export default Cart
