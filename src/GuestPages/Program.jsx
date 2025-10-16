import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";



const Programs = () => {

    const navigate = useNavigate()

const gridTree = [
    {
        image: "/images/image-2.png",
        name: "HUMAN RIGHTS",
        title: "Labour Rights"
    },
     {
        image: "/images/image-3.png",
        name: "HUMAN RIGHTS",
        title: "Inmate’s Rights"
    },
     {
        image: "/images/image-4.png",
        name: "HUMAN RIGHTS",
        title: "Women’s Rights"
    },
     {
        image: "/images/image-5.png",
        name: "HUMAN RIGHTS",
        title: "Children’s Rights"
    },
    {
        image: "/images/image-6.png",
        name: "HUMAN RIGHTS",
        title: "Consumer Rights"
    }
]


const testimonial = [
    {
        testimony: "I have been in jail without going to court for 4 years. I really thank God, I do not regret going to prison because I have learnt alot. HRF Lawyers are wonderful people, they took my case up in court and everything went well.",
        name: "Jesse Hiss",
        title: "Forced Labour",
        image: "/images/img-1.png"
    },
    {
        testimony: "I never believed that HRF could help me regain my freedom after 3 years at Ikoyi prison without trial, but lo and behold, after 3 weeks of going to court, through the help of HRF, I thank GOD, I am free!",
        name: "Kevin Chanthasiriphan",
        title: "Founder",
        image: "/images/img-2.png"
    },
    {
        testimony: "I have been in Eko prison for 3 years but today by the grace of God and through the help of HRF Lawyers, I have been freed. I really appreciate HRF for what they do and what God continues to use them to do",
        name: "Cason Crane",
        title: "Inmate",
        image: "/images/img-3.png"
    },
   
]

const handleDetail = () => {
    navigate("/programs/details")
}
    return (
        <div>
            <div className="containerings min-h-[50vh] py-16 flex flex-col justify-center items-center bg-[#0D1834]">
                <h1 className="text-white text-[40px] md:text-[55px] font-normal leading-[50px] md:leading-[65px] text-center">Programs</h1>
            </div>      
            <div className="containerings mt-[80px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {gridTree.map((item, index) => (
                    <div onClick={handleDetail}
                        key={index}
                        className="flex-shrink-0 cursor-pointer bg-cover bg-center bg-no-repeat h-[300px] sm:h-[320px] md:h-[360px] w-full rounded-[8px] flex flex-col justify-end px-6 sm:px-7 pb-7"
                        style={{
                        backgroundImage: `linear-gradient(180deg, rgba(13,24,52,0.2) -1.83%, rgba(13,24,52,0.4) 32.43%, #0D1834 125.88%), url(${item.image})`,
                        }}
                    >
                        <div className="flex flex-col gap-3">
                            <p className="text-[#ffffff] text-[12px] font-medium">{item.name}</p>
                            <h2 className="text-[#ffffff] text-[25px] font-normal">{item.title}</h2>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
          
               <div className="containerings mt-[80px] md:mt-[120px] bg-[#F7F7F7] py-[60px] md:py-[80px] rounded-[16px]">
                <div className="flex flex-col items-center gap-5 mb-[50px]">
                    <p className="text-[#246CDA] text-[14px] font-bold text-center leading-[14px]">TESTIMONIALS</p>
                    <h2 className="text-[#01113B] text-[34px] md:text-[45px] text-center font-normal max-w-[540px] leading-[40px] md:leading-[55px]">
                        Our beneficiaries have said it all
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {testimonial.map((item)=> (
                        <div key={item.name} className="p-[32px] border flex flex-col gap-5 border-[#01113B1F] rounded-[12px]">

                            <p className="text-[#01113B] max-w-[325px] text-[18px] font-normal leading-[26px]">
                                {item.testimony}
                            </p>
                            <div className="flex items-center gap-2">
                                <img className="rounded-[100px] w-[64px] h-[64px]" src={item.image} alt="" />
                                <div className="flex flex-col gap-1" >
                                    <p className="text-[#01113B] text-[16px] font-bold">{item.name}</p>
                                    <p className="text-[#01113B] text-[14px] font-normal">{item.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Programs
