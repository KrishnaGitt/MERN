import React from 'react'

export const ReviewCard = ({review}) => {
    
  return (
    <div className='reviewCard'>
        <p>ReviewCard:{review.name}<span>{review._id}</span></p>
    </div>
  )
}
