import { useState, useEffect } from "react";

export default function CounterTable() {
  const [cnt, setCount] = useState(0);
  const [tableData, setTableData] = useState([]);

  const counter = () => {
    setCount(cnt + 1);
  };

  useEffect(() => {
    setTableData(prev => [...prev, cnt]);
  }, [cnt]);

  return (
    <>
      <h2>Counter: {cnt}</h2>
      <button onClick={counter}>Increment</button>

      <table border="1">
        <thead>
          <tr>
            <th>#</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((value, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
