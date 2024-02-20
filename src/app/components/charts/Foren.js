import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const ForenCharts = () => {
    const [chartData, setChartData] = useState({
        labels: ['Position 1', 'Other Positions'],
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
                const response = await fetch('http://localhost:8000/api/users');

                if (response.ok) {
                    const json = await response.json();

                    // Accede a los datos de 'position' desde el objeto anidado
                    const positionCount = json.data.filter((user) => user.position.id === 5).length;
                    const otherPositionCount = json.data.length - positionCount;

                    // Actualiza el gráfico con la información de 'position'
                    setChartData({
                        labels: ['Posición 1', 'Otras Posiciones'],
                        datasets: [
                            {
                                ...chartData.datasets[0],
                                data: [positionCount, otherPositionCount],
                            },
                        ],
                    });
                } else {
                    console.error('Error al obtener datos');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };


        fetchUsers();
    }, [baseUrl]);

    return <Pie data={chartData} />;
};

export default ForenCharts;
