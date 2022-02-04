import React,{useState,useEffect} from 'react';
import '../styles/Footer.css'

function Footer({cart}){
    const [inputValue, setInputValue] = useState('')
    const handleInput = (e) => {
        setInputValue(e.target.value)
    }

    const handleBlur = () => {
        if(!inputValue.includes('@')){
            alert("Attention, il n'y a pas d'@, ceci n'est pas une adress mail valide")
        }
    }
    return(
        <footer className='lmj-footer'>
            <div className='lmj-footer'>
                Pour les passionné·e·s de plantes 🌿🌱🌵
            </div>
            <div className='lmj-footer-elem'>
                Laissez-nous votre mail : {inputValue}
            </div>
            <input
                placeholder='Entrez votre mail'
                onChange={handleInput}
                value={inputValue}
                onBlur={handleBlur}
            />
        </footer>
    )
}

export default Footer;