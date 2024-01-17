import React from 'react'

export const ReviewCard = ({review}) => {
    
  return (
    <div className='reviewCard'>
        <p>ReviewCard:{review.name}</p>
        <span>{review.comment}</span>
    </div>
  )
}
