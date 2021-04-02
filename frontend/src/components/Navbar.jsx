import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { userInfo } = useSelector((state) => state.userLogin);
  const name = userInfo && userInfo.name;
  console.log(name);
  return (
    <div>
      <header className="header">
        <nav className="navbar navbar-expand-lg fixed-top ">
          <div className="container">
            <Link
              to="/"
              className="navbar-brand text-uppercase font-weight-bold"
            >
              Logo
            </Link>
            <button
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              className="navbar-toggler navbar-toggler-right"
            >
              <i class="bi bi-three-dots-vertical"></i>
            </button>

            <div
              id="navbarSupportedContent"
              className="collapse navbar-collapse"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link to="/" className="nav-link text-uppercase">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/menu" className="nav-link text-uppercase">
                    Menu
                  </Link>
                </li>

                <li className="nav-item">
                  <a href="#" className="nav-link text-uppercase ">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <Link
                    to="/login"
                    className="btn btn-secondary nav-link text-uppercase"
                    aria-disabled={true}
                  >
                    {name ? name.split(' ')[0] : 'Login'}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
