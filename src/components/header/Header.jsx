import React, { useState , useEffect} from 'react'
import { Link } from 'react-router-dom';
import { IoMenuOutline } from "react-icons/io5"
import logo from '../../assets/images/bamboo_c.png'



const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [isActive, setIsActive] = useState(false);
  
  const showMobileMenu = () => {
    setIsActive(current => !current);
  }

    
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10)
    })
  }, [])


  return (
    <>
    <header className={`header ${scroll ? "scroll-header" : ""} ${isActive ? "active" : ""}`}>
    <div className="container">

      <Link  to="/" className="logo">
        <img id="bamboo_c" src={logo} />
        <span>بامبو</span>
      </Link>
          

      <button className="menu-toggle-btn" data-nav-toggle-btn onClick={()=>showMobileMenu()}>
         <IoMenuOutline
          color={'#fff'} 
          height="50px"
          width="50px"
        />     
      </button>

      <nav className="navbar">
        <ul className="navbar-list">

          <li>
            <Link to="/courses" className="navbar-link">دوره ها</Link>
          </li>

          <li>
            <Link to="" className="navbar-link">مقالات</Link>
          </li>

          <li>
            <Link to="" className="navbar-link">خدمات</Link>
          </li>

          <li>
            <Link to="" className="navbar-link">درباره ما</Link>
          </li>  

        </ul>

        <div className="header-actions">
           <Link to="/login" className="header-action-link">ورود</Link>

          <Link to="/register" className="header-action-link register">ثبت نام</Link>  
        </div>
      </nav>

    </div>
  </header>
  </>
  )
}

export default Header
