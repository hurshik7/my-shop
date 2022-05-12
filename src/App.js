import "./App.css";
import { Container, Row} from "react-bootstrap";
import MyNavBar from "./MyNavBar";
import data from './data';
import Product from "./Prouct";
import { useState } from "react";

function App() {
  let [shoes, setShoes] = useState(data);

  return (
    <div className="App">
      <MyNavBar />
      <div className="main-bg"></div>
      <Container>
        <Row>
          {
            shoes.map((element, i) => {
              return (
                <Product img={i} data={shoes[i]} />
              )
            })
          }
        </Row>
      </Container>
    </div>
  );
}

export default App;
