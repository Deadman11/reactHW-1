import item from './Item'

import './App.css'

import ShopItemClass from "./ShopItemClass"
import ShopItemFunc from './ShopItemFunc'

export default function App() {
    return (
        <div className="container">
            <div className="background-element">
            </div>
            <div className="highlight-window">
                <div className='highlight-overlay'></div>
            </div>
            <div className="window">
                {/* <ShopItemFunc item={item} /> */}
                <ShopItemClass item={item} />
            </div>
        </div>
    )
}