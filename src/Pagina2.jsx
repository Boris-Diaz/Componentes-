import React, { useContext } from 'react'
import { Contexto  } from './contexto/Contexto'
import imagen2 from "./imagen/M2.png"
function Pagina2() {

    const { color }= useContext(Contexto)


  return (
    <div div className='hijo' style={{background:color}}>
      <h1> Pagina 2 </h1> 


    <div>
      <img src={imagen2} alt="" />
    </div>
     
    </div>
  )
}

export default Pagina2
 