import React from 'react'
import {
  Chuck,
  Buster,
  Sachi,
  Frankie
} from '../../../assets/svg'

export const Cartoons = ({ models, activeModel, className, changeModel }) => {
  return (
  <div className='work__box'>
    <div className="cartoons">
      <div className='cartoons__row'>
        <Chuck />
        <Buster />
      </div>
      <div className='cartoons__row'>
        <Sachi />
        <Frankie />
      </div>
    </div>
  </div>
)}