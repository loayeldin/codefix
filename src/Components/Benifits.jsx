import React from "react";

function Benifits() {
  return (
    <section className="md:container md:mx-auto mt-24 px-5 md:px-0  ">
      <h2 className=" text-3xl md:text-6xl capitalize font-bold mb-8 text-white text-center">
        unlock the full power <br /> of problem solving skills
      </h2>
      <p className="mb-8 text-center px-3 text-sm  md:text-lg ">
        Discover how to solve problems and improve your development skills
        proccess with intelligent <br /> automation , real-time feedback and
        seemless integration
      </p>
      <div className="grid lg:grid-cols-3 gap-x-6 gap-y-4">
        <div className="card card-compact bg-base-100  shadow-xl">
          <figure>
            <img src="/assets/benifits2.png" alt="benifits img"   className="w-full h-[250px] md:h-[400px] rounded-lg" loading='lazy'/>
          </figure>
          <div className="card-body">
            <h2 className="card-title capitalize text-whiteText">code smarter , not harder</h2>
            <p className="tracking-wide  text-sm md:text-[16px] leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              corporis magni iusto labore alias voluptate maxime ullam fugit
              illum aliquid deserunt dolore tempora ex aut dicta, quas
              voluptates quisquam excepturi?
            </p>
          </div>
        </div>
        <div className="card card-compact bg-base-100  shadow-xl">
          <figure>
            <img
              src="/assets/benifits3.png"
              className="w-full h-[250px] md:h-[400px] rounded-lg"
              alt="benifits img"
              loading='lazy'
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title capitalize text-whiteText">spot errors before they happen</h2>
            <p className="tracking-wide  text-sm md:text-[16px] leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              incidunt numquam explicabo soluta beatae voluptatem, doloribus nam
              iusto, rerum, praesentium doloremque dolores labore itaque
              inventore qui eveniet! Aliquam, delectus accusantium.
            </p>
          </div>
        </div>
        <div className="card card-compact bg-base-100  shadow-xl">
          <figure>
            <img
              src="/assets/benifits1.png"
              className="w-full h-[250px] md:h-[400px] rounded-lg"
              alt="benifits img"
              loading='lazy'
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title capitalize text-whiteText">logical thinking</h2>
            <p className="tracking-wide  text-sm md:text-[16px] leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              incidunt numquam explicabo soluta beatae voluptatem, doloribus nam
              iusto, rerum, praesentium doloremque dolores labore itaque
              inventore qui eveniet! Aliquam, delectus accusantium.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-x-6 gap-y-4 mt-8">
        <div className="card card-compact bg-base-100  shadow-xl">
          <figure>
            <img src="/assets/benifits5.png" alt="benifits img"   className="w-full h-[250px] md:h-[350px] rounded-lg" loading="lazy"/>
          </figure>
          <div className="card-body">
            <h2 className="card-title capitalize text-whiteText">integrate with your existing tools</h2>
            <p className="tracking-wide  text-sm md:text-[16px] leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              corporis magni iusto labore alias voluptate maxime ullam fugit
              illum aliquid deserunt dolore tempora ex aut dicta, quas
              voluptates quisquam excepturi?
            </p>
          </div>
        </div>
        <div className="card card-compact bg-base-100  shadow-xl">
          <figure>
            <img
              src="/assets/benifits6.png"
              className="w-full h-[250px] md:h-[350px] rounded-lg"
              alt="benifits img"
              loading='lazy'
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title capitalize text-whiteText">attach and share code solutions</h2>
            <p className="tracking-wide  text-[16px] leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              incidunt numquam explicabo soluta beatae voluptatem, doloribus nam
              iusto, rerum, praesentium doloremque dolores labore itaque
              inventore qui eveniet! Aliquam, delectus accusantium.
            </p>
          </div>
        </div>
   
      </div>
    </section>
  );
}

export default Benifits;
