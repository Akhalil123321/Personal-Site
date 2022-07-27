
import React from "react";
export default function Header() {
    function downloadResume(){
        window.open('https://drive.google.com/uc?export=download&id=1_XbBa01ivowO6pf-JM35TWAh2GAup82m','_black').focus()
    }
    return(
    <div>
        <img src="./images/watermark3.png" className="water-mark" alt=""/>
        <img src="./images/png 3.png" className="logo" alt=""/>
        <div className="card-info">
            <img src="./images/ahmed.png" className="my-pic" alt=""/>
            <div className="name">
                <h1>Ahmed khalil</h1>
                <h3 className="info">Front-End Web Developer</h3>
                <h4 className="info">From Egypt</h4>
            </div>
        </div>
        <button className="Resume" onClick={downloadResume}>Download Resume</button>
    </div>
)
}
// import { Link } from "react-router-dom";
/* <Link to="/Main" className='logo-img'></Link> */