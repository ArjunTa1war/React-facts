import React from "react"
import ReactDOM from "react-dom"
import Navbar from "./Header"
import MainContent from "./maincontent"
import './index.css'

export default function App() {
    const [darkMode,setDarkMode] = React.useState(true);

    function toggleDarkMode(){
        setDarkMode(prevMode => !prevMode);
    }

    return (
        <div className="container">
            <Navbar 
            darkMode = {darkMode}
            toggleDarkMode = {toggleDarkMode}
            />
            <MainContent darkMode = {darkMode} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))