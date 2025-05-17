import React, {  useState } from "react";
import { FaEye } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContext";

const Users = () => {
  // const {removeUser} = use(AuthContext)
  const initialUsers = useLoaderData();
  const [users, setUsers] = useState(initialUsers);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const reaminingUsers = users.filter((user) => user._id !== id);
              setUsers(reaminingUsers);

              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

            //   // delete user inside firebase
            //  removeUser()
            //  .then(result=>{
            //   console.log(result);
            //  })
            //  .catch(error=>{
            //   console.log(error);
            //  })
            }
          });
      }
    });
  };

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
                        className="w-20 rounded-full h-20"
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
                <button
                  onClick={() => handleDelete(user._id)}
                  className="btn btn-ghost btn-xs"
                >
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
