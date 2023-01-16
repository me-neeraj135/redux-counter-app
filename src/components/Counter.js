/** @format */

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  step,
  max,
} from "../redux/action/actions";

function Counter() {
  const { count, stepValue, maxValue, message } = useSelector(
    state => state.countReducer
  );
  const dispatch = useDispatch();

  return (
    <div className="max-w-screen-2xl w-4/5  m-auto border-solid border-2 bg-indigo-100 p-9 ">
      <h2 className=" p-1 text-center capitalize text-2xl h-4 text-red-600">
        {message && message}
      </h2>
      <div className="flex  justify-around items-center ">
        <div className=" p-5 m-1   bg-slate-100 flex-auto">
          <h2 className=" p-1 text-center capitalize text-4xl">step</h2>
          <div className="flex justify-around ">
            <span
              className={` shadow-md shadow-slate-500 p-4 m-4 active:bg-violet-700 hover:bg-violet-600 bg-slate-100 ${
                stepValue === 5 && `bg-violet-600`
              }`}
              onClick={() => dispatch(step(5))}
            >
              5
            </span>
            <span
              className={`shadow-md shadow-slate-500 p-4 m-4 active:bg-violet-700 hover:bg-violet-600 bg-slate-100 ${
                stepValue === 10 && `bg-violet-600`
              }`}
              onClick={() => dispatch(step(10))}
            >
              10
            </span>
            <span
              className={`shadow-md shadow-slate-500 p-4 m-4 active:bg-violet-700 hover:bg-violet-600 bg-slate-100 ${
                stepValue === 15 && `bg-violet-600`
              }`}
              onClick={() => dispatch(step(15))}
            >
              15
            </span>
          </div>
        </div>
        <div className="flex-auto">
          <h2 className="text-center text-4xl capitalize">Count-{count}</h2>
        </div>

        <div className=" p-5 m-1   bg-slate-100 flex-auto">
          <h2 className=" p-1 text-center text-4xl capitalize">max value</h2>

          <div className="flex justify-around ">
            <span
              className={`shadow-md shadow-slate-500 p-4 m-4 active:bg-violet-700 hover:bg-violet-600 bg-slate-100 ${
                maxValue === 15 && `bg-violet-600`
              }`}
              onClick={() => dispatch(max(15))}
            >
              15
            </span>
            <span
              className={`shadow-md shadow-slate-500 p-4 m-4 active:bg-violet-700 hover:bg-violet-600 bg-slate-100 ${
                maxValue === 100 && `bg-violet-600`
              }`}
              onClick={() => dispatch(max(100))}
            >
              100
            </span>
            <span
              className={`shadow-md shadow-slate-500 p-4 m-4 active:bg-violet-700 hover:bg-violet-600 bg-slate-100 ${
                maxValue === 200 && `bg-violet-600`
              }`}
              onClick={() => dispatch(max(200))}
            >
              200
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          className="rounded-none bg-slate-100 px-7 py-3 m-4 text-2xl hover:border-double border-4 border-indigo-200 "
          onClick={() => dispatch(increment())}
        >
          increment
        </button>
        <button
          className="rounded-none  bg-slate-100 px-7  py-3 m-4 text-2xl hover:border-double border-4 border-indigo-200"
          onClick={() => dispatch(decrement())}
        >
          decrement
        </button>
        <button
          className="rounded-none  bg-slate-100 px-7  py-3 m-4 text-2xl hover:border-double border-4 border-indigo-200"
          onClick={() => dispatch(reset())}
        >
          reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
