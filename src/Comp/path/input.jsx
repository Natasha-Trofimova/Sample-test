import css from "./input.css"
const { InputCss } = css
import { useState } from "react"

// import { useContext } from 'react';


function Input() {

  const [val, setVal] = useState()
  // const theme = useContext(ThemeContext);
  
  return (
    <>
      <div >
        сам инзут
      </div>
      <InputCss
        value={val}
        type={"text"}
        placeholder={''}
        maxLength={"100"}
        onChange={event => {
          const NewVal = event.target.value
          setVal(NewVal)
        }}
      />
      <div>
        отображение <br />
        {val}
      </div>
    </>
  )
}

export default Input