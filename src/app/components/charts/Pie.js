import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register( CategoryScale, LinearScale);

const PieChart = () => {
    const [chart, setChart] = useState({});
    const [genderCount, setGenderCount] = useState({
        male: 0,
        female: 0,
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

                    // Actualizar estado con datos de usuarios y contar géneros
                    setChart(json.data);

                    const maleCount = json.data.filter((user) => user.gender === 'M').length;
                    const femaleCount = json.data.filter((user) => user.gender === 'F').length;

                    setGenderCount({
                        male: maleCount,
                        female: femaleCount,
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

    var data = {
        labels: ['Male', 'Female'],
        datasets: [
            {
                label: 'Gender Distribution',
                data: [genderCount.male, genderCount.female],
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
            <Pie data={data} height={400} options={options} />
        </div>
    );
};

export default PieChart;
