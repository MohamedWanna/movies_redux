import React, { useState } from "react";
import { Rating } from 'react-simple-star-rating';
import {useDispatch} from 'react-redux'
import { addMovie } from "../js/actions";

const AddMovie = ({ handleadd }) => {
  const dispatch = useDispatch()
  const [form, setForm] = useState({
      title:"",description:"",poster:'',trailer:""
  })
  const handleSubmit = (e) => { 
      e.preventDefault();
      const newmovie={title:"",description:"",poster:'',trailer:"",done:false,rate:rating,id: Math.random()}
      dispatch(addMovie(newmovie))
      handleadd({...form,done:false,id: Math.random(),rate:rating})
      
      setForm({
        title:"",description:"",poster:'',rate:null,trailer:""
    })
    console.log(form)

   }
  const handleChange = (e) => { 
      setForm({...form,[e.target.name]:e.target.value})
   }
   const [rating, setRating] = useState(0) // initial rating value

   // Catch Rating value
   const handleRating = (rate) => {
     setRating(rate)
     // other logic
   }
  return (

          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <label htmlFor="">Title:</label>
              <input type="text" onChange={handleChange} name="title"required />
              <label htmlFor="">Description:</label>
              <input type="text"onChange={handleChange} name="description"requiired />
              <label htmlFor="">Poster:</label>
              <input type="url"onChange={handleChange} name="poster" required/>
              <label htmlFor="">Trailer:</label>
              <input type="url"onChange={handleChange} name="trailer" required/>
              <label htmlFor="">Rating:</label>
              <Rating onClick={handleRating} ratingValue={rating} /* Available Props */ />
              <button className="submit">submit</button>
            </form>
          </div>

    
  );
};

export default AddMovie;
