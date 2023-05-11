import { Link } from "react-router-dom";
import { HiOutlinePencil, HiXMark } from "react-icons/hi2";

const UsersCard = ({ user, index }) => {
  return (
    <tr className="hover">
      {/* Id */}
      <th>{index}</th>
      {/* Name */}
      <td>{user?.name}</td>
      {/* Gmail */}
      <td>{user?.email}</td>
      {/* Gender */}
      <td>{user?.gender}</td>
      {/* Status */}
      <td>{user?.status}</td>
      {/* Active */}
      <td className="space-x-4">
        <Link to={`/update_user/${user._id}`}>
          <button className="bg-white shadow p-2 rounded-lg hover:scale-110 transition-all duration-300">
            <HiOutlinePencil className="h-6 w-6 text-purple-500" />
          </button>
        </Link>
        <Link>
          <button className="bg-white shadow p-2 rounded-lg hover:scale-110 transition-all duration-300">
            <HiXMark className="h-6 w-6 text-purple-500" />
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default UsersCard;
