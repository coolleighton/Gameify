// toggle the cart on
export const toggleCartOn = async () => {
    document.querySelector('#Cart').style.display = 'block'
    document.querySelector('#Cart').style.opacity = '1'

    // stop user from scrolling the body
    document.querySelector('body').style.position = 'fixed'
    document.querySelector('body').style.overflowY = 'scroll'
}
