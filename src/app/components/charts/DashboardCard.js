import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function DashboardCard() {

    const [users, setUsers] = useState([]);
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalUniquePositions, setTotalUniquePositions] = useState(0);
    const [isLoad, setIsLoad] = useState(true);

    useEffect(() => {
        setIsLoad(true);
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/users');
            const usersData = response.data.data;
            const uniquePositions = new Set(usersData.map(user => user.position.name));
            setUsers(usersData);
            setTotalUsers(response.data.totalUsers);
            setTotalUniquePositions(uniquePositions.size);
            setIsLoad(false);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    return (
        <div className="flex flex-wrap mb-2">
            <div className="flex flex-col w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2">
                <div className="bg-green-600 border rounded shadow p-2">
                    <div className="flex flex-row items-center">
                        <div className="flex-shrink pl-1 pr-4"><i className="fa fa-wallet fa-2x fa-fw fa-inverse"></i></div>
                        <div className="flex-1 text-center">
                            <h5 className="text-white">Posiciones Totales</h5>
                            <h3 className="text-white text-3xl">{totalUniquePositions}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2">
                <div className="bg-blue-600 border rounded shadow p-2">
                    <div className="flex flex-row items-center">
                        <div className="flex-shrink pl-1 pr-4"><i className="fa fa-wallet fa-2x fa-fw fa-inverse"></i></div>
                        <div className="flex-1 text-center">
                            <h5 className="text-white">Personal Total</h5>
                            <h3 className="text-white text-3xl">{totalUsers + ' '}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}