import React from 'react';
import './search-box.style.css';

const SearchField = ({placeholder,handleChange}) => {
    return (
        <input  className='search'
        onChange={handleChange} 
        type='search' 
        placeholder={placeholder}/>
    );
};

export default SearchField;