import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
    const [chartData, setChartData] = useState({
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
    });

    var baseUrl = 'http://localhost:8000/api/users';

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(baseUrl, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const json = await response.json();

                    // Contar géneros
                    const maleCount = json.data.filter((user) => user.gender === 'M').length;
                    const femaleCount = json.data.filter((user) => user.gender === 'F').length;

                    // Actualizar estado con datos del gráfico
                    setChartData({
                        labels: ['Male', 'Female'],
                        datasets: [
                            {
                                ...chartData.datasets[0],
                                data: [maleCount, femaleCount],
                            },
                        ],
                    });
                } else {
                    console.error('Error fetching data');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchUsers();
    }, [baseUrl]);

    return <Pie data={chartData} />;
};

export default PieChart;
