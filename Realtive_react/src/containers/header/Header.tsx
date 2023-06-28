import React from 'react'
import './Header.css'
import helpPopup from '../../assets/img/help popup.png'


export const Header = () => {
  return (
    <div className='ledens__header section_padding' id='Home'>
      <div className='ledens__header-content'>
        <div className='ledens__header-content-contanier'>
          <div className='ledens__header-content-contanier-h1'>
            <h1 className= 'ledens__header-content-contanier-h1-1'>
              real estate
            </h1>
            <h1 className= 'ledens__header-content-contanier-h1-2'>
              New Era
            </h1>
          </div>
          <div className='ledens__header-content-contanier-paragraph'>
            <p> Spend Less, Get More </p>
          </div>
          <div className='ledens__header-content-contanier-input'>
            <input type="email" placeholder='Your Email' />
            <button type='button'> Get Started</button>
          </div>
        </div>
        <div className='ledens__header-content-contanier-helpimg'>
            <img src={helpPopup} alt="helping hipster" />
        </div>  
      </div>
    </div>
  )
}
