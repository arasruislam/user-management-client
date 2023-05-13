import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewUser = () => {
  const newUserHandler = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const gender = form.gender.value;
    const status = form.status.value;
    const newUser = { name, email, gender, status };

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="sm:mx-w-md md:max-w-xl lg:max-w-screen-lg mx-auto">
      <div className="mt-12">
        <Link to="/">
          <p className="flex items-center gap-2 font-semibold text-purple-500">
            <FaArrowAltCircleLeft /> New User
          </p>
        </Link>
      </div>

      <div className="mt-12">
        <div className="text-center space-y-2 mb-4">
          <h1 className="text-3xl font-bold text-gray-700">New User</h1>
          <p className="text-gray-400">
            Use the below form to create a new account
          </p>
        </div>

        {/* Form */}
        <div>
          <form onSubmit={newUserHandler} className="card w-full bg-base-100">
            <div className="card-body">
              {/* name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold text-gray-500">
                    Name
                  </span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              {/* email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold text-gray-500">
                    E-mail
                  </span>
                </label>
                <input
                  name="email"
                  type="text"
                  placeholder="e-mail"
                  className="input input-bordered"
                />
              </div>
              {/* Gender */}
              <div className="form-control flex-row mt-4">
                <label className="label">
                  <span className="label-text text-lg font-semibold mr-12 text-gray-500">
                    Gender
                  </span>
                </label>
                <div className="flex gap-20">
                  {/* Male radio button */}
                  <div className="flex gap-2 text-lg font-semibold items-center">
                    <input
                      type="radio"
                      name="gender"
                      className="radio radio-success"
                      value="Male"
                    />
                    <label>Male</label>
                  </div>
                  {/* Female radio button */}
                  <div className="flex gap-2 text-lg font-semibold items-center">
                    <input
                      type="radio"
                      name="gender"
                      className="radio radio-success"
                      value="Female"
                    />
                    <label>Female</label>
                  </div>
                </div>
              </div>

              {/* status */}
              <div className="form-control flex-row mt-4">
                <label className="label">
                  <span className="label-text text-lg font-semibold mr-12 text-gray-500">
                    Status
                  </span>
                </label>
                <div className="flex gap-20">
                  {/* active radio button */}
                  <div className="flex gap-2 text-lg font-semibold items-center">
                    <input
                      type="radio"
                      name="status"
                      className="radio radio-success"
                      value="Active"
                    />
                    <label>Active</label>
                  </div>
                  {/* Female radio button */}
                  <div className="flex gap-2 text-lg font-semibold items-center">
                    <input
                      type="radio"
                      name="status"
                      className="radio radio-success"
                      value="Inactive"
                    />
                    <label>Inactive</label>
                  </div>
                </div>
              </div>

              <div className="form-control mt-6">
                <button className="btn bg-emerald-500 border-none hover:bg-emerald-400 transition-all duration-300 text-lg">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
