import { useParams } from 'react-router-dom'
import { useState } from 'react'
import Library from './Components/Library'
import Home from './Components/Home'
import ErrorPage from './Components/ErrorPage'
import './App.css'

function App() {
    const { name } = useParams()

    return (
        <div>
            {name === 'library' ? (
                <Library />
            ) : name === 'home' ? (
                <Home />
            ) : (
                <ErrorPage />
            )}
        </div>
    )
}

export default App
