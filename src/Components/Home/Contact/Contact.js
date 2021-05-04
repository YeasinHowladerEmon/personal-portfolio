import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Contact.css'
import emailjs from 'emailjs-com';
const Contact = () => {

    const sendEmail = (e) =>{
        e.preventDefault();
        emailjs.sendForm('gmail', 'template_lb8lm6s', e.target, 'user_lgrNqJ66tQbtF2BVTRTmC')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }
    return (
        <>
             <section id="Contact" style={{height: "1000px"}} className="contact-section mt-5">
            <Container className="">
                <div className="text-center">
                    <h1>Contact us</h1>
                </div>
                <form onSubmit={sendEmail}>
                <Row className="input-container">
                    <Col xs={12}>
                        <div className="styled-input wide">
                            <input className="form-control" type="text" required name="name" />
                            <label>Name</label>
                        </div>
                    </Col>
                    <Col md={6} sm={12}>
                        <div className="styled-input">
                            <input className="form-control" type="email" name="email" required />
                            <label>Email</label>
                        </div>
                    </Col>
                    <Col xs={12}>
                        <div className="styled-input wide">
                            <textarea required name="message" className="form-control" id="" rows="8" cols="30" ></textarea>
                            <label>Message</label>
                        </div>
                    </Col>
                    <Col xs={12}>
                       <input type="submit" className="btn btn-primary"  value="Send Message"/>
                    </Col>
                </Row>
                </form>
            </Container>
        </section>
        </>
    );
};
// btn-lrg submit-btn

export default Contact;