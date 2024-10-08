import React, { useEffect, useState } from "react";
import axios from "axios";

function Table() {
  const baseURL = process.env.REACT_APP_BASEURL;  // Access the environment variable
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://hodleinfobackend.onrender.com/getdata`);
        setData(response.data.rows);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [baseURL]);

  return (
    <table className="table">
      <thead className="table-header">
        <tr>
          <th>#</th>
          <th>Platform</th>
          <th>Last Traded Price</th>
          <th>Buy / Sell Price</th>
          <th>Difference</th>
          <th>Savings</th>
        </tr>
      </thead>
      <tbody>
        {data && data.map((items, index) => (
          <tr key={index} className="table-row">
            <td>{index + 1}</td>
            <td className="platform">{items.base_unit}</td>
            <td>{items.last}</td>
            <td>{`${items.buy}/ ${items.sell}`}</td>
            <td className="difference ">{items.volume}</td>
            <td className="savings">0</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
