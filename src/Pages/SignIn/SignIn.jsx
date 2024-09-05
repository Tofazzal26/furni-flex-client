import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { logInEmailPassword, loading } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const handleSignIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    logInEmailPassword(email, password)
      .then((result) => {
        navigate(from);
        toast.success("Login Success");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Please Enter A Valid Email And Password");
      });
  };
  return (
    <div className="container mx-auto">
      <div className="my-4 md:my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 md:w-[1000px] mx-auto">
          <div className="bg-[#fafafa] col-span-1 flex justify-center items-center">
            <div className="p-2 md:p-8">
              <div>
                <h2 className="text-[25px] font-semibold ">Welcome Back</h2>

                <p className="text-[16px] text-gray-500 font-semibold">
                  Signup for purchase your desire products
                </p>
              </div>
              <form onSubmit={handleSignIn}>
                <div className="relative mt-4">
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full outline-none pb-[12px] rounded-md pt-[22px] px-4 font-semibold border-2"
                  />
                  <h2 className="text-[14px] absolute top-[4px] left-4 text-gray-500 font-semibold">
                    Email Address
                  </h2>
                </div>
                <div className="relative mt-4">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    className="w-full outline-none pb-[12px] rounded-md pt-[22px] px-4 font-semibold border-2"
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute cursor-pointer top-[20px] right-[16px]"
                  >
                    {showPassword ? (
                      <FaEye size={20} />
                    ) : (
                      <FaEyeSlash size={20} />
                    )}
                  </span>
                  <h2 className="text-[14px] absolute top-[4px] left-4 text-gray-500 font-semibold">
                    Password
                  </h2>
                </div>
                <div className="flex items-center mt-3 space-x-2">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    required
                  />
                  <label className="text-gray-700 text-[16px] font-semibold">
                    I agree to the {""}
                    <a href="#" className="text-blue-600 hover:underline">
                      Terms & Policy
                    </a>
                  </label>
                </div>
                <button
                  disabled={loading}
                  className="w-full bg-black py-3 text-white font-semibold text-lg mt-4 rounded-md"
                >
                  {loading ? (
                    <span className="flex justify-center items-center">
                      <TbFidgetSpinner className="animate-spin" size={25} />
                    </span>
                  ) : (
                    "Signin"
                  )}
                </button>
              </form>
              <div>
                <div className="divider font-semibold">or</div>
                <div>
                  <div className="mt-4 flex md:flex-row flex-col justify-between gap-4 items-center">
                    <button className="flex px-2 py-3 w-full rounded-md justify-center items-center gap-2 border-2">
                      <FcGoogle size={30} />
                      Continue to Google
                    </button>
                    <button className="flex px-3 py-3 w-full rounded-md justify-center items-center gap-2 border-2">
                      <FaGithub size={30} />
                      Continue to Github
                    </button>
                  </div>
                  <h2 className="text-center font-semibold mt-4">
                    Have an account?{" "}
                    <NavLink to="/signUp" className="text-blue-600">
                      Sign Up
                    </NavLink>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <img src="/LoginSide.png" alt="" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
