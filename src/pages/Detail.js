import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Nav } from "react-bootstrap";

let BlackDiv = styled.div`
  background: grey;
  padding: 20px;
`;

export default function Detail(props) {
  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  }, []);

  let [alert, setAlert] = useState(true);
  let id = useParams();
  let [tab, setTab] = useState(0);

  if (parseInt(id.id) >= 3 || parseInt(id.id) < 0) {
    return <div>Wrong item</div>;
  }
  let selectedItem = props.shoes.filter((item) => {
    return item.id === parseInt(id.id);
  });
  if (selectedItem.length !== 0) {
    selectedItem = selectedItem[0];
  }

  return (
    <div className="container">
      {alert === true ? (
        <div className="alert alert-warning">
          Get a discount by completing your order in 2 seconds!
        </div>
      ) : null}
      <BlackDiv></BlackDiv>
      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${
              selectedItem.id + 1
            }.jpg`}
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

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={() => {
            setTab(0);
          }}>button1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1" onClick={() => {
            setTab(1);
          }}>button2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2" onClick={() => {
            setTab(2);
          }}>button3</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab}/>
    </div>
  );
}

function TabContent(props) {
  if (props.tab === 0) {
    return <div>content1</div>
  } 
  if (props.tab === 1) {
    return <div>content2</div>
  }
  if (props.tab === 2) {
    return <div>content3</div>
  }
}
