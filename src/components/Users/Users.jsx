import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import UsersCard from "./UsersCard";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://user-management-server-asru-islam.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [users]);

  const deleteUserManager = (_id) => {
    const process = confirm("Are Your Sure You Want To Delete This manager😢");
    if (process) {
      fetch(
        `https://user-management-server-asru-islam.vercel.app/users/${_id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  };

  return (
    <div className="sm:mx-w-md md:max-w-xl lg:max-w-screen-lg mx-auto">
      <div className="mt-16">
        <Link to="/new_user">
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
              {users.map((user, i) => (
                <UsersCard
                  key={user._id}
                  user={user}
                  index={i + 1}
                  deleteUserManager={deleteUserManager}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
