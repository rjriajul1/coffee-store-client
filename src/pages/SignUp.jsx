import React, { use } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";
import { Link } from "react-router";

const SignUp = () => {
  const { signUp } = use(AuthContext);

  const handleSignUpForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const {email,password,...rest} = Object.fromEntries(formData.entries());
  

    // const email = formData.get("email");
    // const password = formData.get("password");

    // user create inside firebase
    signUp(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Your are create a account successfully",
          showConfirmButton: false,
          timer: 1500,
        });

          const userProfile = {
            ...rest,
            email,
            creationTime:result.user.metadata.creationTime,
            lastSignInTime:result.user.metadata.lastSignInTime

        }
  

        // user info pass to server then to database
        fetch('https://coffee-store-server-tau-two.vercel.app/users',{
          
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userProfile)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                console.log('after post', data);
            }
        })

      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl my-20">
      <div className="card-body">
        <h1 className="text-3xl text-center font-bold">Sign Up now!</h1>
        <form onSubmit={handleSignUpForm} className="fieldset">
          {/* name */}
          <label className="label">Name</label>
          <input type="text" name="name" className="input" placeholder="Name" />
          {/* address */}
          <label className="label">address</label>
          <input
            type="text"
            name="address"
            className="input"
            placeholder="address"
          />
          {/* phone */}
          <label className="label">Phone</label>
          <input
            type="number"
            name="number"
            className="input"
            placeholder="number"
          />
          {/* photo */}
          <label className="label">photo</label>
          <input
            type="text"
            name="photo"
            className="input"
            placeholder="photo URL"
          />
          {/* email */}
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          {/* password */}
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />
          <button
            type="submit"
            className="bg-primary p-2 text-xl rounded-2xl mt-4"
          >
            Sign Up
          </button>
          <p className="text-center text-xl">Already have an account ? Please <Link className="text-blue-500 underline" to='/signIn'>Sign In</Link></p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
