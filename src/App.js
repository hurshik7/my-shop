import "./App.css";
import { Container, Row } from "react-bootstrap";
import MyNavBar from "./MyNavBar";
import data from "./data";
import Product from "./Prouct";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Detail from "./Detail";

function App() {
  let [shoes, setShoes] = useState(data);

  return (
    <div className="App">
      <MyNavBar />

      <Routes>
        <Route path="/detail" element={<Detail/>} />
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <Container>
                <Row>
                  {shoes.map((element, i) => {
                    return <Product img={i} data={shoes[i]} />;
                  })}
                </Row>
              </Container>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
