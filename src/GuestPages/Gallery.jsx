import React, { useState } from "react";

const Gallery = () => {

    const photo = [
        { image: "/images/gal-1.png" },
        { image: "/images/gal-2.png" },
        { image: "/images/gal-3.png" },
        { image: "/images/gal-4.png" },
        { image: "/images/gal-5.png" },
        { image: "/images/gal-6.png" },
        { image: "/images/gal-7.png" },
        { image: "/images/gal-8.png" },
        { image: "/images/gal-9.png" },
        { image: "/images/gal-4.png" },
        { image: "/images/gal-5.png" },
        { image: "/images/gal-6.png" },
        { image: "/images/gal-3.png" },
        { image: "/images/gal-4.png" },
        { image: "/images/gal-5.png" },
        { image: "/images/gal-2.png" }
    ];
    const initialRows = 4;
    const columns = 3;
    const initialVisible = initialRows * columns;
    const [showAll, setShowAll] = useState(false);
    const displayedPhotos = showAll ? photo : photo.slice(0, initialVisible);

    return (
        <div>
            <div className="containerings min-h-[50vh] py-16 px-6 sm:px-8 flex flex-col justify-center items-center bg-[#0D1834] text-center">
                <h1 className="text-white text-[38px] sm:text-[48px] md:text-[55px] font-normal leading-[46px] sm:leading-[58px] md:leading-[65px]">Gallery</h1>
            </div>
            <div className="containerings mt-16 sm:mt-20 px-6 sm:px-8 pb-16">
                <div className="max-w-[1120px] mx-auto w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
                        {displayedPhotos.map((item, index) => (
                            <div key={`${item.image}-${index}`} className="bg-white rounded-[12px] p-2 shadow-xl h-full">
                                <img
                                    className="w-full h-[450px] sm:h-[370px] lg:h-[370px] object-cover rounded-[12px]"
                                    src={item.image}
                                    alt="Gallery highlight"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                {photo.length > initialVisible && (
                    <div className="flex justify-center mt-10 sm:mt-12">
                        <button
                            type="button"
                            onClick={() => setShowAll((prev) => !prev)}
                            className="bg-[#01113b] text-white text-[16px] font-medium px-6 sm:px-8 py-3 rounded-[100px] w-full sm:w-auto transition-colors duration-200 hover:bg-[#0a1c4d]"
                        >
                            {showAll ? "Show Less" : "Load More"}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Gallery;
