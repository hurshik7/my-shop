import { Table, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Cart() {
  let cartInfo = useSelector((state) => {
    return state.cartInfo;
  });
  console.log(cartInfo);

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {cartInfo.map((element, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{element.name}</td>
                <td>{element.count}</td>
                <td><Button>Edit</Button></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
