import React from "react";
import { TopNav } from "../../components/topNav/TopNav";
import "./events.css";

export const Events = () => {
  return (
    <>
      <div className="nav">
        <TopNav />
      </div>
      <section className="events">
       Events
      </section>
    </>
  );
};

//TODO: ADD FORM TO CREATE NEW EVENTS BASED ON ROLE
