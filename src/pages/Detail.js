import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

let BlackDiv = styled.div`
  background : grey;
  padding : 20px;
`
export default function Detail(props) {
  let id = useParams();
  if (parseInt(id.id) >= 3 || parseInt(id.id) < 0) {
    return (
      <div>Wrong item</div>
    );
  }
  let selectedItem = props.shoes.filter((item) => {
    return item.id === parseInt(id.id);
  })
  if (selectedItem.length !== 0) {
    selectedItem = selectedItem[0];
  }

  return (
    <div className="container">
      <BlackDiv></BlackDiv>
      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${selectedItem.id + 1}.jpg`}
            width="100%"
            alt={`shoes${selectedItem.id}`}
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{selectedItem.title}</h4>
          <p>{selectedItem.content}</p>
          <p>{selectedItem.price}</p>
          <button className="btn btn-danger">Order</button>
        </div>
      </div>
    </div>
  );
}
