import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../store";

export default function Cart() {
  let state = useSelector((state) => {
    return state;
  });

  let dispatch = useDispatch();

  return (
    <div>
      {state.user}'s Cart!
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {state.cartInfo.map((element, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{element.name}</td>
                <td>{element.count}</td>
                <td>
                  <Button
                    onClick={() => {
                      dispatch(changeName());
                    }}
                  >
                    +
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
