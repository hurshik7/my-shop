import React from "react";
import {Col} from "react-bootstrap";

export default function Prouct(props) {
  return (
    <Col xs>
      <img
        src={`https://codingapple1.github.io/shop/shoes${props.img + 1}.jpg`}
        width="80%"
        alt="first"
      />
      <h4>{props.data.title}</h4>
      <p>{props.data.content}</p>
      <p>${props.data.price}</p>
    </Col>
  );
}
