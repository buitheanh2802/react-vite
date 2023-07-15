import { useState } from 'react'
import "./global-styles/main.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex items-center underline'>
        hello world 
      </div>
    </>
  )
}

export default App
