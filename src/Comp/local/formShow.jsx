import '../../App.css'
import { TxtInputC } from '../Context/TxtInputC'
import { useContext } from 'react'


function  FormShow() {
const {txt} = useContext(TxtInputC)
  return (
    <>
      <div className='m'>
        отображение инпут поля<br/>
        {txt}
      </div>
    </>
  )
}

export default FormShow