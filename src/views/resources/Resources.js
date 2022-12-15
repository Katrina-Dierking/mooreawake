import React from "react";
import { TopNav } from "../../components/topNav/TopNav";
import "./resources.css";

export const Resources = () => {
  return (
    <>
      <div className="nav">
        <TopNav />
      </div>
      <section className="resources">
        <ul>
          <a href="#">Red Pen Logic</a>
          <br></br>
          <a href="#">Stand to Reason</a>
          <br></br>
          <a href="https://www.gotquestions.org">Got Questions</a>
          <br></br>
          <a href="#">Ligonier</a>
          <br></br>
          <a href="#">Grace To You</a>
          <br></br>
          <a href="#">Answers in Genesis</a>
          <br></br>
          <a href="https://www.livingwaters.com">Living Waters</a>
          <br></br>
          <a href="https://shop.wretched.org">Wretched</a>
        </ul>
        </section>
        </>
        );
    };
    
    // TODO: add a form to be able to add new resources
    // TODO: ADD ICONS