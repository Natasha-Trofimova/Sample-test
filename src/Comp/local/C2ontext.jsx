import { useContext } from 'react'
import { ThemeContext } from '../Context/ConextTheme'

import '../../App.css'
// import S2howContext from './2ShowContext'



function  C2ontext() {
  const {toggle} = useContext(ThemeContext)


  return (
    <>
      <div className='ex'>
      C2ontext<br/>
      {/* <S2howContext/> */}
      <button
      onClick={toggle}>
        1
      </button>
      </div>
    </>
  )
}

export default C2ontext