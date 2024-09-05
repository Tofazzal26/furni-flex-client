import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const lastName = event.target.lastName.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log({ name, lastName, email, password });
  };

  return (
    <div className="container mx-auto">
      <div className="my-4 md:my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 md:w-[1000px] mx-auto">
          <div className="bg-[#fafafa] col-span-1 flex justify-center items-center">
            <div className="p-2 md:p-8">
              <div>
                <h2 className="text-[25px] font-semibold text-center">
                  Welcome To
                </h2>
                <h2 className="text-[40px] font-semibold flex justify-center items-center text-center">
                  Furni <span className="text-[#1e99f5]">Flex</span>
                </h2>
                <p className="text-[16px] text-gray-500 text-center font-semibold">
                  Signup for purchase your desire products
                </p>
              </div>
              <form onSubmit={handleSignUp}>
                <div className="flex md:flex-row flex-col gap-4">
                  <div className="relative mt-4 md:mt-6">
                    <input
                      type="text"
                      name="name"
                      id=""
                      className="w-full outline-none pb-[12px] rounded-md pt-[22px] px-4 font-semibold border-2"
                    />
                    <h2 className="text-[14px] absolute top-[4px] left-4 text-gray-500 font-semibold">
                      First name (optional)
                    </h2>
                  </div>
                  <div className="relative md:mt-6">
                    <input
                      type="text"
                      name="lastName"
                      id=""
                      className="w-full outline-none rounded-md pb-[12px] pt-[22px] px-4 font-semibold border-2"
                    />
                    <h2 className="text-[14px] absolute top-[4px] left-4 text-gray-500 font-semibold">
                      Last name (optional)
                    </h2>
                  </div>
                </div>
                <div className="relative mt-4">
                  <input
                    type="email"
                    name="email"
                    id=""
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
                    id=""
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
                    id="terms"
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
                <button className="w-full bg-black py-4 text-white font-semibold text-lg mt-4 rounded-md">
                  Signup
                </button>
              </form>
              <div>
                <div className="divider font-semibold">or</div>
                <div>
                  <div className="mt-4 flex md:flex-row flex-col justify-between gap-4 items-center">
                    <button className="flex px-3 py-3 w-full rounded-md justify-center items-center gap-2 border-2">
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
                    <NavLink className="text-blue-600">Sign In</NavLink>
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

export default SignUp;
