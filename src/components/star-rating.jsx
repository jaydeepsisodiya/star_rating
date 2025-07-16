import React, { useState } from 'react'

const StarRating = ({rating,onChange=()=>{},size}) => {
    const [hoveredRating,setHoverRating]=useState(0)
    const handleStarHover=(hoveredRating)=>{
    setHoverRating(hoveredRating)
    }
  return (
    <div className='star-rating'>
     {Array(size).fill("").map((_,index)=>{
        const starValue=index+1
        let starClass="star";
        if(hoveredRating>=starValue){
          starClass +=' hover'
        }
        else if(rating>=starValue) {
          starClass+=" active"
        }
        
        return <span key={index} className={starClass} onMouseEnter={()=>handleStarHover(starValue)}  onMouseLeave={()=>handleStarHover(0)} onClick={()=>onChange(starValue)}>&#9733;</span>
     })}
    </div>
  )
}

export default StarRating
