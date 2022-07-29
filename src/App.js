import React from 'react';
import MyInfo from './components/MyInfo'
import Contact from './components/Contact'
import './index.css'
export default function App(){
const [darkMode,setDarkmode]=React.useState(true)
const logo = darkMode ? 'png 3.png':'png 4.png'
const contClass = darkMode ? 'dark-all-cont':'all-cont'
function changeTheme(){
    setDarkmode(prevDarkmode=>!prevDarkmode)
}
return(
    <div className={contClass}>
        <MyInfo darkMode={darkMode} logo={logo}/>
        <Contact darkMode={darkMode} changeTheme={changeTheme}/>
    </div>
)}