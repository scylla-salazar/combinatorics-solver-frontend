// PartitionsComponent.jsx
import React, { useState } from 'react';
import axios from 'axios';

const PartitionsComponent = () => {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://combinatorics-solver.onrender.com/partitions', { number: parseInt(number) });
      setResult(response.data.partition_count);
    } catch (error) {
      console.error('Error solving Partitions problem', error);
    }
  };

  return (
    <div>
      <h2>Partitions Problem</h2>
      <input
        type="number"
        placeholder="Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={handleSubmit}>Solve Partitions</button>
      {result && <div>No of Partitions: {result.join(', ')}</div>}
    </div>
  );
};

export default PartitionsComponent;
