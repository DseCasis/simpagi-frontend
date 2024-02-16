const UserItemCard = ({ name, dni, email, hiteDate }) => {
    return (
        <ul className="grid grid-cols-4 gap-4 mt-6 text-gray-600 dark:text-gray-400">
            <li className="col-span-1 flex flex-col capitalize">
                <span className="mt-2 text-black dark:text-gray-200">{dni}</span>
            </li>
            <li className="col-span-1 flex flex-col capitalize">
                <span className="mt-2 text-black dark:text-gray-200">{name}</span>
            </li>
            <li className="col-span-1 flex flex-col capitalize">
                <span className="mt-2 text-black dark:text-gray-200">{email}</span>
            </li>
            <li className="col-span-1 flex flex-col capitalize">
                <span className="mt-2 text-black dark:text-gray-200">{hiteDate}</span>
            </li>
        </ul>
    );
};
export default UserItemCard;
