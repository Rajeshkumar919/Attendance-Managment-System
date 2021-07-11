import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "./Body.css";
export default function Body() {
    return (
        <>
        <Section1 />
        <Section2 />
        <Newsletter />
        </>
    );
}
function Section1() {
    return (
        <div className="App">
            <section style={{textAlign: 'center'}} className="inner-page-banner mb-5 whiteText">
                <h1>Welcome to SIBAU AMS</h1>


                <div className='container  w-75 rounded mt-5 '>
                    <Form className="pt-3 pb-4">
                        

                        <Row className="pt-3">
                          
                            <Col md={{span: 7, offset:2}}>
                            <h3>MY ROLE IS :</h3>
                                <Form.Group>
                                    <Form.Control as="select" size="lg" placeholder="Select Subject">
                                        <option>Student</option>
                                        <option>Teacher</option>
                                    </Form.Control>
                                </Form.Group>
                                <Button variant="success" type="submit" size="lg" >
                                    Let's Enter!
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </section>
        </div>
    );
}
function Newsletter () {
    return(

        <div className="newsletter-wrap">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="title">
          <h1>Newsletter</h1>
        </div>
        <p>Attendance Management System SIBAU</p>
      </div>
      <div className="col-lg-6">
        <div className="news-info">
          <form>
            <div className="input-group">
              <input type="text" className="form-control" name="search" placeholder="Email Address" />
              <div className="form_icon"><i className="fas fa-envelope"></i></div>
            </div>
            <button className="sigup"><i className="fas fa-paper-plane"></i></button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}

function Section2() {
    return(
        <div className="contact-wrap" id="contact">
  <div className="container">
    <div className="row">
      <div className="col-lg-7">
        <div className="title">
          <h1>Attendance Management System SIBAU</h1>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="conInfo phonewrp emailWrp"><span>E-MAIL</span> <a href="mailto:info@domainname.com">syedofficial92@gmail.com</a></div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="conInfo phonewrp"><span> Contact Number</span> <a href="tel:7704251234">+92300 2284 502</a></div>
          </div>
        </div>
        <div className="mapwrp">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33603.27104636516!2d68.81542501987845!3d27.713927741448273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3935d4af04068cbb%3A0xfe37e34d99e1ddce!2sAcademic%20Block%20I%20-%20Sukkur%20IBA%20University!5e0!3m2!1sen!2s!4v1625996123376!5m2!1sen!2s" style={{border:0}} allowfullscreen="" aria-hidden="false" title="Map" tabindex="0"></iframe>
        </div>
      </div>
      <div className="col-lg-5">
        <div className="contact_form">
          <div className="title">
            <h1>GET CONSULTATION!</h1>
          </div>
          <form>
            <div className="input-group">
              <input type="text" name="Name" className="form-control" placeholder="Name" />
            </div>
            <div className="input-group">
              <input type="email" name="Email" className="form-control" placeholder="Email" />
            </div>
            <div className="input-group">
              <input type="number" name="Phone" className="form-control" placeholder="Phone" />
            </div>
            <div className="input-group">
              <textarea className="form-control" placeholder="Comments"></textarea>
            </div>
            <div className="input-group">
              <input type="submit" value="Contact Us" name="submit" className="sub" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
    );
}