import React, { useEffect, useState } from 'react';
import './App.css'; // Make sure to create some basic styles for the cards in App.css

function App() {
  const [rows, setRows] = useState([]);
  const [search, setSearch] = useState("");
  const scriptURL = import.meta.env.VITE_CONNECT_URL;

  useEffect(() => {
    fetch(scriptURL)
      .then(res => res.json())
      .then(data => setRows(data));
  }, []);

  const filtered = rows.filter(row =>
    Object.values(row).some(val =>
      String(val).toLowerCase().includes(search.toLowerCase())
    )
  );

  function roundTwoDecimals(number) {
    const roundedNumber = number.toFixed(2);
    return roundedNumber;
  }

  return (
    <div>
      <h1>Resortes Estándar y Reforzados</h1>
      <input
        style={{marginTop: 1 +'rem'}, {marginBottom: 1 +'rem'}}
        type="text"
        placeholder="Buscar..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <table border="1">
        <thead>
          <tr>
            {rows.length > 0 &&
              Object.keys(rows[0]).map((col, i) => <th key={i}>{col}</th>)}
            <th>Precio público</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((row, i) => (
            <tr key={i}>
              {Object.values(row).map((val, j) => <td key={j}>{val}</td>)}
              <td>{roundTwoDecimals(Object.values(row)[Object.values(row).length - 1]*1.35)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;