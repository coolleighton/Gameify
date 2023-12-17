import { Link } from 'react-router-dom'

import './App.css'

function App() {
    return (
        <div>
            <h1 className="text-red-800">
                Hello from the main page of the app!
            </h1>
            <p>Here are some examples of links to other pages</p>
            <nav>
                <ul>
                    <li>
                        <Link to="Profile" className="text-red-800">
                            Profile page
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default App
