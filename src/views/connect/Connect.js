import React from 'react'
import { TopNav } from "../../components/topNav/TopNav";
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
            <a href="https://www.facebook.com/mooreawake/">Facebook</a>
            <br></br>
            <a
              href="https://www.youtube.com/@mooreawakechurch"
            >
              YouTube
            </a>
          </ul>
        </div>
      </section>
    </>
  );
}

// TODO: ADD PINTERST ACCOUNT
