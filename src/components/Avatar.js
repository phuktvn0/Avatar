import React from 'react'
import Item from './Item'


function Avatar({ body, eyes, hats, clothes1, clothes2, clothes3, mouth, glasses }) {
  return (
    <div>
        <div className="avatar">
			<Item path="body" index={body} zIndex={0} />
			<Item path="eyes" index={eyes} zIndex={1} />
			<Item path="accessories\hats" index={hats} zIndex={6} />
			<Item path="clothes/layer_1" index={clothes1} zIndex={2} />
			<Item path="clothes/layer_2" index={clothes2} zIndex={3} />
			<Item path="clothes/layer_3" index={clothes3} zIndex={4} />
			<Item path="mouths" index={mouth} zIndex={4} />
			<Item path="noses" index={0} zIndex={4} />
			<Item path="accessories/glasses" index={glasses} zIndex={5} />
		</div>				
    </div>
  )
}

export default Avatar
