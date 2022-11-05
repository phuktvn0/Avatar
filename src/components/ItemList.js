import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React from 'react'
import ItemListContent from './ItemListContent';
import { ImgItem } from './styles';

function ItemList({ total, path, set, selected }) {
  let parts = [];
  
	for (let i = 0; i < total; i++) {
		parts.push(
			<ItemListContent path={`${path}/${i+1}`} selected={selected === i} setSelected={() => set(i)}></ItemListContent>


			// <div key={path + i} className={selected === i ? 'selected clickable square' : 'clickable square'} onClick={() => set(i)}>
			// 	<ImgItem src={`/character/${path}/${i + 1}.png`} alt="" />
			// </div>
		);
	};

return (
  <div className="list">{parts}</div>
)
}

export default ItemList
