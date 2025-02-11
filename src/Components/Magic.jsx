import React from "react";

function Magic() {
  return (
    <section className="md:container md:mx-auto mt-24 px-5 md:px-0  ">
      <h2 className=" text-4xl md:text-6xl capitalize font-bold mb-8 text-white text-center">
        see the magic action
      </h2>
      <p className="mb-8 text-center px-3 text-lg ">
        Discover how to solve problems and improve your development skills
        proccess with intelligent <br /> automation , real-time feedback and
        seemless integration
      </p>
      <div className="grid md:grid-cols-2 gap-x-4 gap-y-4 mt-8">
        <div>
          <img src="/assets/magicimg3.jpg" alt="magic img" className="h-[350px] md:h-[550px] w-full rounded-lg" loading="lazy" />
        </div>
        <div >
          <img src="/assets/magicimg.jpg" alt="magic img" className="h-[350px] md:h-[550px] w-full rounded-lg"  loading="lazy" />
        </div>
      </div>
    </section>
  );
}

export default Magic;
