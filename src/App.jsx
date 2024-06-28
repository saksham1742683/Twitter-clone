import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <body className="bg-black text-white min-h-screen ">
        <div className=" m-0 flex container mx-auto px-[12rem]   ">
          <div className=" first w-[80%]">
            <div className="logo invert my-4 ">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                class="w-10 m-auto r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-lrsllp r-1nao33i r-16y2uox r-8kz0gk"
              >
                <g>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </g>
              </svg>
            </div>
            <div className="sidebar flex justify-end ">
              <ul className=" flex flex-col text-lg space-y-1  px-9 font-semibold ">
                <li className="flex justify-start items-center gap-3 w-fit hover:bg-gray-900  hover:rounded-full  px-5 py-2  hover:cursor-pointer ">
                  {" "}
                  <span class="material-symbols-outlined text-3xl">
                    home
                  </span>{" "}
                  home
                </li>
                <li className="flex justify-start items-center gap-3 w-fit hover:bg-gray-900  hover:rounded-full  px-5 py-2  hover:cursor-pointer ">
                  {" "}
                  <span class="material-symbols-outlined text-3xl">search</span>
                  Explore
                </li>
                <li className="flex justify-start items-center gap-3 w-fit hover:bg-gray-900  hover:rounded-full  px-5 py-2  hover:cursor-pointer ">
                  {" "}
                  <span class="material-symbols-outlined text-3xl">
                    notifications
                  </span>
                  Notification
                </li>
                <li className="flex justify-start items-center gap-3 w-fit hover:bg-gray-900  hover:rounded-full  px-5 py-2  hover:cursor-pointer ">
                  {" "}
                  <span class="material-symbols-outlined text-3xl">mail</span>
                  Messages
                </li>
                <li className="flex justify-start items-center gap-3 w-fit hover:bg-gray-900  hover:rounded-full  px-5 py-2  hover:cursor-pointer ">
                  {" "}
                  <span class="material-symbols-outlined text-3xl">
                    disabled_by_default
                  </span>
                  Grok
                </li>
                <li className="flex justify-start items-center gap-3 w-fit hover:bg-gray-900  hover:rounded-full  px-5 py-2  hover:cursor-pointer ">
                  {" "}
                  <span class="material-symbols-outlined text-3xl">
                    bookmarks
                  </span>
                  Bookmarks
                </li>
                <li className="flex justify-start items-center gap-3 w-fit hover:bg-gray-900  hover:rounded-full  px-5 py-2  hover:cursor-pointer ">
                  {" "}
                  <span class="material-symbols-outlined text-3xl">people</span>
                  Communities
                </li>
                <li className="flex justify-start items-center gap-3 w-fit hover:bg-gray-900  hover:rounded-full  px-5 py-2  hover:cursor-pointer ">
                  {" "}
                  <span class="material-symbols-outlined text-3xl">close</span>
                  premium
                </li>
                <li className="flex justify-start items-center gap-3 w-fit hover:bg-gray-900  hover:rounded-full  px-5 py-2  hover:cursor-pointer ">
                  {" "}
                  <span class="material-symbols-outlined text-3xl">person</span>
                  Profile
                </li>
                <li className="flex justify-start items-center gap-3 w-fit hover:bg-gray-900  hover:rounded-full  px-5 py-2  hover:cursor-pointer ">
                  {" "}
                  <span class="material-symbols-outlined text-3xl">
                    More_Horiz
                  </span>
                  More
                </li>
              </ul>
            </div>
          </div>
          <div className=" second w-full border-[1px] border-x-white border-y-black ">
            <div className="top flex p-1 relative ">
              <div className="absolute w-14 h-1 rounded-full bg-blue-700 bottom-0 left-[17%] "></div>
              <div className="left bg-green-3001 w-1/2 flex justify-center font-bold text-[1rem] ">For You</div>
              <div className="right bg-red-3001  w-1/2 flex justify-center  font-bold text-[1rem] ">Following</div>
              <div className="settings   "><span class="material-symbols-outlined">
settings
</span></div>
            </div>
            <div className=" h-[1px] size-full bg-gray-700"></div>
          </div>
          <div className=" third w-full bg-red-20000">
            <div className="search m-3">
              <input
                type="text"
                placeholder="search"
                className=" w-2/3 rounded-full bg-[#16181c] text-white px-4 py-1"
              />
            </div>
            <div className="whats bg-[#16181c] w-2/3 m-3  rounded-xl py-5 space-y-1 ">
              <h1 className="text-lg font-bold  px-3  "> Whats happening</h1>

              <div className="item p-3 hover:bg-gray-800 cursor-pointer  ">
                <div className=" text-sm text-gray-200">Trending in india</div>
                <div className=" font-bold ">#Orry</div>
                <div className=" text-sm text-gray-200">42.5k Posts</div>
              </div>

              <div className="item p-3 hover:bg-gray-800 cursor-pointer  ">
                <div className=" text-sm text-gray-200">Trending in india</div>
                <div className=" font-bold ">#Orry</div>
                <div className=" text-sm text-gray-200">42.5k Posts</div>
              </div>
              
              <div className="item p-3 hover:bg-gray-800 cursor-pointer  ">
                <div className=" text-sm text-gray-200">Trending in india</div>
                <div className=" font-bold ">#Orry</div>
                <div className=" text-sm text-gray-200">42.5k Posts</div>
              </div>

              <div className="item p-3 hover:bg-gray-800 cursor-pointer  ">
                <div className=" text-sm text-gray-200">Trending in india</div>
                <div className=" font-bold ">#Orry</div>
                <div className=" text-sm text-gray-200">42.5k Posts</div>
              </div>
            </div>
            <div className="who bg-[#16181c] w-2/3 m-3  rounded-xl py-5 space-y-1 ">
              <h1 className="text-lg font-bold  px-3  "> Who To Follow</h1>

              <div className="item p-3  cursor-pointer space-y-3  ">
                <div className=" font-semibold text-gray-200">Akshay Kumar</div>
                <div className=" font-semibold ">#Code With Harry</div>
                <div className=" font-semibold text-gray-200">Imran Hashmi</div>
              </div>
              <div className=" text-blue-800 underline px-2  "> show more</div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
