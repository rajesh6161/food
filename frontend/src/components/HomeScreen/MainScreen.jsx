import React, { useState, useEffect } from 'react';
import '../style.css';
import { Link } from 'react-router-dom';

const MainScreen = ({ fullpageApi }) => {
  return (
    <div className="mainscreen">
      <div className="content">
        <h2>Welcome to</h2>
        <h1>Pristine Palace</h1>

        <Link to="/menu" className="nav-link btn btn-primary" id="menu">
          Menu
        </Link>

        <button
          className="btn btn-primary"
          onClick={() => fullpageApi.moveSectionDown()}
          id="moveDown"
        >
          <i class="bi bi-arrow-down"></i>
        </button>
      </div>
    </div>
  );
};

export default MainScreen;
