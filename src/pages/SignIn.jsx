import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";

const SignIn = () => {
  const { signIn } = use(AuthContext);
  const handleSignInForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(password, email);

    // Sign In user
    signIn(email, password)
      .then((result) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your account sign In successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(result);
        const signInInfo = {
            email,
            lastSignInTime:result?.user?.metadata?.lastSignInTime

        }

        // updata sign in last time database
        fetch('http://localhost:3000/users', {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(signInInfo)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('after updata data', data);
        })


      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl my-20">
      <div className="card-body">
        <h1 className="text-3xl text-center font-bold">Sign In now!</h1>
        <form onSubmit={handleSignInForm} className="fieldset">
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
            Sign In
          </button>
          <p className="text-center text-xl">
            don't have an account ? Please{" "}
            <Link className="text-blue-500 underline" to="/signUp">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
