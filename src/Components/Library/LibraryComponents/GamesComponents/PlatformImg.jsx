import WindowsWhiteImg from '../../../../assets/PlatformImages/WindowsWhiteImg.png'
import XboxWhiteImg from '../../../../assets/PlatformImages/XboxWhiteImg.png'
import PlaystationWhiteImg from '../../../../assets/PlatformImages/PlaystationWhiteImg.png'
import IosWhiteImg from '../../../../assets/PlatformImages/IosWhiteImg.png'
import AndroidWhiteImg from '../../../../assets/PlatformImages/AndroidWhiteImg.png'
import LinuxWhiteImg from '../../../../assets/PlatformImages/LinuxWhiteImg.png'
import MacWhiteImg from '../../../../assets/PlatformImages/MacWhiteImg.png'
import NintendoWhiteImg from '../../../../assets/PlatformImages/NintendoWhiteImg.png'
import WebWhiteImg from '../../../../assets/PlatformImages/WebWhiteImg.png'

const PlatformImg = (platform) => {
    let imageSrc = ''
    if (platform.platform === 'pc') {
        imageSrc = WindowsWhiteImg
    } else if (platform.platform === 'xbox') {
        imageSrc = XboxWhiteImg
    } else if (platform.platform === 'playstation') {
        imageSrc = PlaystationWhiteImg
    } else if (platform.platform === 'ios') {
        imageSrc = IosWhiteImg
    } else if (platform.platform === 'android') {
        imageSrc = AndroidWhiteImg
    } else if (platform.platform === 'mac') {
        imageSrc = MacWhiteImg
    } else if (platform.platform === 'linux') {
        imageSrc = LinuxWhiteImg
    } else if (platform.platform === 'nintendo') {
        imageSrc = NintendoWhiteImg
    } else if (platform.platform === 'web') {
        imageSrc = WebWhiteImg
    } else {
        console.log(platform, 'platform image not found')
    }

    return <img className="h-5 mr-1" src={imageSrc}></img>
}

export default PlatformImg
