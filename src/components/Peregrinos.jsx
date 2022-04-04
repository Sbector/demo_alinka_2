import React from 'react'
import { Suspense } from "react";
import Peregrino from './Peregrino';

const Peregrinos = () => {
  const total = 70
  const numbers = [{}]

  const pos = [{
    posX: '0',
    posY: '0',
    posZ: '0',
  }]
  
  for(let i = 0; i < total; i++){
    numbers.push({})
    numbers[i].num = i+1
    numbers[i].key = i
    pos.push({})
    pos[i].posX = 0
  }
  
  const number = {...pos[0], ...numbers[total-1]}
  return (
    <Suspense> 
        <Peregrino {...number}/>  
    </Suspense>
  )
}

export default Peregrinos