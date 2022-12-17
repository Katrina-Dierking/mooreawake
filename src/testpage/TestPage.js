import React from 'react'
import { TopNav } from '../components/topNav/TopNav'
import './testpage.css'
import blueSwirl from './blue-swirl.png'


const TestPage = () => {
  return (
    <>
      <div className="testBody">
        <TopNav />
      </div>
      <section className="swirl">
        <img src={blueSwirl} />
      </section>
        <section>
              <div className="testVerse">
                <p>
                  And that, knowing the time, that now it is high time to awake out of
                  sleep:
                </p>
                <p> for now is our salvation nearer than when we believed.</p>
        
                <p>~ Romans 13:11 ~</p>
              </div>
      </section>
    </>
  );
}

export default TestPage

  // <section className="buttons">
  //       <div>
  //         <h3>Choose a location</h3>
  //       </div>
  //       <div className="choices">
  //         <button>Online</button>
  //         <h4> | </h4>
  //         <h5>Carthage, NC</h5>
  //       </div>