import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#0e0e0e] text-white py-10">
      <footer className="footer container mx-auto p-10">
        <aside>
          <NavLink to="/">
            <div className="flex  items-center gap-2 cursor-pointer">
              <h2 className="bg-[#1e99f5] md:w-[40px] md:flex md:h-[40px] font-semibold md:text-2xl rounded-full hidden justify-center items-center">
                F
              </h2>
              <h2 className="md:text-[26px] font-semibold">
                Furni <span className="text-[#1e99f5]">Flex</span>
              </h2>
            </div>
          </NavLink>
        </aside>
        <nav>
          <h6 className="text-[20px] font-semibold">About US</h6>
          <a className="text-[16px] text-[#81859f] font-semibold">
            Master Plan
          </a>
          <a className="text-[16px] text-[#81859f] font-semibold">Jobs</a>
          <a className="text-[16px] text-[#81859f] font-semibold">Invest</a>
          <a className="text-[16px] text-[#81859f] font-semibold">Pressroom</a>
          <a className="text-[16px] text-[#81859f] font-semibold">Blog</a>
          <a className="text-[16px] text-[#81859f] font-semibold">Contact</a>
        </nav>
        <nav>
          <h6 className="text-[20px] font-semibold">Explore EEVE</h6>
          <a className="text-[16px] text-[#81859f] font-semibold">
            Unlock my Robot Power
          </a>
          <a className="text-[16px] text-[#81859f] font-semibold">Starlight</a>
          <a className="text-[16px] text-[#81859f] font-semibold">
            Robot Platform
          </a>
          <a className="text-[16px] text-[#81859f] font-semibold">
            EEVE Roadmap
          </a>
        </nav>
        <nav>
          <h6 className="text-[20px] font-semibold">Community & Support</h6>
          <a className="text-[16px] text-[#81859f] font-semibold">
            Willow X Community
          </a>
          <a className="text-[16px] text-[#81859f] font-semibold">
            Developer & Maker Access
          </a>
          <a className="text-[16px] text-[#81859f] font-semibold">
            Special Cases
          </a>
        </nav>
      </footer>
      <section className="container mx-auto border-t-[1px] border-gray-700">
        <div className="flex md:flex-row flex-col justify-center items-center  md:justify-between mt-8">
          <div>
            <nav className="flex gap-2">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current text-gray-500"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current text-gray-500"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current text-gray-500"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </nav>
          </div>
          <div>
            <ul className="flex md:flex-row flex-col gap-6 text-base text-[#81859f] font-semibold">
              <li>March22 Recap</li>
              <li>Privacy Policy</li>
              <li>March22 Recap</li>
              <li>General Terms</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h2 className="text-base text-[#81859f] font-semibold">
              United States (English)
            </h2>
          </div>
        </div>
      </section>
      <div>
        <h2 className="text-base text-gray-600 py-8 text-center font-semibold">
          EEVE © 2024, All rights reserved.
        </h2>
      </div>
    </div>
  );
};

export default Footer;
