import React from 'react'
import "./header.css";
import img from "./../../media/logo.png"
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <div className='container d-flex1'>
        <img src={img} alt=""/>
        <div className='d-flex1'> 
          <ul className='ul_display'>
              <li><Link to="/">Asosiy</Link></li>
              <li><Link to="/">Biz haqimizda</Link></li>
              <li><Link to="/">Blog</Link></li>
              <li><Link to="/">Fikrlar</Link></li>
          </ul>
          <Link to="/"><button className='btn1'>Registratsiya</button></Link>
          <Link to="/"><button className='btn2'>Kirish</button></Link>
          </div>       
     </div>
    </div>
  )
}

export default Header;