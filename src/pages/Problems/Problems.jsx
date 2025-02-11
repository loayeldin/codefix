import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProblemsAction } from "../../network/ProblemsApi";
import { filterProblems } from "../../features/ProblemsSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";
import { redirect, useNavigate } from "react-router-dom";
const TableView = React.lazy(() => import("./Components/TableView"));
function Problems() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { filteredProblems } = useSelector((state) => state.problems);
  const {userData} = useSelector(state=>state.userInfo)
  const [filterObject, setFilterObject] = useState({
    difficulty: "",
    search: "",
  });
  useEffect(() => {
    dispatch(getAllProblemsAction()).then((res) => {
      console.log(res);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilterObject((prev) => ({
      ...prev,
      [name]: value,
    }));
    dispatch(filterProblems({ ...filterObject, [name]: value }));

    // dispatch(filterProblems(filterObject))
  };
  const pickRandomChallenge = (e) => {
    let randomIndex = Math.floor(Math.random() * filteredProblems.length);
    let randomProblemId = filteredProblems[randomIndex].id;
    console.log(randomProblemId);
    navigateToDetails(randomProblemId);
  };
  const navigateToDetails = useCallback((problemId) => {
    if(userData?.idToken || userData?.registered){
      console.log('yes');
    navigate(`/problems/${problemId}`);
    }else{
      console.log('not');
      navigate('/login')
    }
   

  }, [navigate,userData]);
  return (
    <section className="problems-section py-24  ">
      <div className="lg:container md:mx-auto  px-3 md:px-0">
        <div className="cards-section flex flex-col md:flex-row justify-between gap-x-3 gap-y-3">
          <div className="card  image-full md:w-100 shadow-xl z-10">
            <figure>
              <img src="assets/cardbg.svg" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-whiteText text-lg md:text-2xl">
                fix coding interview questions
              </h2>
              <p className="text-textColor text-sm md:text-md ">
                Practice the most commonly asked interview questions from top
                tech companies
              </p>
            </div>
          </div>
          <div className="card image-full md:w-100 shadow-xl z-10">
            <figure>
              <img src="assets/cardbg2.svg" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-whiteText text-lg md:text-2xl">
                Learn to Code with Fun Challenges
              </h2>
              <p className="text-textColor text-sm md:text-md">
                Start with easy problems and gradually level up to advanced
                coding puzzles!
              </p>
            </div>
          </div>
          <div className="card  image-full md:w-100 shadow-xl z-10">
            <figure>
              <img src="assets/cardbg.svg" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-whiteText text-lg md:text-2xl">
                Crack Data Structures & Algorithms!
              </h2>
              <p className="text-textColor text-sm md:text-md">
                Learn the core concepts of DSA through hands-on coding
                challenges and expert insights
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row gap-y-3 gap-x-6">
          <div>
            <label className="input input-bordered input-secondary flex items-center gap-2 w-full min-w-64">
              <input
                type="text"
                className="grow search-input"
                name="search"
                placeholder="Search"
                onChange={handleChange}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="rgb(157,97,243)"
                className="h-4 w-4 opacity-90"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
          <div>
            <select
              className="select select-secondary select-difficulty w-full min-w-64 text-whiteText"
              name="difficulty"
              onChange={handleChange}
            >
              <option selected disabled className="capitalize text-textColor ">
                Select The Difficulty
              </option>
              <option value="All">All</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
          <div>
            <button
              className="rounded-full  p-3 outline outline-mainColor text-whiteText capitalize"
              onClick={pickRandomChallenge}
            >
              <FontAwesomeIcon
                icon={faShuffle}
                className="text-whiteText mr-2"
              />
              pick random
            </button>
          </div>
        </div>

        <div className="mt-5">
          <TableView
            filteredProblems={filteredProblems}
            navigateToDetails={navigateToDetails}
          />
        </div>
      </div>
    </section>
  );
}

export default Problems;
