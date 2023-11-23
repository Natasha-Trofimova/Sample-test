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
