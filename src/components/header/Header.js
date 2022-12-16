import React from 'react'
import stars from '../../images/stars.jpg'

import './header.css'

export const Header = () => {
  return (
    <>
      <section className="heroSection">
        <img
          src={stars}
          className="christmasPic"
          alt="Blue Christmas background pic"
        />
        <div className="verse">
          <p>
            And that, knowing the time, that now it is high time to awake out of
            sleep:
          </p>
          <p> for now is our salvation nearer than when we believed.</p>
         
          <p>Romans 13:11 </p>
        </div>
      </section>
    </>
  );
}
