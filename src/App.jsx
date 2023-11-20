// import { useState } from 'react'
import './App.css'
import MainPag from './pages/MainPag'
import TwonPag from './pages/TwoPag'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        {/* <h2>
          Sample first changes
        </h2>
        <h2>
          Sample 3 changes
        </h2>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <div>
        <MainPag/>
        </div>
        <div>
        <TwonPag/>
        </div>
      </div>
    </>
  )
}

export default App
