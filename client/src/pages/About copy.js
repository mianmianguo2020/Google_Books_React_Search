import React from "react";
// import { Header } from "react-router-dom"
import Container from "../components/Container";
import Row from "../components/Row";
import Discover from "./Discover";
import Col from "../components/Col";
import Header from "../components/Header";
import "./about.css";

function About() {
  return (
    <div>
      <div className="open">xxxx</div>
      <Header>
        <h1>(React) Google Books Search</h1>
        <h2>Search for and Save Books of Interest</h2>
      </Header>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h2>Global Employee List:</h2>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Discover/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
