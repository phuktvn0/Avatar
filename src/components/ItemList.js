import React from 'react'

function ItemList({ total, path, set, selected }) {
  let parts = [];
	for (let i = 0; i < total; i++) {
		parts.push(
			<div key={path + i} className={selected === i ? 'selected clickable square' : 'clickable square'} onClick={() => set(i)}>
				<img src={`/character/${path}/${i + 1}.png`} alt="" className="img-center height60 top50" />
			</div>
		);
	};

return (
  <div className="list">{parts}</div>
)
}

export default ItemList
