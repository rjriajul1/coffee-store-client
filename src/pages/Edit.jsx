import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const Edit = () => {
  const coffee = useLoaderData();
  const navigate = useNavigate();

  const handleEditForm = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const updateCoffee = Object.fromEntries(formData.entries());

    fetch(`https://coffee-store-server-tau-two.vercel.app/coffees/${coffee._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your coffee has been update successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/')
        }
      });
  };
  return (
    <div>
      <div className="lg:px-28 py-16 p-2 bg-base-300 rounded-2xl text-center mt-20">
        <div className="">
          <h1 className="font-semibold text-xl text-primary-content">
            Update Existing Coffee Details
          </h1>
          <p className="content-font text-secondary-content text-xs p-6">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <form onSubmit={handleEditForm}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* coffee name */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label text-primary-content font-semibold text-xl ">
                Name
              </label>
              <input
                type="text"
                name="name"
                defaultValue={coffee.name}
                className="input w-full"
                placeholder="Coffee Name"
              />
            </fieldset>

            {/* coffee chef */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label text-primary-content font-semibold text-xl">
                Chef
              </label>
              <input
                type="text"
                name="chef"
                defaultValue={coffee.chef}
                className="input w-full"
                placeholder="Coffee Chef"
              />
            </fieldset>
            {/* coffee supplier */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label text-primary-content font-semibold text-xl">
                Supplier
              </label>
              <input
                type="text"
                name="supplier"
                defaultValue={coffee.supplier}
                className="input w-full"
                placeholder="Coffee Supplier"
              />
            </fieldset>
            {/* coffee taste */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label text-primary-content font-semibold text-xl">
                Taste
              </label>
              <input
                type="text"
                name="taste"
                defaultValue={coffee.taste}
                className="input w-full"
                placeholder="Coffee taste"
              />
            </fieldset>
            {/* coffee Category  */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label text-primary-content font-semibold text-xl">
                Price
              </label>
              <input
                type="text"
                name="price"
                defaultValue={coffee.price}
                className="input w-full"
                placeholder="Coffee price"
              />
            </fieldset>
            {/* coffee details */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label text-primary-content font-semibold text-xl">
                Details
              </label>
              <input
                type="text"
                name="details"
                defaultValue={coffee.details}
                className="input w-full"
                placeholder="Coffee details"
              />
            </fieldset>
          </div>
          <div className="my-6">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label text-primary-content font-semibold text-xl">
                Photo
              </label>
              <input
                type="text"
                name="photo"
                defaultValue={coffee.photo}
                className="input w-full"
                placeholder="Photo URL"
              />
            </fieldset>
            <input
              className="bg-primary w-full p-2 border rounded-2xl text-xl mt-6"
              type="submit"
              value="Add Coffee"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
