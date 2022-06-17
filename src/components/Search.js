import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { Rating } from 'react-simple-star-rating';
import { filterbyname } from '../js/actions';


const Search = () => {
const dispatch = useDispatch();
const searchName = useSelector(state=>state.searchName);
    return (
    <div className="header-container">
        <div>
            <input value={searchName} onChange={(e)=>dispatch(filterbyname(e.target.value))} className="inputsearch" type="text" placeholder="Enter a movie to search..." />
            
        </div>
    </div>
    
    );
};

export default Search;
