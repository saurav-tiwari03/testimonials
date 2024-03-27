import React from "react";
import Testimonials from "./components/Testimonials";
import reviews from "./data.js";
import Heading from "./components/Heading";

export default function App() {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-300 select-none">
      <Heading />
      <Testimonials reviews={reviews}/>
    </div>
  );
};

