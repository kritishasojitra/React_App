import React, { useState, useEffect } from 'react';
import './Thempage.css';

const Thempage = () => {

    const [color, setColor] = useState(sessionStorage.getItem('bgColor') || 'white');
    const [language, setLanguage] = useState('en');


    useEffect(() => {
      document.body.style.backgroundColor = color;
      sessionStorage.setItem('bgColor', color);
    }, [color]);
    
    const handleColorChange = (e) => {
      setColor(e.target.value);
    };

    const textColor = color === 'black' ? 'white' : 'black';

    useEffect(()=>{
        const savedLanguage = localStorage.getItem('language') || 'en';
        setLanguage(savedLanguage);
    
    },[])
    const changeLanguage = (lang) => {
        setLanguage(lang);
        localStorage.setItem('language', lang);
      };
    

   return(
    <>
    <div className="them1">
        <div className="nav-bar" style={{ color: textColor }}>
            <p>{language === 'en' ? 'Gmail' : 'जीमेल लगीं'}</p>
            <p>{language === 'en' ? 'Images' : 'इमेजिस'}</p>
            <p style={{ width:"35px", height:"35px", display:"flex",justifyContent:"center",alignItems:"center", borderRadius:"50px",background:"green",color:"white"}}>{language === 'en' ? 'k' : 'क'}</p>
        </div>
        <div className="header-bar">
            <div className="header1">
                <span style={{color:"#3FA2F6"}}>{language === 'en' ? 'G' : 'गू'}</span>
                <span style={{color:"#C40C0C"}}>{language === 'en' ? 'o' : ''}</span>
                <span style={{color:"#FFC100"}}>{language === 'en' ? 'o' : ''}</span>
                <span style={{color:"#3FA2F6"}}>{language === 'en' ? 'g' : ''}</span>
                <span style={{color:"green"}}>{language === 'en' ? 'l' : 'ग'}</span>
                <span style={{color:"#C40C0C"}}>{language === 'en' ? 'e' : 'ल'}</span>
            </div>
            <div className="input1">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text"/>
            </div>
            <div className="btn1">
            <button>{language === 'en' ? 'google search' : 'गूगल खोज'}</button>
            <button>{language === 'en' ? 'i am Feeling Lucky' : 'मैं भाग्यशाली महसूस कर रहा हूँ'}</button>
            </div>
        </div>
        <div className="footer">
        <label htmlFor="colorSelect" style={{ color: textColor }} >{language === 'en' ? 'Thems' : 'थीम्स'}</label>
         <select id="colorSelect" value={color} onChange={handleColorChange}>
        <option value="white">{language === 'en' ? 'white' : 'सफ़ेद'}</option>
       <option value="black">{language === 'en' ? 'black' : 'काला'}</option>
     </select>
        <button onClick={() => changeLanguage('en')} className='button1'>English</button>
        <button onClick={() => changeLanguage('es')} className='button1'>हिंदी</button>
        </div>
    </div>
    </>
   )
  
};

export default Thempage;



