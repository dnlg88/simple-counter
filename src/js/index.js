//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
const Container = (props) => {
    return (
        <div className="container col-6 mt-2">
            <nav className="navbar navbar-dark bg-dark">
                <div id="timer" className="container d-flex text-white px-5">
                    <div className="rounded-4" id="clock"><i class="far fa-clock"></i></div>
                    <div className="rounded-4">{props.digitSix}</div>
                    <div className="rounded-4">{props.digitFive}</div>
                    <div className="rounded-4">{props.digitFour}</div>
                    <div className="rounded-4">{props.digitThree}</div>
                    <div className="rounded-4">{props.digitTwo}</div>
                    <div className="rounded-4">{props.digitOne}</div>
                </div>
            </nav>
        </div>
        );
    };

let counter = 0
setInterval(()=>{
    let six = Math.floor(counter/100000) % 10
    let five = Math.floor(counter/10000) % 10
    let four = Math.floor(counter/1000) % 10
    let three = Math.floor(counter/100) % 10
    let two = Math.floor(counter/10) % 10
    let one = Math.floor(counter) % 10
    counter++
    ReactDOM.render(<Container digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six} />, document.querySelector("#app"))
}, 1000)

//render your react application
