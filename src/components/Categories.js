import React from 'react';

//function Categories({categories}){
const Categories = (props) => {

    return (
        <select onChange={(e) => alert(e.target.value)}>
            <option value='-'>-------</option>
            {props.categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
            ))}
        </select>
    )
}
export default Categories;