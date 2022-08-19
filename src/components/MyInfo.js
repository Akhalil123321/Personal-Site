import React from "react";
import {Link} from "react-router-dom";
import DencryptEffect from './DencryptEffect'
export default function Header(props) {
    function downloadResume(){
        window.open('https://drive.google.com/uc?export=download&id=1_ZsO_KUnG1JO_DF2yK95pMXmrj0dXzN0','_black').focus()
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
                <h1 className={nameDark}>
                    <DencryptEffect text='Ahmed khalil'/>
                </h1>
                <h3 className={infoDark}>
                    <DencryptEffect text='Front-End Web Developer'/>
                </h3>
                <h4 className={infoDark}>
                    <DencryptEffect text='From Egypt'/>
                </h4>
            </div>
        </div>
        <div className="btn-container">
            <button className={Resume} onClick={downloadResume}>Download Resume</button>
            <Link to="/MyProjects">
                <button className={Resume} >My Projects</button>
            </Link>
        </div>
    </div>
)
}
