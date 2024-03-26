import React, { useContext } from 'react'
import { Contexto  } from './contexto/Contexto'
import imagen1 from "./imagen/M1.png"

function Pagina1() {

    const { color }= useContext(Contexto)


  return (
    <div div className='hijo' style={{background:color}}>
      <h1> Pagina 1 </h1> 

      <div className='imagenm1'>

        <img src={imagen1} alt="" />

      </div>
     
    </div>
  )
}

export default Pagina1
 