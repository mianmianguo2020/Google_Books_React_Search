import React from "react";
import Card from 'react-bootstrap/Card';
import "./style.css";

function SavedBookCard(props) {

  return (
    <div style={{display: 'flex',  flexWrap:'wrap'}}>
    {/* <div> */}
      {props.savedbookData.map(item => (
        // <Card style={{ width: '18rem' }}>
        // <Card key={item.id} style={{width:'100%', display: 'flex', flexWrap:'wrap'}}>
        <Card key={item.id} style={{width:'100%'}}>
          <Card.Img variant="top" src={item.img} style={{width:'40%'}} />
          <Card.Body>
            <Card.Title>
              Book : {item.title}
            </Card.Title>
            <Card.Text style={{width:'60%'}}>
              <strong>Author: </strong> {item.author}<br />
              <strong>Intro:</strong> {item.Intro} <br />
            </Card.Text>
          </Card.Body>
        </Card>))}
    </div>

  )
}

export default SavedBookCard;


 


