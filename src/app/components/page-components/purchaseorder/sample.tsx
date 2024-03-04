import React from 'react';

function TableTranspose({ data }) {
  // Transpose the data
  const transposedData = transposeTableData(data);

  // Function to transpose the table data
  function transposeTableData(inputData) {
    const keys = Object.keys(inputData[0]);
    return keys.map((key) => inputData.map((row) => row[key]));
  }

  return (
    <table>
      <thead>
        <tr>
          {transposedData[0].map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {transposedData.slice(1).map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableTranspose;
