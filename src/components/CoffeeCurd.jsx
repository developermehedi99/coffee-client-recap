import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const CoffeeCurd = ({ coffee, setCoffees, coffees }) => {
  // eslint-disable-next-line react/prop-types
  const { _id, name, category, details, taste, photo, suppler } = coffee;
  const handleDelete = (_id) => {
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
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((cofe) => cofe._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="card-body w-full justify-between">
        <div>
          <h2>{name}</h2>
          <h2>{category}</h2>
          <h2>{details}</h2>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical">
            <button className="btn join-item bg-green-400">view</button>
            <Link to={`updateCoffee/${_id}`}>
              <button className="btn join-item bg-indigo-400 py-2">edit</button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn join-item bg-red-400"
            >
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCurd;
