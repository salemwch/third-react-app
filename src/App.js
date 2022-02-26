import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Navbar from "./Components/Profile/Navbar.js";
import Card from "./Cards/CardUi.js";
import ProfilePhoto from "./Components/Profile/ProfilePhoto.js";
import Fullname from "./Components/Profile/FullName.js";
import Address from "./Components/Profile/Address.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
    const [name] = useState("");
    return (
    <div className="App">
    <Navbar />
    <div>
        <h1 className="title-a">
        Hello You Can See
        <span
            style={{ color: "red", fontWeight: "bold", marginLeft: "10px" }}
        >
            <Typewriter
                loop
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deletSpeed={50}
                delaySpeed={1000}
                words={[" My Cards Design Here "]}
            />
            </span>
            <p>{name}</p>
        </h1>
        </div>
        <div className="content">
        <Card />
        <Card />
        <Card />
        </div>
        <div className="cont">
        <Card />
        <Card />
        <Card />
        </div>
        <div className="section-7">
        <Fullname />
        <ProfilePhoto />
        <Address />
        </div>
    </div>
    );
};

export default App;
