import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, category, details, taste, photo, suppler } = coffee;

  const handleUpdateForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const category = form.category.value;
    const details = form.details.value;
    const taste = form.taste.value;
    const photo = form.photo.value;
    const suppler = form.suppler.value;
    const updateCoffee = { name, category, details, taste, photo, suppler };
    console.log(updateCoffee);

    // server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Good job!",
            text: "coffee update is successful",
            icon: "success",
          });
        }
      });
  };
  return (
    <div>
      <h1 className="text-3xl text-red-400">Update Coffee</h1>
      <form onSubmit={handleUpdateForm}>
        <div className="md:flex mb-7 gap-6">
          <div className="form-control md:w-1/2">
            <label>
              <span>Name</span>
            </label>
            <label>
              <input
                className="input input-bordered w-full"
                type="text"
                name="name"
                placeholder="name"
                defaultValue={name}
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label>
              <span>Category</span>
            </label>
            <label>
              <input
                className="input input-bordered w-full"
                type="text"
                name="category"
                placeholder="category"
                defaultValue={category}
              />
            </label>
          </div>
        </div>
        <div className="md:flex mb-7 gap-6">
          <div className="form-control md:w-1/2">
            <label>
              <span>Details</span>
            </label>
            <label>
              <input
                className="input input-bordered w-full"
                type="text"
                name="details"
                placeholder="details"
                defaultValue={details}
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label>
              <span>taste</span>
            </label>
            <label>
              <input
                className="input input-bordered w-full"
                type="text"
                name="taste"
                placeholder="taste"
                defaultValue={taste}
              />
            </label>
          </div>
        </div>
        <div className="md:flex mb-7 gap-6">
          <div className="form-control md:w-1/2">
            <label>
              <span>photo</span>
            </label>
            <label>
              <input
                className="input input-bordered w-full"
                type="text"
                name="photo"
                placeholder="photo url"
                defaultValue={photo}
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label>
              <span>suppler</span>
            </label>
            <label>
              <input
                className="input input-bordered w-full"
                type="text"
                name="suppler"
                placeholder="suppler"
                defaultValue={suppler}
              />
            </label>
          </div>
        </div>
        <input
          className="btn-block btn btn-success"
          type="submit"
          value="update coffee"
        />
      </form>
    </div>
  );
};

export default UpdateCoffee;
