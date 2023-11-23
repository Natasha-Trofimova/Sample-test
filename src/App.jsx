import './App.css'
// import Context2Pag from './pages/Context2Pag'
// import ContextPag from './pages/ContextPag'
import MainPag from './pages/MainPag'
import TwonPag from './pages/TwoPag'
import { TxtInputC } from './Comp/Context/TxtInputC'
import { useState } from 'react'


function App() {
  const [txt, setTxt] = useState()

  return (
    <>
      <div className="card">
        {/* <h2>
          Sample first changes
        </h2>
        <h2>
          Sample two changes
        </h2>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      <div className='divMain'> */}
        <TxtInputC.Provider
        value={{
          txt,
          onChange: setTxt
        }}>

          <MainPag />
          <TwonPag />


        </TxtInputC.Provider>

        {/* <br/>
        контекст примеры
        <ContextPag />
        <Context2Pag /> */}
      </div>
    </>
  )
}




export default App
