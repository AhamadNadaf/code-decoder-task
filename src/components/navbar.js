import React from "react";
import goggles from '../assets/goggle.png'
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './style.css'

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <ArrowBackIcon sx={{ fontSize: 40, cursor:"pointer" }}/>
  <div className="vertical-line">

      </div>
    <a className="navbar-brand" href="/">
    Financial Management
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
      <img src={goggles} className="goggle" alt="google img"/>
      <ZoomOutMapIcon sx={{ fontSize: 40, cursor:"pointer" }}/>
      <div className="vertical-line">

      </div>
      <MoreHorizIcon sx={{ fontSize: 40, cursor:"pointer" }} />
      
    </div>
  </div>
</nav>

    )
}

export default Navbar