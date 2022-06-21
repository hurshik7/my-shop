import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, incrementAge } from "./../store/userSlice.js";

export default function Cart() {
  let state = useSelector((state) => {
    return state;
  });

  let dispatch = useDispatch();

  return (
    <div>
      <p>{state.user.name}'s Cart! Age: {state.user.age}</p>
      <Button onClick={() => {
        dispatch(incrementAge(100));
      }}>Age plus!</Button>
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
