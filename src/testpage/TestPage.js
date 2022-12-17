import React from 'react'
import { TopNav } from '../components/topNav/TopNav'
import './testpage.css'
import blueSwirl from './blue-swirl.png'
import ColorBox from '../components/colorboxes/ColorBox'


const TestPage = () => {
  return (
    <>
      <div className="pageBody">
        <div className="testBody">
          <TopNav />
        </div>
        <section className="swirl">
          <img src={blueSwirl} />
          </section>
          <section>
            <div className="testVerse">
              <p>
                And that, knowing the time, that now it is high time to <span className='awake'>Awake </span>
                out of sleep:
              </p>
              <p> for now is our salvation nearer than when we believed.</p>

              <p>~ Romans 13:11 ~</p>
            </div>
          </section>
          <ColorBox />
          </div>
    </>
  );
}

export default TestPage

