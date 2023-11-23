import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Mohammed Numan Raza </span>
            from Bangalore, India.
            <br />
            <br />
            I am currently perceiving my B.Tech from  
            <span className="purple">University of Visvesvaraya college of Engineering</span>
           
            <br />
            <br />
            I'm passionately charting my path. With a self-forged expertise in Full Stack Web Development, I'm presently immersing myself in the intricacies of Data Structures and Algorithms. I strongly believe in the connection between dedicated aspirations and persistent pursuit - a philosophy I live by.
          </p>
          <br />
          <br />
        
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
