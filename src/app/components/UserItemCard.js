import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserItemCard = ({ name, dni, email, hiteDate, onUpdateUser }) => {

    const lowercaseEmail = email.toLowerCase();
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate();

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
    };

    const handleUpdateUser = (updatedData) => {
        // Call the onUpdateUser prop with updated data
        onUpdateUser(updatedData);
        // Redirect to user list view after successful update
        navigate('/users');
    };
    

    return (
        <ul className="grid grid-cols-5 gap-4 mt-6 text-gray-600 dark:text-gray-400">
            <li className="col-span-1 flex flex-col capitalize text-left">
                <span className="mt-2 text-black dark:text-gray-200">{dni}</span>
            </li>
            <li className="col-span-1 flex flex-col capitalize text-left">
                <span className="mt-2 text-black dark:text-gray-200">{name}</span>
            </li>
            <li className="col-span-1 flex flex-col capitalize text-left">
                <span className="mt-2 text-black dark:text-gray-200">{lowercaseEmail}</span>
            </li>
            <li className="col-span-1 flex flex-col capitalize text-left">
                <span className="mt-2 text-black dark:text-gray-200">{hiteDate}</span>
            </li>
            <li className="col-span-1 flex flex-col capitalize text-left">
                {isEditing ? (
                    <Link to={`/edit-user/${dni}`}>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Edit
                        </button>
                    </Link>
                ) : (
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleEditClick}
                    >
                        Update
                    </button>

                )}
            </li>
        </ul>
    );
};
export default UserItemCard;
