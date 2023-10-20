import Logo from "../../assets/images/logo.png";

import "../../styles/components/navbar.sass"

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#">
          <img src={Logo} alt="" />
        </a>
      </div>
      <div className="contact">
        (84) 99999-9999
      </div>
    </nav>
  )
}

export default NavBar;