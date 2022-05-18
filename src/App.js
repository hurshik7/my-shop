import "./App.css";
import { Container, Row } from "react-bootstrap";
import MyNavBar from "./MyNavBar";
import data from "./data";
import Product from "./Prouct";
import { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Detail from "./pages/Detail";

function App() {
  let [shoes, setShoes] = useState(data);

  return (
    <div className="App">
      <MyNavBar />

      <Routes>
        <Route path="/detail/:id" element={<Detail shoes={shoes}/>} />
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <Container>
                <Row>
                  {shoes.map((element, i) => {
                    return <Product img={i} data={shoes[i]} key={i}/>;
                  })}
                </Row>
              </Container>
            </>
          }
        />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<About />} />
        </Route>
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>Get a first order for a free Shoe lace</div>} />
          <Route path="two" element={<div>Birthday coupon</div>} />
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>Company information</h4>
    </div>
  );
}

function Event() {
  return (
    <div>
      <h4>Event page</h4>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
