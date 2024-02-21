import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const CreateGraph = () => {
  const [data, setData] = useState([]);
  const [showNewChart, setShowNewChart] = useState(false);

  const getData = async () => {
    const response = await axios.get('http/localhost:8000/api/positions');
    return response.data;
  };

  useEffect(() => {
    getData().then(setData);
  }, []);

  const handleNewChartClick = () => {
    setShowNewChart(true);
  };

  const options = {
    labels: ['Male', 'Female'],
    datasets: [
        {
            label: 'Gender Distribution',
            data: [0, 0],
            backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
            borderWidth: 1,
        },
    ],
  };

  return (
    <div>
      {showNewChart && <Chart />}
      <button onClick={handleNewChartClick}>Crear nuevo gráfico</button>
    </div>
  );
};

const Chart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then(setData);
  }, []);

  const options = {
    labels: ['Male', 'Female'],
    datasets: [
        {
            label: 'Gender Distribution',
            data: [0, 0],
            backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
            borderWidth: 1,
        },
    ],
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default CreateGraph;
