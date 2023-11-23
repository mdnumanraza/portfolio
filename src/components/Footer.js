import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineWhatsApp,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {

  return (
    <Container fluid className="footer">
      <Col className="flex center">
        <div md="4" className="footer-copywright center">
          <h3>Made with ❤ by Mohammed Numan Raza</h3>
        </div>
       
        <div md="4" className="footer-body center">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/numna71417/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/mohammed-numan-raza-ab980b202/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>

            <li className="social-icons">
                <a
                  href="https://wa.me/9964974885"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                 
                >
                  <AiOutlineWhatsApp />
                </a>
              </li>


            <li className="social-icons">
              <a
                href="https://www.instagram.com/numanraza412"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </div>
      </Col>
    </Container>
  );
}

export default Footer;
