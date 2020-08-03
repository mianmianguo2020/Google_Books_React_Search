import React from "react";
import CardBtn from "../CardBtn";
import Card from 'react-bootstrap/Card';
import "./style.css";

function BookCard(props) {

  return (
    <div style={{display: 'flex',  flexWrap:'wrap'}}>
      {props.bookData.map(item => (
        // <Card style={{ width: '18rem' }}>
        <Card key={item.id} style={{width:'100%', display: 'flex', flexWrap:'wrap'}}>
          <Card.Img variant="top" src={item.volumeInfo.imageLinks.thumbnail} style={{width:'40%'}} />
          <Card.Body>
            <Card.Title>
              Book : {item.volumeInfo.title}
            </Card.Title>
            <Card.Text style={{width:'60%'}}>
              <strong>Author: </strong> {item.volumeInfo.authors}<br />
              <strong>Intro:</strong> {item.volumeInfo.description} <br />
            </Card.Text>
          </Card.Body>
        </Card>))}
    </div>

  )
}

export default BookCard;


 


