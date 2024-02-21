import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement, CategoryScale, LinearScale);

const BarChart = () => {
    const [chartData, setChartData] = useState({
        labels: ['PERSONAL DE APOYO', 'TÉCNICO I+D+i', 'DIRECTIVO', 'PERSONAL DE SERVICIOS'],
        datasets: [
          {
            label: 'Position Distribution',
            data: [0, 0],
            backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
            borderWidth: 1,
          },
        ],
      });

    var baseUrl = 'http://localhost:8000/api/users';

    useEffect(() => {
        const fetchUsers = async () => {
            try {
              const response = await fetch(baseUrl);
      
              if (response.ok) {
                const json = await response.json();
      
                const supportedPositionCount = json.data.filter(
                  (user) => user.position.id === 5
                ).length;
      
                const tecnicPositionCount = json.data.filter(
                  (user) => user.position.id === 8
                ).length;
      
                const directorPositionCount = json.data.filter(
                  (user) => user.position.id === 6
                ).length;
      
                const supportPositionCount = json.data.filter(
                  (user) => user.position.id === 7
                ).length;
      
                setChartData((prevChartData) => ({
                  ...prevChartData,
                  datasets: [
                    {
                      ...prevChartData.datasets[0],
                      data: [supportedPositionCount, tecnicPositionCount, directorPositionCount, supportPositionCount],
                    },
                  ],
                }));
              } else {
                console.error('Error fetching data');
                // Implement additional error handling (e.g., display message)
              }
            } catch (error) {
              console.error('Error:', error);
              // Implement error handling (e.g., display message)
            }
          };
        fetchUsers();
    }, [baseUrl]);

    var data = {
        labels: ['PERSONAL DE APOYO', 'TÉCNICO I+D+i', 'DIRECTIVO', 'PERSONAL DE SERVICIOS'],
    datasets: [
      {
        label: 'Position Distribution',
        data: [0, 0],
        backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  };

    var options = {
        maintainAspectRatio: false,
        scales: {},
        legend: {
            labels: {
                fontSize: 25,
            },
        },
    };

    return (
        <div>
            <Bar data={chartData} height={400} options={options} />
        </div>
    );
};

export default BarChart;
