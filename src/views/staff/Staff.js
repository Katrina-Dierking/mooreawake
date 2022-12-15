import React from 'react'
import { TopNav } from '../../components/topNav/TopNav'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './staff.css'
import scott from '../../images/scott.jpg'
import kenny from '../../images/kenny.jpg'
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
                  Pastor Scott McInnis attended "school" in "year". He became
                  the pastor Red Branch Baptist Church in "year" where he
                  started a plant church. In 2017, he became the pastor of Awake
                  Church.
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
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
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
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
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
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Title>
              <Button variant="primary">Email</Button>
            </Card.Body>
          </Card>
        </section>
      </section>
    </>
  );
}
