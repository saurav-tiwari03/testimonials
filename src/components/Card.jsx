import React from "react";
import {FaQuoteLeft,FaQuoteRight} from "react-icons/fa";

import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Card (props) {
    let review = props.review;
    function show () {
        toast( `${review.name} says Hi 👋 `, {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }
    return (
        <div className="flex flex-col md:relative">
            <div className="absolute top-[-7rem] z-[10] mx-auto ">
                <img onClick={show} className="aspect-square h-[140px] w-[140px] z-10 rounded-full" src={review.image} alt="" />
                <div className="w-[145px] h-[145px] bg-[#6499E9] rounded-full absolute top-[-3px] z-[-10] left-[-1px]"></div>
            </div>
            <div className="text-center mt-7">
                <p className="tracking-wider font-bold text-2xl capitalize">{review.name}</p>
            </div>
            <div className="text-center mt-1">
                <p className="text-[#6499E9] uppercase">{review.job}</p>
            </div>

            <div className="text-[#6499E9] mx-auto mt-5">
                <FaQuoteLeft/>
            </div>
            <div className="text-center mt-4 text-slate-500">
                <p>{review.text}</p>
            </div>
            <div className="text-[#6499E9] mx-auto mt-5">
                <FaQuoteRight/>
            </div>
            <ToastContainer/>
        </div>
    )
}