/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import {Link} from "react-router-dom";
import DencryptEffect from '../components/DencryptEffect'
import Data from '../data/data'
export default function MyProjects(){
const project = Data.map(items => {
    return(
        <section className='card-one'>
                <a href={items.projectURL}target="_blank" className='image-cont'>
                    <img 
                    src={`./images/projects/${items.porjectPicture}`} 
                    alt="" 
                    className='project-image' 
                    title={items.title}
                    />
                </a>
                <h1 className='project-name'><DencryptEffect text={items.projectName}/></h1>
        </section>
    )
})
return(
    <div className='my-projects-cont'>
        {/* <img src='./images/watermark3.png' className='water-mark' alt=""/> */}
        <div>
            <Link to='/'>
            <img src='./images/png 3.png' className="my-projects-logo" alt=""/>
            </Link>
        </div>
        <div className='card-cont'>
            {project}
        </div>
    </div>
)}