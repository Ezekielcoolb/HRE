import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Projects = () => {
    const navigate = useNavigate();
    const projects = [
    {
        image: "/images/image-8.png",
        title: "Liberty Pulpit Challenge",
        overview: "Lorem ipsum dolor consectetur adipiscing eiusmod tempor.",
        category: "EDUCATION",
        goal: "30000",
        raise: "22000"
    },
     {
        image: "/images/image-9.png",
        title: "The Angler Project",
        overview: "Lorem ipsum dolor consectetur adipiscing eiusmod tempor.",
        category: "SUPPORT",
        goal: "55000",
        raise: "55000"
    },
     {
        image: "/images/image-10.png",
        title: "The Toolkit Project",
        overview: "Lorem ipsum dolor consectetur adipiscing eiusmod tempor.",
        category: "CHILDHOOD",
        goal: "50000",
        raise: "30000"
    },
      {
        image: "/images/image-8.png",
        title: "Liberty Pulpit Challenge",
        overview: "Lorem ipsum dolor consectetur adipiscing eiusmod tempor.",
        category: "EDUCATION",
        goal: "30000",
        raise: "22000"
    },
     {
        image: "/images/image-9.png",
        title: "The Angler Project",
        overview: "Lorem ipsum dolor consectetur adipiscing eiusmod tempor.",
        category: "SUPPORT",
        goal: "55000",
        raise: "55000"
    },
     {
        image: "/images/image-10.png",
        title: "The Toolkit Project",
        overview: "Lorem ipsum dolor consectetur adipiscing eiusmod tempor.",
        category: "CHILDHOOD",
        goal: "50000",
        raise: "30000"
    }
]

const handleDetails = () => {
    navigate("/projects/details");
}
    return (
        <div>
             <div className="containerings min-h-[50vh] py-16 px-6 sm:px-8 flex flex-col justify-center items-center bg-[#0D1834]">
                <h1 className="text-white text-[40px] md:text-[55px] font-normal leading-[50px] md:leading-[65px] text-center">Projects</h1>
            </div>
             <div className="containerings px-4 sm:px-8 mt-[60px] sm:mt-[80px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
                    {projects.map((item) => {
                        const goalAmount = Number(item.goal) || 0;
                        const raisedAmount = Number(item.raise) || 0;
                        const progressValue = goalAmount > 0 ? Math.min(100, Math.round((raisedAmount / goalAmount) * 100)) : 0;
                        const pointerPosition = Math.min(100, Math.max(0, progressValue));
                        const pointerOffset = pointerPosition <= 5 ? 0 : pointerPosition >= 95 ? 100 : pointerPosition;
                        const pointerTransform = pointerPosition <= 5 ? "translateX(0%)" : pointerPosition >= 95 ? "translateX(-100%)" : "translateX(-50%)";
                        const barColor = progressValue >= 100 ? "#04983A" : "#01113B";

                        return (
                            <div onClick={handleDetails} key={item.title} className="relative cursor-pointer w-full max-w-[420px] mx-auto shadow-2xl rounded-[12px] bg-white">
                                <img className="w-full rounded-t-[12px] h-[220px] sm:h-[240px] md:h-[260px] object-cover" src={item.image} alt="" />
                                <div className="p-6 sm:p-7">
                                    <div className="flex flex-col gap-4 items-center text-center">
                                        <h2 className="text-[#01113B] text-[18px] sm:text-[20px] font-semibold">{item.title}</h2>
                                        <p className="text-[#01113BBF] text-[15px] sm:text-[16px] font-normal leading-[22px] max-w-[260px]">{item.overview}</p>
                                    </div>
                                    <div className="mt-6 sm:mt-8 flex flex-col items-center gap-3">
                                        <div className="relative w-full">
                                            <div className="h-[7px] w-full rounded-[100px] bg-[#D7E2E0]">
                                                <div
                                                    className="h-full rounded-[100px] transition-all duration-300"
                                                    style={{ width: `${pointerPosition}%`, backgroundColor: barColor }}
                                                />
                                            </div>
                                            <div
                                                className="absolute -top-7 flex flex-col items-center gap-[3px]"
                                                style={{ left: `${pointerOffset}%`, transform: pointerTransform }}
                                            >
                                                <span className="rounded-full bg-white px-2 py-[2px] text-[12px] font-semibold shadow-sm"
                                                    style={{ color: barColor }}
                                                >
                                                    {progressValue}%
                                                </span>
                                                <span className="h-3 w-[1px]" style={{ backgroundColor: barColor }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex mt-5 items-center gap-4 justify-between">
                                        <div className="flex items-center gap-1">
                                            <h6 className="text-[#01113B] text-[14px] sm:text-[15px] font-semibold">Goal:</h6>
                                            <p className="text-[#01113BBF] text-[15px] sm:text-[16px] font-normal">${item?.goal}</p>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <h6 className="text-[#01113B] text-[14px] sm:text-[16px] font-semibold">Raised:</h6>
                                            <p className="text-[#01113BBF] text-[15px] sm:text-[16px] font-normal">${item?.raise}</p>
                                        </div>
                                        
                                    </div>
                                    <Link
                                        to=""
                                        className="text-[#01113B] text-[14px] sm:text-[15px] font-bold border-t-[2px] border-[#01113B1A] pb-2 flex items-center gap-2 justify-center pt-4 mt-5 "
                                    >
                                        Read More
                                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.36562 1.38208L5.96719 0.780518C6.24062 0.534424 6.65078 0.534424 6.89687 0.780518L12.2289 6.08521C12.475 6.35864 12.475 6.7688 12.2289 7.01489L6.89687 12.3469C6.65078 12.593 6.24062 12.593 5.96719 12.3469L5.36562 11.7454C5.11953 11.4719 5.11953 11.0618 5.36562 10.7883L8.67422 7.6438H0.826562C0.44375 7.6438 0.170312 7.37036 0.170312 6.98755V6.11255C0.170312 5.75708 0.44375 5.4563 0.826562 5.4563H8.67422L5.36562 2.33911C5.11953 2.06567 5.09219 1.65552 5.36562 1.38208Z" fill="#01113B"/>
                                        </svg>

                                    </Link>
                                </div>
                                <div className="absolute top-[10px] right-[10px] w-fit rounded-[50px] px-3 py-1 bg-[#FBCC36] flex text-[#01113B] text-[12px] font-semibold items-center justify-center ">{item.category}</div>
                            </div>
                        );
                    })}
                </div>
        </div>
    );
};

export default Projects;
