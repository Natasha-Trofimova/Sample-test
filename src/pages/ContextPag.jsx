import { useState } from 'react'
import '../App.css'
import InputContext from '../Comp/local/InputContext'
import ShowContext from '../Comp/local/ShowContext'

import { TextContext } from '../Comp/Context/ConextTxt'


function ContextPag() {

  const [input, setInput] = useState()

  return (
    <>
      <div className="ex">
        передача инпута<br />
        context txt exmpl

        <TextContext.Provider
          value={{ input, onChange: setInput }}
        >

          <InputContext />
          <ShowContext />

        </TextContext.Provider>

      </div>

    </>
  )
}

export default ContextPag