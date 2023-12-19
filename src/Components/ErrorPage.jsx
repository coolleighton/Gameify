import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div>
            <h1>Oh no, this route doesn't exist!</h1>
            <Link to="/">
                You can go back to the home page by clicking here, though!
            </Link>
            <Link to="/library">Or go to the library by clicking here.</Link>
        </div>
    )
}

export default ErrorPage
