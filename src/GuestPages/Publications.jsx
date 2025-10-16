import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Publications = () => {
    const navigate = useNavigate();

    const [activeCategory, setActiveCategory] = useState("All");

    const filters = ["All", "Marine", "Company", "Oil & Gas", "Others"];

    const publication = [
        {
            image: "images/pub-1.png",
            title: "Lorem ipsum dolor sit amet consectetur. Amet egestas eget.",
            content: "Moreover, community sensitization helps bridge the gap between traditional practices and modern human rights standards. It encourages open dialogues within communities to find common ground between cultural heritage and universal human rights principles.",
            category: "Product updates",
            date: "5 min"
        },
        {
            image: "images/pub-2.png",
            title: "Lorem ipsum dolor sit amet consectetur. Amet egestas eget.",
            content: "Moreover, community sensitization helps bridge the gap between traditional practices and modern human rights standards. It encourages open dialogues within communities to find common ground between cultural heritage and universal human rights principles.",
            category: "Product updates",
            date: "5 min"
        },
        {
            image: "images/pub-3.png",
            title: "Lorem ipsum dolor sit amet consectetur. Amet egestas eget.",
            content: "Moreover, community sensitization helps bridge the gap between traditional practices and modern human rights standards. It encourages open dialogues within communities to find common ground between cultural heritage and universal human rights principles.",
            category: "Product updates",
            date: "5 min"
        },
        {
            image: "images/pub-4.png",
            title: "Lorem ipsum dolor sit amet consectetur. Amet egestas eget.",
            content: "Moreover, community sensitization helps bridge the gap between traditional practices and modern human rights standards. It encourages open dialogues within communities to find common ground between cultural heritage and universal human rights principles.",
            category: "Product updates",
            date: "5 min"
        },
       

    ]

    const handleDetails = () => {
        navigate("/publications/details");
    }
    return (
        <div>
            <div className="containerings min-h-[50vh] py-16 px-6 sm:px-8 flex flex-col justify-center items-center bg-[#0D1834] text-center">
                <h1 className="text-white text-[40px] md:text-[55px] font-normal leading-[50px] md:leading-[65px] text-center">Publications</h1>
            </div> 
            <div className="containerings flex flex-wrap items-center justify-center mt-[80px] gap-3 sm:gap-5 px-6 sm:px-8  ">

                {filters.map((filter) => {
                    const isActive = activeCategory === filter;
                    return (
                        <button
                            key={filter}
                            onClick={() => setActiveCategory(filter)}
                            className={`text-[16px] font-medium px-5 sm:px-6 h-[45px] rounded-[100px] transition-colors duration-200 ${
                                isActive ? "bg-[#01113B] text-white" : "bg-[#f7f7f7] text-[#4b5776]"
                            }`}
                        >
                            {filter}
                        </button>
                    );
                })}
            </div>  
            <div className="containerings mt-[80px] px-6 sm:px-8">
                <div className="flex flex-col gap-8 lg:gap-10">
                {publication.map((item, index) => (
                    <div onClick={handleDetails} key={index} className="flex flex-col cursor-pointer lg:flex-row gap-6 lg:gap-10 border border-[#01113B1F] rounded-[15px] p-5 sm:p-7">
                        <div className="b-white rounded-[12px] p-2 shadow-xl flex-shrink-0">
                            <img
                                className="w-full sm:w-[320px] lg:w-[360px] xl:w-[380px] h-[220px] sm:h-[260px] lg:h-[299px] object-cover rounded-[12px]"
                                src={item.image}
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-wrap items-center gap-2">
                                <p className="text-[#01113BB2] text-[16px] font-normal leading-[24px]">{item.category}</p>
                                <div className="bg-[#62718D] w-[6px] h-[6px] rounded-[100px]"></div>
                                 <p className="text-[#01113BB2] text-[16px] font-normal leading-[24px]">{item.date}</p>

                            </div>
                            <h4 className="text-[#01113B] text-[26px] sm:text-[28px] lg:text-[30px] font-bold leading-[120%]">{item.title}</h4>
                            <p className="text-[#01113BB2] text-[16px] font-normal leading-[24px] max-w-full">{item.content}</p>
                            <button className="bg-[#246CDA] text-white text-[16px] font-bold w-[146px] h-[45px] rounded-[100px] mt-2">Read More</button>
                        </div>
                    </div>
                ))}
                </div>
            </div>

        </div>
    )
}

export default Publications