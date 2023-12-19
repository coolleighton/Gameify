import { Link } from 'react-router-dom'
import Header from './Header.jsx'

const Library = () => {
    return (
        <div>
            <Header></Header>
            <Link to="/">Click here to go to the home page</Link>
        </div>
    )
}

export default Library
