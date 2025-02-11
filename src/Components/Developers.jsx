import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Developers() {
  return (
    <section className="md:container md:mx-auto mt-24 px-5 md:px-0  ">
      <h2 className="text-3xl md:text-5xl capitalize font-bold mb-8 text-white text-center">
        Developers love problem solving
      </h2>
      <p className="mb-8 text-center px-3 text-lg ">
        Discover how to solve problems and improve your development skills
        proccess with intelligent <br /> automation , real-time feedback and
        seemless integration
      </p>
      <div className="grid grid-cols-12 gap-x-6 gap-y-6">
        <div className="card bg-mainColor col-span-12 md:col-span-6 lg:col-span-4  shadow-xl min-h-[380px]">
          <div className="card-body flex flex-col justify-between">
            <h2 className="card-title text-whiteText capitalize text-2xl leading-9 tracking-wide">
              "problem solving skill cut my coding time in half! it spotted
              errors i never caught"
            </h2>
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-whiteText capitalize font-bold">sarah</h4>
                <p className="text-slate-800 capitalize">Front-end developer</p>
              </div>
              <div className="avatar">
                <div className="ring-whiteText ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 col-span-12 md:col-span-6 lg:col-span-4 gap-y-6  min-h-[380px]">
          <div className="card bg-base-100  shadow-xl min-h-[220px]">
            <div className="card-body flex flex-col justify-between">
              <h2 className="card-title text-whiteText text-[18px]">
                the error detection system is a game-changer,i can focus more on
                the creative solutions
              </h2>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-whiteText capitalize font-bold">Mike</h4>
                  <p className="text-gray-600">Engineer</p>
                </div>
                <div className="avatar">
                  <div className="ring-whiteText ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-base-100  shadow-xl min-h-[220px]">
            <div className="card-body flex flex-col justify-between">
              <h2 className="card-title text-whiteText text-[18px]">
                the error detection system is a game-changer,i can focus more on
                the creative solutions
              </h2>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-whiteText capitalize font-bold">Mike</h4>
                  <p className="text-gray-600">Engineer</p>
                </div>
                <div className="avatar">
                  <div className="ring-whiteText ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[url('../public/assets/developer.jpg')] bg-cover bg-center rounded-lg flex flex-col justify-end  min-h-[380px] col-span-12 lg:col-span-4">
          <div className="flex justify-between px-5 py-6 items-center">
            <div>
              <h3 className="text-whiteText text-xl capitalize font-bold">
                chance to solve
              </h3>
              <p className="text-whiteText capitalize">Senior Front-end</p>
            </div>
            <div className="bg-mainColor rounded-full w-10 h-10 flex justify-center items-center">
              <FontAwesomeIcon icon={faPlay} className="text-whiteText" />
            </div>
          </div>
        </div>
      </div>

      <div className="card lg:card-side  shadow-xl mt-9 bg-background p-3 ">
        <div className="md:min-w-[400px]">
          <figure>
            <img
              src="/assets/developer2.jpg"
              alt="Developer img"
              className="md:w-full md:h-[300px] rounded-lg"
            />
          </figure>
        </div>
        <div className="card-body flex flex-col justify-between">
          <h2 className="card-title text-whiteText text-sm md:text-[17px] leading-7">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
            voluptate natus minima neque rerum quasi iste facilis omnis! Soluta
            ipsa possimus veniam eveniet optio quos iure odit porro sed incidunt
            voluptatum, accusantium culpa, nobis, illo perferendis illum. Porro
            doloremque voluptatum quisquam, magnam, nisi velit molestiae eveniet
            nemo aspernatur, qui quibusdam.
          </h2>
          <div>
            <p className="text-whiteText">David</p>
            <p> Lead software Engineer</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Developers;
