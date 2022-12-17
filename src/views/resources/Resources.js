import React from "react";
import { TopNav } from "../../components/topNav/TopNav";
import "./resources.css";

export const Resources = () => {
  return (
    <>
      <div className="nav">
        <TopNav />
      </div>
      <section className="resourceBody">
        <nav className="resources">
          <ul>
            <li>
              <a
                href="https://www.str.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Red Pen Logic | Stand to Reason
              </a>
            </li>
            <li>
              <a
                href="https://www.gotquestions.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Got Questions
              </a>
            </li>
            <a
              href="https://www.ligonier.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ligonier Ministries
            </a>
            <li>
              <a
                href="https://www.gty.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Grace To You
              </a>
            </li>
            <a
              href="https://answersingenesis.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Answers in Genesis
            </a>
            <li>
              <a
                href="https://www.livingwaters.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Living Waters
              </a>
            </li>
            <li>
              <a
                href="https://shop.wretched.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wretched
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
    };
    
    // TODO: add a form to be able to add new resources
    // TODO: ADD ICONS