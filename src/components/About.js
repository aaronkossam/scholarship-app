import React from "react";

const About = () => {
  return (
    <div className=" font-title ml-4 mr-4 mt-14 lg:ml-6">
      <div className=" lg:flex gap-80">
        <div>
          <p className=" text-2xl  text-primary-0 font-extrabold">About us</p>
          <p className=" mt-2 text-xl ">
            {" "}
            We provide up-to 100%{" "}
            <span className=" text-primary-0">scholarships</span> to students.
          </p>
        </div>
        <div>
          <p className=" text-sm font-sans italic lg:mt-9">
            Excepteur fugiat fugiat sint amet minim voluptate pariatur consequat
            ex voluptate pariatur consequat ex voluptate.
          </p>
        </div>
      </div>
      <ul className=" flex mt-6 gap-3 mb-4">
        <li className=" border-2 text-center pt-2 pb-2 border-primary-0 bg-primary-0 rounded text-white hover:animate-bounce">
          <p>
            <span className=" font-title text-2xl font-extrabold text-black">
              {" "}
              5M+
            </span>
            <p className=" font-title text-xl font-bold text-black ">
              {" "}
              Applications
            </p>
            <p className=" font-sans italic">
              {" "}
              Number of application received over the years{" "}
            </p>
          </p>
        </li>

        <li className=" hover:animate-bounce border-2 text-center pt-2 pb-2  border-primary-0 bg-primary-0 rounded text-white">
          <p>
            <span className=" font-title text-2xl font-extrabold text-black">
              {" "}
              3.5M+
            </span>
            <p className=" font-title text-xl font-bold text-black ">
              {" "}
              Acceptance
            </p>
            <p className=" font-sans italic">
              {" "}
              Number of application approved over the years{" "}
            </p>
          </p>
        </li>
      </ul>

      <div>
        <p className=" font-title font-extrabold text-2xl  mt-12 lg:ml-40">
          {" "}
          Scholarships <span className=" text-primary-0"> Types</span>
        </p>
        <ul className="  grid gap-9 mt-6 lg:flex lg:mr-40  lg:ml-40">
          <li className=" border-2 text-center pt- pb-2 border-white bg-slate-50 rounded  shadow-md rounded-md">
            <p>
              <span className=" font-title text-2xl font-extrabold text-black">
                {" "}
                <img
                  src="/aseset/65de4e8fa9dea47849bfe182_654d5b61a2e2c9c8d6cdeae7_5f57c46384cca65e79589acf_students1.jpeg"
                  alt=""
                  className=" rounded-"
                />
              </span>
              <p className=" lg:pt-6 font-title text-xl font-bold  text-primary-0">
                {" "}
                Gap Completion Scholarship
              </p>
              <p className=" font-sans italic">
                {" "}
                Sint Lorem do ea reprehenderit id dolor exercitation amet veniam
                labore elit veniam minim.
              </p>
            </p>
          </li>

          <li className=" border-2 text-center pt- pb-2 border-white bg-slate-50 rounded  shadow-md rounded-md">
            <p>
              <span className=" font-title text-2xl font-extrabold text-black">
                {" "}
                <img
                  src="/aseset/czech_University_Students.jpg"
                  alt=""
                  className=" h-52 "
                />
              </span>
              <p className=" lg:pt-5 font-title text-xl font-bold  text-primary-0">
                {" "}
                Access Scholarship
              </p>
              <p className=" font-sans italic">
                {" "}
                Sint Lorem do ea reprehenderit id dolor exercitation amet veniam
                labore elit veniam minim.
              </p>
            </p>
          </li>
          <li className=" border-2 text-center pt- pb-2 border-white bg-slate-50 rounded  shadow-md rounded-md">
            <p>
              <span className=" font-title text-2xl font-extrabold text-black">
                {" "}
                <img
                  src="/aseset/study-mate-india-A-Roadmap-for-African-Students.jpg"
                  alt=""
                  className=" lg: w-lvw"
                />
              </span>
              <p className=" font-title text-xl font-bold  text-primary-0">
                {" "}
                Programmatic Scholarship
              </p>
              <p className=" font-sans italic">
                {" "}
                Sint Lorem do ea reprehenderit id dolor exercitation amet veniam
                labore elit veniam minim.
              </p>
            </p>
          </li>
        </ul>
      </div>

      {/* <div>
        <p className=" mt-6 font-title text-2xl font-extrabold">Requirements</p>
        <ul className=" ">
          <li> Do culpa commodo ex .</li>
          <li> Do culpa commodo ex .</li>
          <li> Do culpa commodo ex .</li>
          <li> Do culpa commodo ex .</li>
          <li> Do culpa commodo ex .</li>
          <li> Do culpa commodo ex .</li>
        </ul>
      </div> */}

      <hr className=" mt-10  mb-3"></hr>
      <div className=" flex gap-11 lg:justify-between">
        <p className=" font-extrabold text-2xl  ml-4  font-title mb-3 lg">
          SUPPORT.
        </p>
        <p> copyright @2024</p>
      </div>
    </div>
  );
};

export default About;
