import React from 'react';
import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

const quantityLabel = {
    1:'peu',
    2:'modérement',
    3:'beaucoup'
}
function CareScale(props){
    const range = [1,2,3]
    const {careType,scaleValue} = props
    const scaleType =
        careType === 'light' ?
            (<img src={Sun} alt='sun-icon' />)
            :
            (<img src={Water} alt='water-icon' />)

    return(
        <div onClick={()=>alert(`Cette plante requiert ${quantityLabel[scaleValue]} ${careType === 'light' ? 'de lumière' : "d'arrosage"}`)}>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? (
                    <span key={rangeElem.toString()}>{scaleType}</span>
                ) : null
            )}
        </div>
    )
}

export default CareScale;