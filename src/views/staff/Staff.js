import React from 'react'
import { TopNav } from '../../components/topNav/TopNav'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './staff.css'
import scott from '../../images/scott.jpg'
import kenny from '../../images/Kenny.jpg'
import kerry from '../../images/kerry.jpg'

export const Staff = () => {
  return (
    <>
      <div className="nav">
        <TopNav />
      </div>

      <section className="staffSection">
        <section className="cardTop">
          <Card className="staffCard" style={{ width: "38rem" }}>
            <Card.Img variant="top" src={scott} />
            <Card.Body>
              <Card.Title>
                <h4>Pastor Scott McInnis</h4>
              </Card.Title>
              <Card.Title>
                <h5>
                  {" "}
                  Pastor Scott McInnis graduated from Andersonville Theological
                  Seminary with a degree in Biblical Studies. He and others
                  planted Awake Church in 2017, where he is the Senior Pastor.
                  Pastor Scott is married to his wife Jill and they have two
                  children together, Stephen and Rebekah.
                </h5>
                <br></br>
                <h5>
                  He married his wife Jill McInnis in "year" and together they
                  have two children, Stephen and Rebecka.
                </h5>
              </Card.Title>
              <Button variant="primary">Email</Button>
            </Card.Body>
          </Card>

          <Card className="staffCard" style={{ width: "38rem" }}>
            <Card.Img variant="top" src={kenny} />
            <Card.Body>
              <Card.Title>
                <h4>Kenny Ring | Elder</h4>
              </Card.Title>
              <Card.Title>
              
              </Card.Title>
              <Button variant="primary">Email</Button>
            </Card.Body>
          </Card>
        </section>

        <section className="cardBottom">
          <Card className="staffCard" style={{ width: "38rem" }}>
            <Card.Img variant="top" src={kerry} />
            <Card.Body>
              <Card.Title>
                <h4>Kerry Alzar | Elder</h4>
              </Card.Title>
              <Card.Title>

              </Card.Title>
              <Button variant="primary">Email</Button>
            </Card.Body>
          </Card>

          <Card className="staffCard" style={{ width: "38rem" }}>
            <Card.Img variant="top" src={""} />
            <Card.Body>
              <Card.Title>
                <h4>Stephen McInnis | Deacon</h4>
              </Card.Title>
              <Card.Title>
        
              </Card.Title>
              <Button variant="primary">Email</Button>
            </Card.Body>
          </Card>
        </section>
      </section>
    </>
  );
}
