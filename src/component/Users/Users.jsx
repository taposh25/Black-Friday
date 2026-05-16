import React, { useEffect, useState } from "react";

import useAxiosSecure from "../../hooks/useAxiosSecure";

const Users = () => {
  const [users, setUsers] = useState([]);
  const axiosSecure = useAxiosSecure();

  // Load Users
  const fetchUsers = async () => {
    try {
      const res = await axiosSecure.get("/users");
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Make Admin
  const handleMakeAdmin = async (id) => {
    try {
      const res = await axiosSecure.patch(
        `/users/${id}/role`,
        {
          role: "admin",
        }
      );

      if (res.data.modifiedCount > 0) {
        alert("User is now Admin");
        fetchUsers();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Remove Admin
  const handleRemoveAdmin = async (id) => {
    try {
      const res = await axiosSecure.patch(
        `/users/${id}/role`,
        {
          role: "user",
        }
      );

      if (res.data.modifiedCount > 0) {
        alert("Admin Removed");
        fetchUsers();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">
        Total Users: {users.length}
      </h2>

      <div className="overflow-x-auto">
        <table className="table w-full border">
          <thead >
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Make Admin</th>
              <th>Remove Admin</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>

                <td>{user.displayName || "No Name"}</td>

                <td>{user.email}</td>

                <td>
                  <span
                    className={`px-3 py-1 rounded text-white ${
                      user.role === "admin"
                        ? "bg-green-500"
                        : "bg-blue-500"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>

                {/* Make Admin */}
                <td>
                  {user.role !== "admin" ? (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                    >
                      Make Admin
                    </button>
                  ) : (
                    <button
                      disabled
                      className="bg-gray-400 text-white px-4 py-2 rounded cursor-not-allowed"
                    >
                      Already Admin
                    </button>
                  )}
                </td>

                {/* Remove Admin */}
                <td>
                  {user.role === "admin" ? (
                    <button
                      onClick={() => handleRemoveAdmin(user._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                    >
                      Remove Admin
                    </button>
                  ) : (
                    <button
                      disabled
                      className="bg-gray-400 text-white px-4 py-2 rounded cursor-not-allowed"
                    >
                      Not Admin
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;