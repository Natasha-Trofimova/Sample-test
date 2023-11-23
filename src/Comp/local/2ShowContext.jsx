import { useContext } from 'react'
// import { useState } from 'react'

import '../../App.css'
import { ThemeContext } from '../Context/ConextTheme'



function  S2howContext() {
const {theme} = useContext(ThemeContext)

  return (
    <>
      <div className={`${theme}`}>
      2ShowContext<br/>
      {theme}
      </div>
    </>
  )
}

export default S2howContext