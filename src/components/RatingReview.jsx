import React from 'react'

function RatingReview({ rating, setRating }) {
  const renderStars = () => {
    return [1, 2, 3, 4, 5].map((star) => {
      // Determine if it's a full, half, or empty star
      const isFullStar = rating >= star;
      const isHalfStar = rating >= star - 0.5 && rating < star;

      return (
        <span
          key={star}
          className='star'
          style={{
            cursor: 'pointer',
            fontSize: `30px`,
          }}
          onClick={() => setRating(star)} // Set rating on click
        >
          {/* Full Star */}
          {isFullStar && <span style={{ color: '#FF9700' }}>★</span>}

          {/* Half Star */}
          {isHalfStar && <span style={{ color: '#FF9700' }}>☆</span>}

          {/* Empty Star */}
          {!isFullStar && !isHalfStar && <span style={{ color: 'gray' }}>★</span>}
        </span>
      )
    })
  }

  return (
    <div>
      {renderStars()}
    </div>
  )
}

export default RatingReview;
