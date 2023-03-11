import React from "react"
import ReactDOM from "react-dom"
import './index.css';
import Header from "./Header";
import Footer from "./footer";
import MainContent from "./maincontent";

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))