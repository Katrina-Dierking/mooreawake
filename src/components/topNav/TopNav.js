import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import './topNav.css'
import about from '../../images/about.png'
import contact from '../../images/contact.png'
import staff from '../../images/staff.png'
import give from '../../images/give.png'
import connect from '../../images/connect.png'
import event from '../../images/event.png'
import resources from '../../images/resources.png'
import photos from '../../images/photos.png'
// import pix from '../../images/pix.png'

export const TopNav = () => {
  return (
    <>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div className="pixLogo">
              <Link to="/" className="logo">
                MOORE AWAKE CHURCH
              </Link>
            </div>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <div className="icons-search">
              <ul className=" icons">
                <li className="iconLabels">
                  <Link to="/about">
                    <img src={about} />
                  </Link>
                  <Link to="/about">About</Link>
                </li>
                <li className="iconLabels">
                  <Link to="/staff">
                    <img src={staff} />
                  </Link>
                  <Link to="/staff">Staff</Link>
                </li>
                <li className="iconLabels">
                  <Link to="/contact">
                    <img src={contact} />
                  </Link>
                  <Link to="/contact">Contact</Link>
                </li>
                <li className="iconLabels">
                <Link to="/resources">
                <img src={resources} />
                </Link>
                <Link to ="/resources">Resources
                </Link>
                </li>
                <li className="iconLabels">
                  <Link to="/connect">
                    <img src={connect} />
                  </Link>
                  <Link to="/connect">Connect</Link>
                </li>
                <li className="iconLabels">
                  <Link to="/events">
                    <img src={event} />
                  </Link>
                  <Link to="/events">
                    <a href="#">Events</a>
                  </Link>
                </li>
                <li className="iconLabels">
                  <Link to="/gallery">
                    <img src={photos} />
                  </Link>
                  <Link to="/gallery">Photo Gallery</Link>
                </li>
                <li className="iconLabels">
                  <Link to="/give">
                    <img src={give} />
                  </Link>
                  <Link to="/give">Give</Link>
                </li>
              </ul>
              <form
                className="navbar-form navbar-left"
                action="/action_page.php"
              >
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                  <div className="input-group-btn">
                    <button className="btn btn-default" type="submit">
                      <i className="glyphicon glyphicon-search"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
