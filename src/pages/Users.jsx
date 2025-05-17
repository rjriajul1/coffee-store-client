import React from "react";
import { FaEye } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { useLoaderData } from "react-router";

const Users = () => {
  const users = useLoaderData();

  return (
    <div className="overflow-x-auto my-20 bg-base-200">
      <table className="table">
        {/* head */}
        <thead className="text-primary-content text-xl">
          <tr className="flex flex-wrap justify-around">
            <th>NO</th>
            <th>Name</th>
            <th>email</th>
            <th>phone</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {users.map((user, index) => (
            <tr key={user._id} className="flex flex-wrap justify-around">
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={user.photo}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-xl">{user.name}</div>
                    <div className="text-sm opacity-50">{user.address}</div>
                  </div>
                </div>
              </td>
              <td>
                <p>{user.email}</p>
              </td>
              <td>{user.number}</td>
              <th>
                <button className="btn btn-ghost btn-xs">
                  <FaEye size={20} color="green" />
                </button>
                <button className="btn btn-ghost btn-xs">
                  <MdEdit size={20} color="blue" />
                </button>
                <button className="btn btn-ghost btn-xs">
                  <MdDelete size={20} color="red" />
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
