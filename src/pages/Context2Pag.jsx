import { useState } from 'react'
import '../App.css'
import S2howContext from '../Comp/local/2ShowContext'
import C2ontext from '../Comp/local/C2ontext'
 import { ThemeContext } from '../Comp/Context/ConextTheme'

function Context2Pag() {

  const [theme, setTheme] = useState('m')
const toggleTheme = () =>{
  setTheme(currentValue => currentValue === 'm'
  ? 'b' : 'm')
}

  return (
    <>
      <div className="ex">
        переключение темы пример<br />
        switching theme example

        <ThemeContext.Provider
          value={{ theme, 
            toggle: toggleTheme
          }}
        >
          <S2howContext />

          <C2ontext />

        </ThemeContext.Provider>

      </div>

    </>
  )
}

export default Context2Pag