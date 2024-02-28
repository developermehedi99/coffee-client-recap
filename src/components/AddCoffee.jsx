import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleSubmitForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const category = form.category.value;
    const details = form.details.value;
    const taste = form.taste.value;
    const photo = form.photo.value;
    const suppler = form.suppler.value;
    const coffeeNew = { name, category, details, taste, photo, suppler };
    console.log(coffeeNew);

    // server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(coffeeNew),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "coffee added is successful",
            icon: "success",
          });
        }
      });
  };

  return (
    <div>
      <h1 className="text-3xl text-red-400">Add New Coffee</h1>
      <form onSubmit={handleSubmitForm}>
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
              />
            </label>
          </div>
        </div>
        <input
          className="btn-block btn btn-success"
          type="submit"
          value="add new coffee"
        />
      </form>
    </div>
  );
};

export default AddCoffee;
