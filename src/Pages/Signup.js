import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "https://ill-bat-beret.cyclic.app/"

function Signup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    const requestBody = { email, password, firstName, lastName };

    axios
      .post(`${API_URL}/auth/signup`, requestBody)
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        const errorDescription = error?.response?.data?.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="grid grid-cols-1 mx bg-[#7F3DFF]">
      <div className=" flex flex-col justify-center z-20 mt-16 mb-40">
        <form
          className="max-w-[500px]  max-h-[400] w-full mx-auto bg-white p-12 px-11 rounded-lg"
          onSubmit={handleSignupSubmit}
        >
          <h2 className="text-4x1 text-black font-bold text-center">
            {" "}
            Sign up!
          </h2>
          <div className="flex flex-col text-black py-2">
            <label>First Name:</label>
            <input
              className="rounded-lg border-2 mt-2 p-2  text-black"
              type="text"
              name="firstName"
              placeholder="Name"
              value={firstName}
              onChange={handleFirstName}
            />
          </div>
          <div className="flex flex-col text-black py-2">
            <label>Last Name:</label>
            <input
              className="rounded-lg border-2  bg-white mt-2 p-2  text-black"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={handleLastName}
            />
          </div>
          <div className="flex flex-col text-black py-2">
            <label>Email:</label>
            <input
              className="rounded-lg border-2 mt-2 p-2 text-black"
              type="email"
              name="email"
              placeholder="example@example.com"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div className="flex flex-col text-black py-2">
            <label>Password:</label>
            <input
              className="rounded-lg border-2  bg-white mt-2 p-2 text-black"
              type="password"
              name="password"
              placeholder="********"
              value={password}
              onChange={handlePassword}
            />
          </div>

          <div className="w-full my-5 py-2 rounded-lg font-semibold  bg-[#7F3DFF] hover:bg-violet-400 text-white">
            <button className="w-full" type="submit">
              {" "}
              Sign Up
            </button>
          </div>
          <div className="flex justify-center text-black">
            <p>Already have an account?</p>

            <Link
              className="text-[#7F3DFF] hover:text-violet-400 ml-2"
              to={"/login"}
            >
              Login
            </Link>
          </div>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
}

export default Signup;
