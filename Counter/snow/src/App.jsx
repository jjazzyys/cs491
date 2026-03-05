import { useState } from 'react'
import './App.css'
import House from './House'


const App = () => {
  const [count, setCount] = useState(0)

  return (
<div>
      <h1>Counter</h1>
      <div className="Counter">

        <button onClick={() => { setCount(count =>  count - 1) }} >Decrease</button>
        {count} 
        <button onClick={ () => { setCount(count => count + 1) }}>Increase</button>

        <House name ="paradise">
        </House>

      </div>
      </div>

  )
}

export default App
