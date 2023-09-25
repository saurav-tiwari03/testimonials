import React, { useState } from "react";
import Card from "./Card"; 
import {FiChevronLeft,FiChevronRight} from "react-icons/fi";


export default function Testimonials (props) {

    let reviews = props.reviews;
    const [index,setIndex] = useState(0);
    function leftHandler() {
        if(index-1 < 0){
            setIndex(reviews.length - 1);
        }
        else {
            setIndex(index-1);
        }

    }
    function rightHandler() {
        if(index+1 >= reviews.length ){
            setIndex(0);
        }
        else {
            setIndex(index+1);
        }

    }
    function surpriseHandler() {
        let randomIndex = Math.floor((Math.random() * reviews.length));
        setIndex(randomIndex);


        
    }
    return (
        <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-500 hover:shadow-xl">
            <Card review={reviews[index]}/>

            <div className="flex text-3xl mt-5 gap-3 text-[#6499E9] font-bold items-center mx-auto">
                <button onClick={leftHandler} className="cursor-pointer hover:text-violet-500"><FiChevronLeft/> </button>
                <button onClick={rightHandler} className="cursor-pointer hover:text-violet-500"><FiChevronRight/></button>
            </div>
            <div className="mx-auto mt-5">
                <button onClick={surpriseHandler} className="bg-[#6499E9] hover:bg-violet-500 cursor-pointer transition-all duration-200 px-10 py-2  rounded-md font-bold text-white text-lg">Random</button>
            </div>
        </div>


    )
}