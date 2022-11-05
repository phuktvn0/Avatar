import React from 'react'
import { ImgItem, ItemListContentStyleComponent, ItemListContentStyleComponentSelected } from './styles';


function ItemListContent({path, selected, setSelected}) {
  
  return selected ? 
(
      <ItemListContentStyleComponentSelected key={path} onClick={setSelected}>
				<ImgItem src={`/character/${path}.png`} alt="" />
			</ItemListContentStyleComponentSelected>
  )
: (
      <ItemListContentStyleComponent key={path} onClick={setSelected}>
				<ImgItem src={`/character/${path}.png`} alt="" />
			</ItemListContentStyleComponent>
  )
}

export default ItemListContent
