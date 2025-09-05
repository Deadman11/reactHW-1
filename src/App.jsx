// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React, {Component} from 'react'	
import './App.css'

const item = {
	brand: 'Tiger of Sweden',
	title: 'Leonard coat',
	description: 'Minimalistic coat in cotton-blend',
	descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
	price: 399,
	currency: '£'
}


function ShopItemFunc() {
	return (
		<>
			<div className='main-content'>
				<h2>{item.brand}</h2>
				<h1>{item.title}</h1>
				<h3>{item.description}</h3>
				<div className='description'>{item.descriptionFull}</div>
				<div className='highlight-window mobile'><div className='highlight-overlay'></div></div>
				<div className="divider"></div>
				<div className="purchase-info">
					<div className="price">{item.currency}{item.price}</div>
					<button>Добавить в корзину</button>
				</div>
			</div>
		</>
	)
}


export class ShopItemClass extends Component {
	constructor(props) {
		super(props);
		this.item = {
			brand: 'Tiger of Sweden',
			title: 'Leonard coat',
			description: 'Minimalistic coat in cotton-blend',
			descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
			price: 399,
			currency: '£'
		}
	}

	render() {
		return (
			<div className='main-content'>
				<h2>{this.brand}</h2>
				<h1>{this.title}</h1>
				<h3>{this.description}</h3>
				<div className='description'>{this.descriptionFull}</div>
				<div className='highlight-window mobile'><div className='highlight-overlay'></div></div>
				<div className="divider"></div>
				<div className="purchase-info">
					<div className="price">{this.currency}{this.price}</div>
					<button>Добавить в корзину</button>
				</div>
			</div>
			)
	  }
}





// function App() {

//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default ShopItemFunc 
