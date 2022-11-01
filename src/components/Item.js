import React from 'react'

function Item({path, index, zIndex}) {
  return (
   
      <img className='width position' src={`/character/${path}/${index + 1}.png`} alt="" style={{ zIndex }} />
    
  )
}

export default Item
