import React, { useState } from "react";


const ProjectDetails = () => {

    const images =[
        {image: "/images/image-8.png"},
        {image: "/images/image-9.png"},
        {image: "/images/image-10.png"},
        {image: "/images/image-11.png"},
    ]
    const [currentSlide, setCurrentSlide] = useState(0);
    const [touchStartX, setTouchStartX] = useState(null);
    const [touchEndX, setTouchEndX] = useState(null);

    const groupedImages = [];
    for (let i = 0; i < images.length; i += 2) {
        groupedImages.push(images.slice(i, i + 2));
    }

    const handleDotClick = (index) => {
        setCurrentSlide(index);
    };

    const handleTouchStart = (event) => {
        setTouchStartX(event.touches[0].clientX);
    };

    const handleTouchMove = (event) => {
        setTouchEndX(event.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStartX === null || touchEndX === null) return;

        const distance = touchStartX - touchEndX;
        const swipeThreshold = 50;

        if (distance > swipeThreshold && currentSlide < groupedImages.length - 1) {
            setCurrentSlide((prev) => prev + 1);
        } else if (distance < -swipeThreshold && currentSlide > 0) {
            setCurrentSlide((prev) => prev - 1);
        }

        setTouchStartX(null);
        setTouchEndX(null);
    };
    return (
        <div>
             <div className="containerings min-h-[70vh] py-16 px-6 sm:px-8 flex flex-col pt-[150px] items-center bg-[#0D1834] gap-2 text-center">
                <p className="text-white text-[14px] font-medium">26 November 2023 • Charity</p>
                <h1 className="text-white text-[35px] font-normal text-center">
                    Liberty Pulpit Challenge
                </h1>
            </div> 
            <div className="containerings px-6 sm:px-8">
            <img className="w-full h-[220px] sm:h-[280px] md:h-[320px] rounded-[12px] m-auto mt-[-120px] sm:mt-[-150px] object-cover" src="/images/image-11.png" alt="" />
            </div>
            <h2 className="containerings text-[#3f4042] mt-8 text-[22px] sm:text-[24px] max-w-[773px] font-normal leading-[30px] sm:leading-[32px]">
                Children of workers at construction labourers have a miserable childhood due to a host of reasons.
            </h2>
            <div className="containerings mt-7 px-6 sm:px-8 flex flex-col lg:flex-row justify-between gap-6">
                <p className="text-[#01113BB2] text-[16px] font-normal leading-[24px] lg:max-w-[520px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt sed ante ullamcorper tempor. Maecenas semper odio amet libero luctus sodales. Pellentesque sit amet convallis ante. Class aptent taciti sociosqu.</p>
                <p className="text-[#01113BB2] text-[16px] font-normal leading-[24px] lg:max-w-[520px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt sed ante ullamcorper tempor. Maecenas semper odio amet libero luctus sodales. Pellentesque sit amet convallis ante. Class aptent taciti sociosqu.</p>
            </div>
            <div className="containerings mt-7 px-6 sm:px-8">
                <div className="border-b pb-3 border-[#01113B1A]">
                    <img className="w-full h-[240px] sm:h-[320px] md:h-[442px] rounded-[12px] object-cover" src="/images/image-9.png" alt="" />
                    <p className="text-[#01113BB2] text-[12px] sm:text-[13px] font-normal text-center mt-2">AWARD CEREMONY - 27TH Aug, 2024</p>                
                </div>
            </div>
            <div className="containerings mt-7 px-6 sm:px-8 flex flex-col gap-5">
                <h2 className="text-[#3f4042] text-[22px] sm:text-[24px] font-normal leading-[30px] sm:leading-[32px]">
                    Providing a safe environment to child labourers and children of construction workers with an aim to connect them with schools.
                </h2>
                <p className="text-[#01113BB2] text-[16px] font-normal leading-[24px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut nim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non , sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error.
                </p>
                <p className="text-[#01113BB2] text-[16px] font-normal leading-[24px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut nim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non , sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error.
                </p>
            </div>
            <div className="containerings mt-7 px-6 sm:px-8">
                <div
                    className="overflow-hidden"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div
                        className="flex transition-transform duration-500"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {groupedImages.map((group, slideIndex) => (
                            <div key={slideIndex} className="min-w-full flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
                                {group.map((item, index) => (
                                    <img
                                        key={`${slideIndex}-${index}`}
                                        className="w-full sm:w-[48%] h-[220px] sm:h-[300px] md:h-[351px] rounded-[10px] object-cover"
                                        src={item.image}
                                        alt=""
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center items-center gap-3 mt-6">
                    {groupedImages.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => handleDotClick(index)}
                            className={`h-3 w-3 rounded-full ${
                                currentSlide === index ? "bg-[#246CDA]" : "bg-[#ECECEC]"
                            }`}
                            aria-label={`Slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
