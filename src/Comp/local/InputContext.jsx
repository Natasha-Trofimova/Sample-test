import { useContext } from 'react'
import { useState } from 'react'

import '../../App.css'
// описываем сам инпут
import { TextContext } from '../Context/ConextTxt';


function  InputContext() {

const {onChange} = useContext(TextContext)
const [input, setInput] = useState(null);

  return (
    <>
      <div className='ex'>
      InputContext<br/>
      <input
      type="text"
      value={input}
      onChange={(e) => {
        setInput(e.target.value);
        onChange(e.target.value);
      }}
    />
      </div>
    </>
  )
}

export default InputContext