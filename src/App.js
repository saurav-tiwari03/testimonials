import React from "react";
import Testimonials from "./components/Testimonials";
import reviews from "./data.js";

export default function App() {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-300 select-none">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Testimonials</h1>
        <div className="bg-violet-400 h-[4px] w-2/5 mt-1 mx-auto"></div>
      </div>
      <Testimonials reviews={reviews}/>
    </div>
  );
};

