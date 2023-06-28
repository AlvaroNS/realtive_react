import React, {useState} from 'react'
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo/logoledens.png'
import './Navbar.css'

const Menu:React.ElementType = () => {
  return (<>
    <p><a href="#">Home</a></p>
    <p><a href="#">Services</a></p>
    <p><a href="#">Pricing</a></p>
    <p><a href="#">About Us</a></p>
  </>)
}


export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='ledens__navbar'>
      <div className='ledens__navbar-links'>
        <div className='ledens__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='ledens__navbar-links_container'>
          <Menu/>
        </div>
        <div className='ledens__navbar-sign-buttons'>
          <div className='ledens__navbar-sign-in'>
            <button type='button'>Sign in</button>
          </div>
          <div className='ledens__navbar-sign-up'>
            <button type='button'>Sign up</button>
          </div>
        </div>
        <div className='ledens__navbar-menu'>
          {toggleMenu
            ? <RiCloseLine color='#fff' size={27} onClick={()=>setToggleMenu(false)}/>
            : <RiMenu3Line color='#fff' size={27} onClick={()=>setToggleMenu(true)}/>
          }
          { toggleMenu && (
            <div className='ledens__navbar-menu-container scale-up-center'>
              <div className='ledens__navbar-menu-container-links'>
                <Menu/>
                <div className='ledens__navbar-menu-container-links-sign'>
                  <div className='ledens__navbar-sign-in'>
                    <button type='button'>Sign in</button>
                  </div>
                  <div className='ledens__navbar-sign-up'>
                    <button type='button'>Sign up</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
      </div>
    </div>
  )
}
