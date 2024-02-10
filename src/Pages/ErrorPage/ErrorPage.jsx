import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center p-5">
            <h1 className="text-5xl mb-5 text-center">
                Oh no, there has been an error.
            </h1>
            <Link to="/" className="text-xl text-center">
                You can go back to the home page by clicking{' '}
                <span className="text-yellow-500">here</span>.
            </Link>
            <Link to="/library" className="text-xl text-center">
                Or go to the library by clicking{' '}
                <span className="text-yellow-500">here</span>.
            </Link>
        </div>
    )
}

export default ErrorPage
