/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
export default function BackGround(){
    return(
    <div className="contacts">
        <a 
        href="https://mail.google.com/mail/u/0/#inbox?compose=jrjtWvNBjqlqKVQjmnrjdQkflQqmQNJxLwSwrPvTMMnbVlXLjqFcsMDrQDwzxMtpFcprxcxG" 
        target='_blank' 
        className="contact-back"
        >
            <img src="../images/gmail.png" className="contact-icon" alt=""/>
        </a>
        <a 
        href="https://www.linkedin.com/in/ahmed-khalil8" 
        target='_blank' 
        className="contact-back"
        >
            <img src="../images/linkedin.png" className="contact-icon" alt=""/>
        </a>
        <a 
        href="https://github.com/Akhalil123321" 
        target='_blank' 
        className="contact-back"
        >
            <img src="../images/github.png" className="contact-icon large" alt=""/>
        </a>
        <a 
        href="https://stackoverflow.com/users/19625208/ahmed-khalil" 
        target='_blank' 
        className="contact-back"
        >
            <img src="../images/stackoverflow.png" className="contact-icon" alt=""/>
        </a>
        <a 
        href="https://t.me/Akhalil12" 
        target='_blank' 
        className="contact-back"
        >
            <img src="../images/telegram.png" className="contact-icon large" alt=""/>
        </a>
        <a 
        href="https://www.facebook.com/ahme.khalil.7/" 
        target='_blank' 
        className="contact-back"
        >
            <img src="../images/face.png" className="contact-icon large" alt=""/>
        </a>
    </div>
    )
}
