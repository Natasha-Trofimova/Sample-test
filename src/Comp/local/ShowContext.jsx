import { useContext } from 'react'
// import { useState } from 'react'

import '../../App.css'
import { TextContext } from '../Context/ConextTxt';



function  ShowContext() {
  const { input } = useContext(TextContext);
  return (
    <>
      <div className='ex'>
      ShowContext<br/>
      отображение текста<br/>
      {input}
      </div>
    </>
  )
}

export default ShowContext