import React from 'react'
import { TopNav } from "../../components/topNav/TopNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './connect.css'


export const Connect = () => {
  return (
    <>
      <div className="nav">
        <TopNav />
      </div>

      <section className="connect">
        <h3>Connect</h3>
        <div className="connectIcons">
          <ul>
            <i class="fas fa-facebook fa-lg"></i>
            <li>
              <a
                href="https://www.facebook.com/mooreawake/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@mooreawakechurch"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

// TODO: ADD PINTERST ACCOUNT
