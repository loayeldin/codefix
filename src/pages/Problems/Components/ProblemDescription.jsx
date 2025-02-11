import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProblemDetailsAction } from "../../../network/ProblemsApi";

const DifficultyButtonUi = React.lazy(() =>
  import("../../../Components/DifficultyButtonUi")
);

function ProblemDescription() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { problem } = useSelector((state) => state.problemDetails);
  useEffect(() => {
    dispatch(getProblemDetailsAction(id)).then((res) => {
      console.log(res);
    });

    console.log(id);
  }, [id]);
  return (
    <div className="px-2 py-1   h-full">
      <h2 className="text-whiteText text-2xl my-1 font-bold">
        {problem.id}- {problem.challenge}
      </h2>
      <div className="my-5">
        <DifficultyButtonUi problem={problem} />
        <span className="text-[#46c6c2] bg-bgTransparent px-3 py-2 rounded-full">
          {problem.type}
        </span>
      </div>
      <p className="text-whiteText my-4">{problem.description}</p>
      
      {
      problem?.testCases?.map((testCase,index)=>(
        <div key={index} className="my-5 capitalize text-whiteText">
          <h3 className="text-lg ">example case {index+1}:</h3>
          <p className="my-2 ml-3">Input: <span className=" ml-4  text-textColor tracking-widest">{testCase.input}</span></p>
          <p className="ml-3">output: <span className="ml-4 text-textColor tracking-widest">{testCase.output}</span></p>
        </div>
      ))
      }
    </div>
  );
}

export default ProblemDescription;
