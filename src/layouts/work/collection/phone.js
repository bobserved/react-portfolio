import React from 'react'

export const Phone = ({ models, activeModel, className, changeModel }) => {
  return (
  <div className='work__box' style={{ paddingBottom: 64 }}>
    <div className="work__btn-container">
      {models && models.map((model, i) => (
        <button
          key={i}
          className={`work__btn ${activeModel === model.name ? 'active' : ''}`}
          onClick={() => changeModel(model.class, model.name)}
        >
          {model.name}
        </button>
      ))
      }
    </div>
    <div className="phone">
      <div className={`phone__outer phone__outer--${className}`}> 
        <div className="speaker-container">
          <div className="speaker-container__speaker"></div>
        </div>
        <div className={`inner`}>
        </div>
        <div className="work-btn-container">
          <div className="work-btn-container__work-btn"></div>
        </div>  
      </div>
    </div>
  </div>
)}