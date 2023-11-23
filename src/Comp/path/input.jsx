import css from "./input.css"
const { InputCss } = css
import { useContext } from 'react'
import { useState } from 'react'
import { TxtInputC } from "../Context/TxtInputC"


function Input() {

  const {onChange} = useContext(TxtInputC)
  const [txt, setTxt] = useState()



  return (
    <>
      <InputCss
        value={txt}
        type={"text"}
        placeholder={''}
        maxLength={"100"}
        onChange={event => {
          onChange(event.target.value)
          setTxt(event.target.value)
        }}
      />
      {/* <div>
        отображение <br />
        {txt}
      </div> */}
    </>
  )
}

export default Input

