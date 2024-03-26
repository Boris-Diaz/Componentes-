import { useContext } from "react"
import React  from 'react'
import { Contexto } from "./contexto/Contexto"

function Colores() {

const {setColor}=useContext (Contexto)
   
  return (

    <div className='colores'>      

     <div className='color' onClick={()=> {
        setColor("#4285f4")}}> </div>

     <div className='color'  onClick={()=> {
        setColor("#ea4335")}}> </div>

     <div className='color'  onClick={()=> {
        setColor("#fbbc05")}}> </div>


     <div className='color'  onClick={()=> {
        setColor("#34a853")}}></div>

      <div className='color'  onClick={()=> {
        setColor("#7601fc")}}></div>

<div className='color'  onClick={()=> {
        setColor("#ffffff")}}></div>

    </div>
  )
}

export default Colores
