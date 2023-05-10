import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Users = () => {
  return (
    <div className="sm:mx-w-md md:max-w-xl lg:max-w-screen-lg mx-auto">
      <div className="mt-16">
        <Link to='/new_user'>
          <button className="btn rounded-none border-none shadow hover:bg-white bg-white text-purple-500">
            New User <FaUser />
          </button>
        </Link>
      </div>

      {/* User Details List */}

      <div className="mt-8">
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th className="bg-gray-800 text-white">ID</th>
                <th className="bg-gray-800 text-white">Name</th>
                <th className="bg-gray-800 text-white">@Email</th>
                <th className="bg-gray-800 text-white">Gender</th>
                <th className="bg-gray-800 text-white">Status</th>
                <th className="bg-gray-800 text-white">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className="hover">
                {/* Id */}
                <th>1</th>
                {/* Name */}
                <td>David Miller</td>
                {/* Gmail */}
                <td>asruthecoder@gmail.com</td>
                {/* Gender */}
                <td>Male</td>
                {/* Status */}
                <td>Active</td>
                {/* Active */}
                <td>Button</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
