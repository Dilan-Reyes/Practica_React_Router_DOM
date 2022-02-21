import logo from "../assets/images/logo-DH.png";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom"

const SiderBar = () => {
  return (
    <>
    <Link to="/">Home</Link>
    <Link to="/GenresInDb">Generos</Link>
    <Link to="/LastMovieInDb">Last Movie</Link>
    <Link to="/ContentRowTop">Content Movies</Link>
      <ul
        className='navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion'
        id='accordionSidebar'
      >
        <a
          className='sidebar-brand d-flex align-items-center justify-content-center'
          href='/'
        >
          <div className='sidebar-brand-icon'>
            <img className='w-100' src={logo} alt='Digital House' />
          </div>
        </a>

        <hr className='sidebar-divider my-0' />

        <li className='nav-item active'>
          <a className='nav-link' href='/'>
            <i className='fas fa-fw fa-tachometer-alt'></i>
            <span>Dashboard - DH movies</span>
          </a>
        </li>

        <hr className='sidebar-divider' />

        <div className='sidebar-heading'>Actions</div>

        <li className='nav-item'>
          <a className='nav-link collapsed' href='/'>
            <i className='fas fa-fw fa-folder'></i>
            <span>Pages</span>
          </a>
        </li>

        {/* <!-- Nav Item - Charts --> */}
        <li className='nav-item'>
          <a className='nav-link' href='/'>
            <i className='fas fa-fw fa-chart-area'></i>
            <span>Charts</span>
          </a>
        </li>

        {/* <!-- Nav Item - Tables --> */}
        <li className='nav-item'>
          <a className='nav-link' href='/'>
            <i className='fas fa-fw fa-table'></i>
            <span>Tables</span>
          </a>
        </li>

        {/* <!-- Divider --> */}
        <hr className='sidebar-divider d-none d-md-block' />
      </ul>
    </>
  );
};

export default SiderBar;
