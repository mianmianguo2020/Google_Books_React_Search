import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Discover from "./Discover";
import Col from "../components/Col";
import Header from "../components/Header";
import "./about.css";

function SearchBook() {
  return (
    <div>
      <nav className="open">Google Books <a className="navstyle" href="/">Saved</a> <a className="navstyle" href="/search">Search</a> </nav>
      <Header>
        <h1>(React) Google Books Search</h1>
        <p >Search for and Save Books of Interest</p>
      </Header>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h2>Book Search :</h2>
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

export default SearchBook;
