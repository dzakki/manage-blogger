import React from 'react';
import { useSelector } from "react-redux";
import Login from './auth/Login';
import Logout from './auth/Logout';
import { Link } from 'react-router-dom';
import logo from '../assets/blogger-logo-transparent.png';

export default function Navigation() {
  const isLoggedIn = useSelector(state => state.user.isLogged)
  return (
      <nav className="navbar navbar-light bg-white shadow-sm fixed-top">
          <div className="container">
              <Link className="navbar-brand" to="/">
                <img src={logo} width="30" height="30" alt="blogger" className="mr-1" />
                Blogger
              </Link>
              <div className="float-right">
                {
                  !isLoggedIn
                    ? <Login />
                    : <Logout />
                }
              </div>
          </div>
      </nav>
  );
};