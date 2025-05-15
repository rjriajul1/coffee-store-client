import React from "react";

const Update = () => {
  return (
    <div>
      <div className="lg:px-28 py-16 p-2 bg-base-300 rounded-2xl text-center mt-20">
        <div className="">
          <h1 className="font-semibold text-xl text-primary-content">
            Add New Coffee
          </h1>
          <p className="content-font text-secondary-content text-xs p-6">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
          <form >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* coffee name */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label text-primary-content font-semibold text-xl ">Name</label>
              <input type="text" className="input w-full" placeholder="Coffee Name" />
            </fieldset>

            {/* coffee chef */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label text-primary-content font-semibold text-xl">Chef</label>
              <input type="text" className="input w-full" placeholder="Coffee Chef" />
            </fieldset>
            {/* coffee supplier */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label text-primary-content font-semibold text-xl">Supplier</label>
              <input type="text" className="input w-full" placeholder="Coffee Supplier" />
            </fieldset>
            {/* coffee taste */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label text-primary-content font-semibold text-xl">Taste</label>
              <input type="text" className="input w-full" placeholder="Coffee taste" />
            </fieldset>
            {/* coffee Category  */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label text-primary-content font-semibold text-xl">Price</label>
              <input type="text" className="input w-full" placeholder="Coffee price" />
            </fieldset>
            {/* coffee details */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label text-primary-content font-semibold text-xl">Details</label>
              <input type="text" className="input w-full" placeholder="Coffee details" />
            </fieldset>
        </div>
           <div className="my-6">
             <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label text-primary-content font-semibold text-xl">Photo</label>
              <input type="text" className="input w-full" placeholder="Photo URL" />
            </fieldset>
            <input className="bg-primary w-full p-2 border rounded-2xl text-xl mt-6" type="submit" value="Add Coffee" />
           </div>
          </form>
      </div>
    </div>
  );
};

export default Update;
