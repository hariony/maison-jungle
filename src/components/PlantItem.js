import React from 'react'
import CareScale from "./CareScale"
import '../styles/PlantItem.css'

function PlantItem({id, cover, name, water, light}) {
    const handleClick = (e) =>{
        //alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
        console.log('andrana e:',e)
    }
    return (
        <li className='lmj-plant-item' onClick={handleClick}>
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
                {name}
                <div>
                    <CareScale careType='water' scaleValue={water} />
                    <CareScale careType='light' scaleValue={light} />
                </div>
        </li>
    )
}

export default PlantItem