
import React from "react";
export default function Header(props) {
    function downloadResume(){
        window.open('https://drive.google.com/uc?export=download&id=1DTwnufVudVsvq6ZkWNLeBQ4zLfEL36l5','_black').focus()
    }
    const nameDark = props.darkMode ? 'dark-my-name' : 'my-name'
    const infoDark = props.darkMode ? 'dark-info' : 'info'
    const watermark = props.darkMode ? 'watermark3.png' : 'watermark4.png'
    const Resume = props.darkMode ? 'dark-Resume' : 'Resume'
    return(
    <div>
        <img src={`./images/${watermark}`}className='water-mark' alt=""/>
        <img src={`./images/${props.logo}`}className="logo" alt=""/>
        <div className="card-info">
            <img src="./images/ahmed.png" className="my-pic" alt=""/>
            <div className="name">
                <h1 className={nameDark}>Ahmed khalil</h1>
            <h3 className={infoDark}>Front-End Web Developer</h3>
                <h4 className={infoDark}>From Egypt</h4>
            </div>
        </div>
        <button className={Resume} onClick={downloadResume}>Download Resume</button>
    </div>
)
}
