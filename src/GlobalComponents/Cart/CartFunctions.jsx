// toggle the cart on
export const toggleCartOn = async () => {
    const delay = (ms) => new Promise((res) => setTimeout(res, ms))

    document.querySelector('#Cart').style.display = 'block'

    if (window.innerWidth > 640) {
        // stop user from scrolling the body on anything bigger than mobile
        document.querySelector('body').style.overflowY = 'clip'
    }

    await delay(50)
    // show cart
    document.querySelector('#Cart').style.opacity = '1'
}
