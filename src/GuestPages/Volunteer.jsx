import React, { useState } from "react";
import { Link } from "react-router-dom";

const Volunteer = () => {
    const faq = [
        {
            title: "We will help you with the choice of fund",
            answer: "Lorem ipsum dolor sit amet consectetur. In enim nullam elementum curabitur elementum. Dignissim imperdiet nunc."
        },

        {
            title: "Donor satisfaction is guaranteed",
            answer: "Lorem ipsum dolor sit amet consectetur. In enim nullam elementum curabitur elementum. Dignissim imperdiet nunc."
        },
        {
            title: "We will help you with the choice of fund",
            answer: "Lorem ipsum dolor sit amet consectetur. In enim nullam elementum curabitur elementum. Dignissim imperdiet nunc."
        }
    ]
    const [activeIndex, setActiveIndex] = useState(0);
    const volunteerImage = "/images/image-11.png";

    const handleToggle = (index) => {
        if (index === activeIndex) return;
        setActiveIndex(index);
    };

    return (
        <div>
            <div className="containerings min-h-[50vh] py-16 px-6 sm:px-8 flex flex-col justify-center items-center bg-[#0D1834] text-center">
                <h1 className="text-white text-[38px] sm:text-[45px] md:text-[55px] font-normal leading-[46px] sm:leading-[55px] md:leading-[65px]">Volunteers</h1>
            </div>
            <div className="containerings flex flex-col lg:flex-row justify-between gap-8 mt-16 lg:mt-20 px-6 sm:px-8">
                <div className="flex flex-col gap-6">
                    <h2 className="text-[#01113B] text-[30px] sm:text-[34px] md:text-[45px] font-normal leading-[38px] sm:leading-[45px] md:leading-[55px] max-w-[520px]">We are a non-profit organization fighting poverty.</h2>
                    <div className="flex flex-col gap-5">
                        {faq.map((item, index) => (
                            <div key={item.title} className="flex flex-col gap-2 border-b border-[#01113B1F] pb-5">
                                <button
                                    type="button"
                                    onClick={() => handleToggle(index)}
                                    className="flex items-center justify-between gap-5 text-left"
                                >
                                    <h2 className="text-[#01113B] text-[18px] font-normal">{item.title}</h2>
                                    <svg
                                        width="13"
                                        height="8"
                                        viewBox="0 0 13 8"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`transform transition-transform duration-200 ${activeIndex === index ? "rotate-0" : "rotate-180"}`}
                                    >
                                        <path
                                            d="M7.16797 0.875L11.9492 5.65625C12.2656 6.00781 12.2656 6.53516 11.9492 6.85156L11.1406 7.66016C10.8242 7.97656 10.2617 7.97656 9.94531 7.66016L6.57031 4.25L3.16016 7.66016C2.84375 7.97656 2.31641 7.97656 1.96484 7.66016L1.19141 6.85156C0.839844 6.53516 0.839844 6.00781 1.19141 5.65625L5.97266 0.875C6.28906 0.558594 6.81641 0.558594 7.16797 0.875Z"
                                            fill="#01113B"
                                        />
                                    </svg>
                                </button>
                                {activeIndex === index && (
                                    <p className="text-[#01113BB2] text-[15px] sm:text-[16px] font-normal leading-[24px] max-w-[520px]">{item.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-white rounded-[12px] p-2 shadow-xl flex-shrink-0 self-center lg:self-start">
                    <img
                        className="w-[260px] sm:w-[360px] lg:w-[440px] h-[220px] sm:h-[320px] lg:h-[400px] object-cover rounded-[12px]"
                        src={volunteerImage}
                        alt="Volunteers supporting community"
                    />
                </div>
            </div>
             <div className="containerings flex flex-col gap-12 items-center bg-[#f7f7f7] py-16 sm:py-20 mt-16 sm:mt-20 px-6 sm:px-8" >
                            <div className="flex flex-col items-center gap-5 text-center"> 
                                 <div className="backdrop-blur-sm bg-transparen h-[34px] px-5 rounded-[24px] w-fit flex items-center gap-2 border border-[#01113B1F]">
                                    <Link className="bg-[#01113b] h-[26px] w-[47px] rounded-[20px] flex items-center justify-center text-white text-[12px] font-medium">New</Link>
                                    <p className="text-[#01113B] text-[12px] font-medium">Human Right Foundation</p>
                                </div>
                                <h2 className="text-[#01113B] text-[32px] sm:text-[34px] md:text-[45px] font-normal leading-[38px] sm:leading-[45px] md:leading-[55px] text-center max-w-[463px]">Join us in service to humanitys</h2>
                                <p className="text-[#01113BB2] text-[16px] sm:text-[18px] font-normal max-w-[587px] leading-[26px] sm:leading-[28px] text-center">
                                    We have our work cut out for us and the task is huge; we need you to partner with us: Donate cash (one-off, monthly, annually or project-based)
                                </p>
                            </div>
                            <div className="w-full max-w-[720px] bg-white rounded-[12px] shadow-sm">
                                <div className="flex flex-col gap-3 border-b border-[#01113B1F] p-5 sm:p-6">
                                    <h2 className="text-[#01113B] text-[20px] font-normal">Become a Partner</h2>
                                    <p className="text-[#01113BB2] text-[16px] font-normal ">Enter your organization details below:</p>
                                </div>
                                  <form className="flex flex-col gap-5 mt-6 p-5 sm:p-6">
                                        <div className="flex flex-col sm:flex-row gap-5">
                                            <input className="bg-[#fafafa] border border-[#01113B1F] rounded-[100px] h-[48px] w-full sm:w-1/2 p-3" type="text" placeholder="First Name" />
                                            <input className="bg-[#fafafa] border border-[#01113B1F] rounded-[100px] h-[48px] w-full sm:w-1/2 p-3" type="text" placeholder="Last Name" />
                                        </div>
                                         <input className="bg-[#fafafa] border border-[#01113B1F] rounded-[100px] h-[48px] w-full p-3" type="text" placeholder="Email Address" />

                                        <div className="flex flex-col sm:flex-row gap-5">
                                            <input className="bg-[#fafafa] border border-[#01113B1F] rounded-[100px] h-[48px] w-full sm:w-1/2 p-3" type="text" placeholder="Phone Number" />
                                            <input className="bg-[#fafafa] border border-[#01113B1F] rounded-[100px] h-[48px] w-full sm:w-1/2 p-3" type="text" placeholder="Occupation" />
                                        </div>
                                         <input className="bg-[#fafafa] border border-[#01113B1F] rounded-[100px] h-[48px] w-full p-3" type="text" placeholder="Organization Name" />
                                         <div className="flex flex-col sm:flex-row gap-5">
                                            <input className="bg-[#fafafa] border border-[#01113B1F] rounded-[100px] h-[48px] w-full sm:w-1/2 p-3" type="text" placeholder="Gender" />
                                            <input className="bg-[#fafafa] border border-[#01113B1F] rounded-[100px] h-[48px] w-full sm:w-1/2 p-3" type="date" placeholder="Date Of Birth" />
                                        </div>
                                         <select className="bg-[#fafafa] border border-[#01113B1F] rounded-[100px] h-[48px] w-full p-3 text-[#01113BB2]" defaultValue="">
                                            <option value="" disabled>Choose Department</option>
                                            <option value="advocacy">Advocacy</option>
                                            <option value="outreach">Community Outreach</option>
                                            <option value="fundraising">Fundraising</option>
                                            <option value="communications">Communications</option>
                                        </select>
                                         <textarea className="bg-[#fafafa] border border-[#01113B1F] rounded-[16px] h-[120px] w-full p-3" placeholder="Address" />
                                         <p className="text-[#01113BB2] text-[14px] font-normal leading-[22px] max-w-[441px]">Will you be willing to participate in meetings to enhance the goals of the organization?</p>
                                          <select className="bg-[#fafafa] border border-[#01113B1F] rounded-[100px] h-[48px] w-full p-3 text-[#01113BB2]" defaultValue="">
                                            <option value="" disabled>Select an option</option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                            <option value="maybe">Maybe</option>
                                        </select>
                                         <p className="text-[#01113BB2] text-[14px] font-normal leading-[22px] max-w-[441px]">
                                            How many hours of your time can you delegate to HUMAN RIGHTS FOUNDATION monthly? ( This is not at a stretch but for the whole month)</p>
                                            <select className="bg-[#fafafa] border border-[#01113B1F] rounded-[100px] h-[48px] w-full p-3 text-[#01113BB2]" defaultValue="">
                                                <option value="" disabled>Select hours</option>
                                                <option value="0-5">0-5 Hours</option>
                                                <option value="6-10">6-10 Hours</option>
                                                <option value="11-20">11-20 Hours</option>
                                                <option value="21+">21+ Hours</option>
                                            </select>
                                             <textarea className="bg-[#fafafa] border border-[#01113B1F] rounded-[16px] h-[120px] w-full p-3" placeholder="Why do you want to be a part of HRE?" />
                                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center mt-6 border-t border-[#01113B1F] pt-4">
                                            <button className="bg-[#dde0e5] text-[#01113B] text-[16px] font-bold w-full sm:w-[174px] h-[50px] rounded-[100px] ">Cancel</button>
                                            <button className="bg-[#246CDA] text-white text-[16px] font-bold w-full sm:w-[174px] h-[50px] rounded-[100px] ">Submit</button>
                                        </div>
                                    </form>
                            </div>
                        </div>
        </div>
    );
};

export default Volunteer;