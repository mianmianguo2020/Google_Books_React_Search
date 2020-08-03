import React from "react";
import CardBtn from "../CardBtn";
import API from "../../utils/API";

import Card from 'react-bootstrap/Card';
import "./style.css";

function BookCard(props) {

  const createPosts= (id) => {
        API.createPosts(id)
      
          .then(res =>
        {console.log(res.data)}
          )
          .catch(err => console.log(err));
      };

  return (
    <div style={{display: 'flex',  flexWrap:'wrap'}}>
    {/* <div> */}
      {props.bookData.map(item => (
        // <Card style={{ width: '18rem' }}>
        // <Card key={item.id} style={{width:'100%', display: 'flex', flexWrap:'wrap'}}>
        <Card key={item.id} style={{width:'100%'}}>
          <Card.Img variant="top" src={item.volumeInfo.imageLinks.thumbnail} style={{width:'40%'}} /> <CardBtn onClick={() => createPosts(item.id)} />
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


 


