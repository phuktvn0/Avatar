import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Avatar from './components/Avatar'
import ItemList from './components/ItemList'
import './App.css'

function App() {
	const [body, setBody] = useState(0)
	const [eyes, setEyes] = useState(0)
	const [hats, setHats] = useState(0)
	const [clothes1, setClothes1] = useState(0)
	const [clothes2, setClothes2] = useState(0)
	const [clothes3, setClothes3] = useState(0)
	const [mouth,setMouth] = useState(0)
	const [glasses, setGlasses] = useState(0)
	const randomize = () => {
		setBody(Math.floor(Math.random() * 17));
		setEyes(Math.floor(Math.random() * 24));
		setHats(Math.floor(Math.random() * 28));
		setMouth(Math.floor(Math.random() * 24));
		setGlasses(Math.floor(Math.random() * 17));
		setClothes1(Math.floor(Math.random() * 5));
		setClothes2(Math.floor(Math.random() * 5));
		setClothes3(Math.floor(Math.random() * 9));
	};

useEffect(() => {randomize()}, []);
	
  return (
	<div className='App'>
	  	<Header></Header>
		<div className='avatar-group gap-30'>
			<div>
				<div className="avatar-wrapper">
					<Avatar body={body} eyes={eyes} hats={hats} clothes1={clothes1} clothes2={clothes2} clothes3={clothes3} mouth={mouth} glasses={glasses} />
					<div className="text-center">
						<button className="button" onClick={() => randomize()}>
							Randomize!
						</button>
					</div>
				</div>
			</div>
			<div>
				<div className="list-section">
					<h2>Body</h2>
					<ItemList total={17} path="body" set={setBody} selected={body} />
				</div>
				<div className="list-section">
					<h2>Eyes</h2>
					<ItemList total={24} path="eyes" set={setEyes} selected={eyes} />
				</div>
				<div className="list-section">
					<h2>Hats</h2>
					<ItemList total={28} path="accessories/hats" set={setHats} selected={hats} />
				</div>
				<div className="list-section">
					<h2>Mouth</h2>
					<ItemList total={24} path="mouths" set={setMouth} selected={mouth} />
				</div>
				<div className="list-section">
					<h2>Glasses</h2>
					<ItemList total={17} path="accessories/glasses" set={setGlasses} selected={glasses} />
				</div>
				<div className="list-section">
					<h2>Clothes (L1)</h2>
					<ItemList total={5} path="clothes/layer_1" set={setClothes1} selected={clothes1} />
				</div>
				<div className="list-section">
					<h2>Clothes (L2)</h2>
					<ItemList total={5} path="clothes/layer_2" set={setClothes2} selected={clothes2} />
				</div>
				<div className="list-section">
					<h2>Clothes (L3)</h2>
					<ItemList total={9} path="clothes/layer_3" set={setClothes3} selected={clothes3} top="-15px" />
				</div>
			</div>
		</div>
	</div>
  )
}

export default App
