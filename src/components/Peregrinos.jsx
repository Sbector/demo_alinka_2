import React from 'react'
import { Suspense } from "react";
import Peregrino from './Peregrino';

const Peregrinos = () => {
  const total = 72
  const numbers = []
  const pos = []
  let j = 0
  let k = 0
  
  for(let i = 0; i < total; i++){
    numbers.push({})
    numbers[i].num = i+1
    numbers[i].key = i
    
    k++
    if(i % 11 == 0){
      j += 1.25
      k = 0
    }
    pos.push({})
    pos[i].posX = k-5
    pos[i].posY = 0
    pos[i].posZ = j-3
  }
  
  return (
    <>
    {   
      numbers.map((item)=> {
          const pere = {...pos[item.key], ...numbers[item.key]}
          console.log(pere)
          return (
            <Peregrino {...pere} />
          )
        }
      )
    }
   </>
  )
}

export default Peregrinos