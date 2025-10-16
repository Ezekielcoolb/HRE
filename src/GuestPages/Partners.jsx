import React from "react";
import { Link } from "react-router-dom";

const Partners = () => {
     const partner = [
        {image: "/images/part-1.png"},
        {image: "/images/part-2.png"},
        {image: "/images/part-3.png"},
        {image: "/images/part-4.png"},
        {image: "/images/part-5.png"},
        
    ]


    return (
        <div>
             <div className="containerings min-h-[50vh] py-16 px-6 sm:px-8 flex flex-col justify-center items-center bg-[#0D1834]">
                <h1 className="text-white text-[40px] md:text-[55px] font-normal leading-[50px] md:leading-[65px] text-center">Partners</h1>
            </div>
            <div className="containerings mt-16 sm:mt-20 flex flex-col items-center gap-6 px-6 sm:px-8">
                <div className="flex flex-col items-center gap-4 text-center">
                    <h2 className="text-[#01113B] text-[22px] sm:text-[24px]">Proudly supported by</h2>
                    <p className="text-[#01113BB2] text-[16px] sm:text-[18px] font-normal leading-[26px] sm:leading-[28px]">We embrace holistic development and support</p>
                </div>
                <div className="w-full flex flex-wrap justify-center gap-4 sm:gap-6">
                        
                            {partner.map((item, index) => (
                                <div
                                    key={`${item.image}-${index}`}
                                    className="flex h-[90px] w-[138px] sm:h-[110px] sm:w-[160px] items-center justify-center rounded-lg bg-white shadow-sm"
                                >
                                    <img
                                        className="h-full w-full object-contain"
                                        src={item.image}
                                        alt="Partner logo"
                                    />
                                </div>
                            ))}
                    
                </div>
            </div>
            <div className="containerings flex flex-col gap-12 items-center bg-[#f7f7f7] py-16 sm:py-20 mt-16 sm:mt-20 px-6 sm:px-8" >
                <div className="flex flex-col items-center gap-5 text-center"> 
                     <div className="backdrop-blur-sm bg-transparen h-[34px] px-5 rounded-[24px] w-fit flex items-center gap-2 border border-[#01113B1F]">
                        <Link className="bg-[#01113b] h-[26px] w-[47px] rounded-[20px] flex items-center justify-center text-white text-[12px] font-medium">New</Link>
                        <p className="text-[#01113B] text-[12px] font-medium">Human Right Foundation</p>
                    </div>
                    <h2 className="text-[#01113B] text-[34px] md:text-[45px] font-normal leading-[40px] md:leading-[55px] text-center">Join Our Esteemed Partners</h2>
                    <p className="text-[#01113BB2] text-[16px] sm:text-[18px] font-normal max-w-[587px] leading-[26px] sm:leading-[28px] text-center">
                        We have our work cut out for us and the task is huge; we need you to partner with us: Donate cash (one-off, monthly, annually or project-based)
                    </p>
                </div>
                <div className="w-full max-w-[640px] bg-white rounded-[12px] shadow-sm">
                    <div className="flex flex-col gap-3 border-b border-[#01113B1F] p-5 sm:p-6">
                        <h2 className="text-[#01113B] text-[20px] font-normal">Become a Partner</h2>
                        <p className="text-[#01113BB2] text-[16px] font-normal ">Enter your organization details below:</p>
                    </div>
                      <form className="flex flex-col gap-5 mt-6 p-5 sm:p-6">
                            <div className="flex flex-col sm:flex-row gap-5">
                                <input className="bg-[#fafafa] border border-[#01113B1F] rounded-[100px] h-[50px] w-full sm:w-1/2 p-3" type="text" placeholder="First Name" />
                                <input className="bg-[#fafafa] border border-[#01113B1F] rounded-[100px] h-[50px] w-full sm:w-1/2 p-3" type="text" placeholder="Last Name" />
                            </div>
                             <input className="bg-[#fafafa] border border-[#01113B1F] rounded-[100px] h-[50px] w-full p-3" type="text" placeholder="Email Address" />

                            <div className="flex flex-col sm:flex-row gap-5">
                                <input className="bg-[#fafafa] border border-[#01113B1F] rounded-[100px] h-[50px] w-full sm:w-1/2 p-3" type="text" placeholder="Phone Number" />
                                <input className="bg-[#fafafa] border border-[#01113B1F] rounded-[100px] h-[50px] w-full sm:w-1/2 p-3" type="text" placeholder="Occupation" />
                            </div>
                             <input className="bg-[#fafafa] border border-[#01113B1F] rounded-[100px] h-[50px] w-full p-3" type="text" placeholder="Organization Name" />
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center mt-6 border-t border-[#01113B1F] pt-4">
                                <button className="bg-[#dde0e5] text-[#01113B] text-[16px] font-bold w-full sm:w-[174px] h-[52px] rounded-[100px] ">Cancel</button>
                                <button className="bg-[#246CDA] text-white text-[16px] font-bold w-full sm:w-[174px] h-[52px] rounded-[100px] ">Submit</button>
                            </div>
                        </form>
                </div>
            </div>
        </div>
    );
};

export default Partners;
