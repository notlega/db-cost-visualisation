import React, { useState } from 'react';

const App = () => {
  const [rows, setRows] = useState(0);
  const [table, setTable] = useState('');
  const [cost, setCost] = useState(0);

  const enumValues = {
    contentType: 32,
    dataType: 32,
    listingType: 32,
    notificationType: 32,
    parameterType: 32,
    userContacts: 32,
  };

  const calculateCostPerRow = (table) => {
    switch (table) {
      case 'access_token':
        return 32 + 32 + 128 + 16 + 96 + 96 + 96;
      case 'advertisements':
        return 32 + 32 + 16 + 96 + 96 + 96 + 96;
      // Add more cases for each table using the provided calculations
      default:
        return 0;
    }
  };

  const calculateCost = () => {
    const costPerRow = calculateCostPerRow(table);
    setCost(costPerRow * rows);
  };

  return (
    <div>
      <label htmlFor="table">Table:</label>
      <select
        id="table"
        value={table}
        onChange={(e) => setTable(e.target.value)}
      >
        <option value="">Choose a table</option>
        <option value="access_token">access_token</option>
        <option value="advertisements">advertisements</option>
        {/* Add more options for each table */}
      </select>

      <label htmlFor="rows">Number of rows:</label>
      <input
        id="rows"
        type="number"
        value={rows}
        onChange={(e) => setRows(e.target.value)}
      />

      <button onClick={calculateCost}>Calculate cost</button>

      <p>Cost: {cost} bits</p>
    </div>
  );
};

export default App;
