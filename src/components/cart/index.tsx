import { FC } from 'react'
import './cart.scss'


const Cart:FC= ({}) => {
  return(<div className='cart'>
      <header>
          <span>your Items</span>
      </header>
      <div>
          please choise your product
      </div>
      <footer>
          <span>total :  $222</span>
          <button>checkout</button>
      </footer>
  </div>)
  
}

export default Cart