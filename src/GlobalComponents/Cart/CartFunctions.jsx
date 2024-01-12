// toggle the cart on
export const toggleCartOn = async () => {
    const delay = (ms) => new Promise((res) => setTimeout(res, ms))

    document.querySelector('#Cart').style.display = 'block'

    // stop user from scrolling the body
    document.querySelector('body').style.overflowY = 'clip'
    await delay(50)
    // show cart
    document.querySelector('#Cart').style.opacity = '1'
}
