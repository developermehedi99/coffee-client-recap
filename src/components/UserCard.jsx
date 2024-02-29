import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UserCard = () => {
  const userloads = useLoaderData();
  const [users, setUsers] = useState(userloads);

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
        fetch(`http://localhost:5000/user/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Good job!",
                text: "user delete is successful!",
                icon: "success",
              });
            }
            console.log("deleted successfully", data);
            const remeaning = users.filter((user) => user._id !== id);
            setUsers(remeaning);
          });
      }
    });
  };
  return (
    <div>
      <h1>ours users: {userloads.length}</h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <th>{user._id}</th>
                  <td>{user.email}</td>
                  <td>{user.createdAt}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="btn"
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
