import { Table } from "react-bootstrap";

export default function Cart() {
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
          <tr>
            <td>1</td>
            <td>Product1</td>
            <td>4</td>
            <td>Edit</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
