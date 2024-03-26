import React, { useContext } from 'react'
import { Contexto  } from './contexto/Contexto'
import imagen3 from './imagen/M3.png'


function Pagina3() {

    const { color }= useContext(Contexto)


  return (
    <div div className='hijo' style={{background:color}}>
      <h1> Pagina 3 </h1> 
      <div>
        <img src={imagen3} alt="" />
      </div>
     
    </div>
  )
}

export default Pagina3
 