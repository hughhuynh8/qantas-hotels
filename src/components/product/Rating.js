import React from 'react'

const Rating = ({ score, type }) => {
  const stars = []
  const icon = (type === "star") ? <span className='fill'>&#9733;</span> : <span className='fill'>&#9679;</span>
  const empty = (type === "star") ? <span className='empty'>&#9733;</span> : <span className='empty'>&#9679;</span>

  for(let i=0; i < 5; i++){
    if(i >= score) {
      stars.push(empty)
    }
    else {
      stars.push(icon)
    }
  }
  return (
    <div style={{ display: 'inline', color: 'yellow' }}>
      {stars}
    </div>
  )
}

export default Rating