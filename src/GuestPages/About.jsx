import React, { useState } from "react";
import { Link } from "react-router-dom";



const About = () => {
    const [activeSection, setActiveSection] = useState("what");

    const whatWeDo = [
        {text: "Ensuring that indigent Nigerians have speedy access to justice by providing free world-class legal representation to them."},
        {text: "Advocating for the reform of the Nigerian prison systems. HRF has represented over four thousand indigent clients to date."},
        {text: "Collaborating with other non-governmental organizations to provide counselling, drugs for HIV-infected inmates, construction of facilities such as water boreholes, toilets, and bathrooms."},
        {text: "Protecting the special interests of vulnerable persons from such socio-cultural, social-political, and socio-religious themed abuses such as domestic violence, sexual assaults, forced marriage, female genital mutilation, child labor and all such harmful practices."},
        {text: "Empowering widows and single mothers in business with cash and equipment's needed to start and/or develop their businesses through our Angler Project."},
    ]
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
const teams = [
    {image: "/images/team-1.jpg"},
    {image: "/images/team-2.jpg"},
    {image: "/images/team-3.jpg"},
    {image: "/images/team-4.jpg"},
   
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
    return (
        <div>
            <div className="containerings min-h-[50vh] py-16 flex flex-col justify-center items-center bg-[#0D1834]">
                <h1 className="text-white text-[40px] md:text-[55px] font-normal leading-[50px] md:leading-[65px] text-center">About</h1>
            </div>
            <div className="containerings mt-[80px] md:mt-[100px] flex flex-col lg:flex-row justify-between gap-10">
                {/* Left Text Section */}
                <div className="flex flex-col gap-5 flex-1">
                    <h2 className="text-[#01113B] text-[34px] md:text-[45px] font-normal max-w-[650px] leading-[40px] md:leading-[55px]">
                    We believe every human is entitled to access their rights
                    </h2>
                    <p className="text-[#01113BB2] text-[16px] font-normal leading-[24px] max-w-[650px]">
                    Human Rights Foundation (HRF) Nigeria is a non-governmental organization that exists to advocate and enforce the Rule of Law on the rights of the human person, regardless of such a person’s class, gender, religion or ethnicity.
                    </p>
                    <p className="text-[#01113BB2] text-[16px] font-normal leading-[24px] max-w-[650px]">
                    In 2002, HRF’s Founder, Victor Fakunle visited Keffi Minimum Prison, Nassarawa State, Nigeria on a missions trip. There, he encountered an overcrowded prison with about 40 inmates in cells built for 8 persons. Most of the inmates had been awaiting trial for a long time, in some cases, more than five years. The inmates had no legal representation. Hence, Human Rights Foundation (HRF) has been advocating for the rule of law and providing legal representation for its indigent clients since.
                    </p>
                </div>

                {/* Right Image Section */}
                <div className="relative w-full lg:w-[50%] flex justify-center items-center">
                    {/* Background image */}
                    <div className="absolute inset-0 bg-[url('/images/ground-2.png')] bg-cover bg-left bg-no-repeat"></div>

                    {/* White image box (fixed size) */}
                    <div className="relative bg-white p-4 md:p-[15px] rounded-[10px] shadow-md w-full max-w-[420px] sm:max-w-[468px] h-[320px] sm:h-[380px] lg:h-[425px] lg:translate-x-[15%]">
                    <img
                        src="/images/image-12.png"
                        className="w-full h-full rounded-[10px] object-cover"
                        alt=""
                    />
                    </div>
                </div>
             </div>
            <div className="containerings mt-[80px] md:mt-[100px]">
                <div className="mb-[40px] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#01113B1F]">
                    <button
                        type="button"
                        onClick={() => setActiveSection("what")}
                        className={`w-full sm:flex-1 cursor-pointer px-4 py-3 transition-all duration-200 ${
                            activeSection === "what" ? "border-b-[3px] border-[#246CDA]" : ""
                        }`}
                    >
                        <h2 className="text-[20px] md:text-[22px] font-normal text-[#01113B]">
                            What we do
                        </h2>
                    </button>
                    <button
                        type="button"
                        onClick={() => setActiveSection("how")}
                        className={`w-full sm:flex-1 cursor-pointer px-4 py-3 transition-all duration-200 ${
                            activeSection === "how" ? "border-b-[3px] border-[#246CDA]" : ""
                        }`}
                    >
                        <h2 className="text-[20px] md:text-[22px] font-normal text-[#01113B]">
                            How we do them
                        </h2>
                    </button>
                </div>
                <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">
                     <div className="bg-white p-4 md:p-6 rounded-[10px] shadow-md w-full max-w-[540px] h-[300px] sm:h-[360px] lg:h-[420px]">
                    <img
                        src="/images/image-13.png"
                        className="w-full h-full rounded-[10px] object-cover"
                        alt=""
                    />
                    </div>
                    <div className="flex flex-col gap-4 flex-1">
                        {whatWeDo.map((item) => (
                            <div key={item.text} className="flex gap-4 items-start">
                                <div className="min-w-[32px] min-h-[32px] bg-[#E9F1FE] rounded-full flex justify-center items-center">
                                    <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.33363 10L0 5.62489L1.23793 4.37511L4.33494 7.49823L4.33363 7.49956L11.7621 0L13 1.24978L5.57155 8.75022L4.3345 9.99912L4.33363 10Z" fill="#246CDA"/>
                                    </svg>
                                </div>
                                <p className="text-[#01113BB2] text-[16px] font-normal leading-[24px] max-w-[560px]">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
             <div className="containerings bg-[#246CDA] mt-[80px] py-[60px] md:py-[70px] rounded-[16px]">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-10">
                                <div className="flex flex-col gap-3">
                                     <div className="backdrop-blur-sm bg-[#f7f7f7] h-[34px] px-5 rounded-[24px]  w-fit flex items-center gap-2">
                                        <Link className="bg-[#01113b] h-[26px] w-[47px] rounded-[20px] flex items-center justify-center text-white text-[12px] font-medium">New</Link>
                                        <p className="text-[#01113B] text-[12px] font-medium">Human Right Foundation</p>
                                    </div>
                                    <h2 className="text-[#ffffff] text-[34px] md:text-[45px] leading-[40px] md:leading-[55px] ">
                                        We advocate against disenfranchised rights
                                    </h2>
                                </div>
                                <p className="text-[#FFFFFFE5] text-[16px] leading-[24px] max-w-[500px] md:max-w-[346px]">
                                    Lorem ipsum dolor sit amet consectetur. At in tincidunt tempor auctor pellentesque vel. Varius netus morbi.
                                </p>
                            </div>
                            <div className="mt-10 md:mt-12 overflow-hidden">
                                <div className="flex gap-6 overflow-x-auto pb-6 md:pb-8 hide-scrollbar">
                                    {gridTree.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex-shrink-0 bg-cover bg-center bg-no-repeat h-[320px] sm:h-[340px] md:h-[369px] w-[260px] sm:w-[300px] md:w-[369px] rounded-[8px] flex flex-col justify-end px-6 sm:px-7 pb-7"
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
            </div>
            <div className="containerings mt-[80px] md:mt-[100px]">
               <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-[40px] md:mb-[50px]">
                <h2 className="text-[#01113B] text-[34px] md:text-[45px] font-normal max-w-[620px] leading-[40px] md:leading-[55px]">
                    Meet the Team
                </h2>
                <p className="text-[#01113BB2] text-[16px] font-normal leading-[24px] max-w-[500px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim.                
                </p>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {teams.map((item, index) => (
                        <img
                            key={index}
                            className="w-full aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] rounded-[10px] object-cover object-top"
                            src={item.image}
                            alt="Team member"
                        />
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

export default About
