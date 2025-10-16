import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const Home = () => {
    const content = [
        {
            title: "Educational Support",
            description: "Children Educational Support",
        },
         {
            title: "TIB Movement",
            description: "Take it Back Media Launch",
        },
         {
            title: "Educational Donation",
            description: "Donation of school matrial",
        },
         {
            title: "Human Right Debate",
            description: "Abuja School Debate",
        }

    ]

    const partner = [
        {image: "/images/part-1.png"},
        {image: "/images/part-2.png"},
        {image: "/images/part-3.png"},
        {image: "/images/part-4.png"},
        {image: "/images/part-5.png"},
        
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
    }
]
const counter = [
    {
        counter: "2.7x",
        title: "EXPERIENCE"
    },
     {
        counter: "98.7+",
        title: "VOLUNTEERS"
    },
     {
        counter: "302M",
        title: "YEARS OF IMPACT"
    },
     {
        counter: "287+",
        title: "PARTNERS"
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

const articles = [
    {
        name: "G-P Named an Industry Leader for the Third Time in NelsonHall’s 2023 Global"
    },
    {
        name: "G-P Recognized with 36 Leader Badges in G2’s 2023 Fall Report"
    },
    {
        name: "G-P Named Employer of Record Industry Leader in The IEC Group Global EOR Study 2023"
    },
   
]
    const [activeIndex, setActiveIndex] = useState(0);
    const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });
    const [isMounted, setIsMounted] = useState(false);

    const listRef = useRef(null);
    const itemRefs = useRef([]);
    const baseRevealClass = isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6";

    const updateIndicator = useCallback((index) => {
        const listEl = listRef.current;
        const itemEl = itemRefs.current[index];

        if (!listEl || !itemEl) {
            return;
        }

        const left = itemEl.offsetLeft - listEl.scrollLeft;
        const width = itemEl.offsetWidth;

        setIndicatorStyle({ left, width });
    }, []);

    useEffect(() => {
        const timeout = window.setTimeout(() => setIsMounted(true), 60);
        return () => window.clearTimeout(timeout);
    }, []);

    useEffect(() => {
        updateIndicator(activeIndex);
        const itemEl = itemRefs.current[activeIndex];
        itemEl?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }, [activeIndex, updateIndicator]);

    useEffect(() => {
        const handleResize = () => updateIndicator(activeIndex);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [activeIndex, updateIndicator]);

    useEffect(() => {
        const listEl = listRef.current;
        if (!listEl) {
            return;
        }

        const handleScroll = () => updateIndicator(activeIndex);
        listEl.addEventListener("scroll", handleScroll);
        return () => listEl.removeEventListener("scroll", handleScroll);
    }, [activeIndex, updateIndicator]);

    return (
        <div>
            <div className={`containerings pt-[80px] md:pt-[30px] pb-16 flex flex-col justify-center gap-6 h-auto min-h-[80vh] md:min-h-[100vh] bg-[linear-gradient(180deg,rgba(13,24,52,0.2)_-1.83%,rgba(13,24,52,0.4)_32.43%,#0D1834_125.88%),url('/images/image-1.png')] bg-cover bg-center bg-no-repeat transition-all duration-700 ease-out ${baseRevealClass}`}>
                <div className="backdrop-blur-sm bg-white/15 h-[34px] px-5 rounded-[24px]  w-fit flex items-center gap-2 transition-transform duration-300 hover:-translate-y-0.5">
                    <Link className="bg-[#01113b] h-[26px] w-[47px] rounded-[20px] flex items-center justify-center text-white text-[12px] font-medium transition-transform duration-200 hover:scale-105">New</Link>
                    <p className="text-white text-[12px] font-medium">Human Right Foundation</p>
                </div>
            <h1 
            className="text-white text-[50px] md:text-[80px] font-normal leading-[55px] md:leading-[85px] max-w-[692px]"
           >We fight for human justice</h1>
            <p className="text-white text-[20px] font-normal leading-[28px] max-w-[499px]">
                Lorem ipsum dolor sit amet consectetur. At in tincidunt tempor auctor pellentesque vel. Varius netus morbi.
            </p>
            <button className="group relative overflow-hidden rounded-[100px] bg-[#246CDA] text-white text-[14px] font-medium w-full sm:w-[200px] max-w-[220px] h-[55px] sm:h-[60px] transition-transform duration-300 hover:-translate-y-1 focus:outline-none">
                <span className="absolute inset-0 bg-gradient-to-r from-[#1f5ab6] via-[#246CDA] to-[#5fa9ff] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative z-10">Read More</span>
            </button>
            </div>
            <div className={`containerings pt-10 pb-10 bg-[#01113B] transition-all duration-700 ease-out delay-100 ${baseRevealClass}`}>
                <div className="relative pb-4">
                    <div
                        ref={listRef}
                        className="flex gap-6 overflow-x-auto md:overflow-visible pb-6 md:pb-8 pr-4 -mr-4 md:pr-0 md:mr-0"
                    >
                        {content.map((item, index) => {
                            const isActive = index === activeIndex;
                            return (
                                <button
                                    type="button"
                                    key={item.title}
                                    onClick={() => setActiveIndex(index)}
                                    ref={(el) => {
                                        itemRefs.current[index] = el;
                                    }}
                                    className={`flex-shrink-0 min-w-[220px] text-left outline-none transition-transform duration-300 ${isActive ? "scale-100 opacity-100" : "opacity-80 hover:opacity-100 hover:-translate-y-1"}`}
                                >
                                    <div className="flex flex-col gap-3">
                                        <p className="text-[#ffffff] text-[12px] font-normal">{item.title}</p>
                                        <h4 
                                            className="text-[#ffffff] text-[20px] max-w-[225px] font-normal leading-[28px]"
                                            style={{fontFamily: "Otomanopee One, sans-serif"}}
                                        >
                                            {item.description}
                                        </h4>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                    <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-white/10" />
                    <span
                        className="absolute bottom-0 h-[3px] rounded-full bg-[#246CDA] transition-all duration-500 ease-out"
                        style={{ width: `${indicatorStyle.width}px`, transform: `translateX(${indicatorStyle.left}px)` }}
                    />
                </div>
            </div>
            <div className={`containerings mt-6  flex flex-col gap-3 pt-12 pb-6 transition-all duration-700 ease-out delay-150 ${baseRevealClass}`}>
                <div className="flex flex-col gap-3 items-center">
                    <h2 className="text-[#01113B] text-[34px] md:text-[45px] leading-[40px] md:leading-[48px] text-center">Our Partners</h2>
                    <p className="text-[#0D1834B2] text-[18px] text-center leading-[26px]">We embrace holistic development and support.</p>
                </div>
                <div className="relative">
                    <Marquee
                        speed={40}
                        gradient={false}
                        pauseOnHover
                        className="[&>div]:flex [&>div]:items-center"
                    >
                        {partner.map((item, index) => (
                            <div
                                key={`${item.image}-${index}`}
                                className="mx-6 flex h-[80px] w-[140px] sm:h-[100px] sm:w-[160px] lg:h-[117px] lg:w-[186px] items-center justify-center transition-transform duration-300 hover:scale-105"
                            >
                                <img
                                    className="h-full w-full object-contain"
                                    src={item.image}
                                    alt="Partner logo"
                                />
                            </div>
                        ))}
                    </Marquee>
                  
                </div>
            </div>
            <div className={`containerings mt-6 transition-all duration-700 ease-out delay-200 ${baseRevealClass}`}>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-10">
                    <div className="flex flex-col gap-3">
                         <div className="backdrop-blur-sm bg-[#f7f7f7] h-[34px] px-5 rounded-[24px]  w-fit flex items-center gap-2">
                            <Link className="bg-[#01113b] h-[26px] w-[47px] rounded-[20px] flex items-center justify-center text-white text-[12px] font-medium">New</Link>
                            <p className="text-[#01113B] text-[12px] font-medium">Human Right Foundation</p>
                        </div>
                        <h2 className="text-[#01113B] text-[34px] md:text-[45px] leading-[40px] md:leading-[55px] ">
                            We advocate against disenfranchised rights
                        </h2>
                    </div>
                    <p className="text-[#01113BB2] text-[16px] leading-[24px] max-w-[500px] md:max-w-[346px]">
                        Lorem ipsum dolor sit amet consectetur. At in tincidunt tempor auctor pellentesque vel. Varius netus morbi.
                    </p>
                </div>
                <div className="mt-10 md:mt-12 overflow-hidden">
                    <div className="flex gap-6 overflow-x-auto pb-6 md:pb-8 hide-scrollbar">
                        {gridTree.map((item, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 bg-cover bg-center bg-no-repeat h-[320px] sm:h-[340px] md:h-[369px] w-[260px] sm:w-[300px] md:w-[369px] rounded-[8px] flex flex-col justify-end px-6 sm:px-7 pb-7 transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(13,24,52,0.32)]"
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
            <div className={`relative containerings w-full overflow-hidden mt-16 md:mt-[80px] rounded-[16px] transition-all duration-700 ease-out delay-300 ${baseRevealClass}`}>
                {/* Background image layer (flipped) */}
                <div className="absolute inset-0 bg-[url('/images/ground-1.png')] bg-cover bg-center bg-no-repeat scale-x-[-1]"></div>

                {/* Content layer (normal, above the background) */}
                <div className="relative z-10 flex flex-col lg:flex-row justify-between gap-10 w-full py-10 md:py-14">
                    <div className="flex flex-col lg:flex-row gap-5 items-start lg:items-center">
                    <h3 className="hidden lg:block rotate-180 [writing-mode:vertical-rl] text-[#246CDA] text-[24px] font-medium leading-[32px] max-h-[250px]">
                        Explore the world for yourself
                    </h3>
                    <p className="text-[#246CDA] text-[14px] font-semibold lg:hidden">Explore the world for yourself</p>

                    <div className="flex flex-col gap-6 lg:gap-8 lg:border-l lg:border-[#E4E4E4] lg:pl-6">
                        <h2 className="text-[#01113B] text-[34px] md:text-[45px] leading-[40px] md:leading-[55px] max-w-[376px]">
                        Discover the nation's leading human right organization.
                        </h2>
                        <p className="text-[#01113BB2] text-[16px] leading-[24px] max-w-[500px] md:max-w-[321px]">
                        Lorem ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem ipsum has been the industry's standard dummy text
                        ever since.
                        </p>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <Link
                            to=""
                            className="group relative overflow-hidden rounded-[100px] bg-[#246CDA] w-full sm:w-[168px] h-[50px] sm:h-[55px] flex items-center justify-center text-base font-semibold text-white transition-transform duration-300 hover:-translate-y-1"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-[#1f5ab6] via-[#246CDA] to-[#5fa9ff] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            <span className="relative z-10">Learn More</span>
                        </Link>

                        <Link
                            to=""
                            className="relative text-[#246CDA] text-[16px] font-bold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-1/2 after:h-[2px] after:bg-[#246CDA] transition-all duration-300 hover:after:w-full hover:text-[#1f5ab6]"
                        >
                            Our Projects
                        </Link>
                        </div>
                    </div>
                    </div>

                    <div className="bg-white p-4 md:p-[15px] rounded-[10px] shadow-md w-full lg:w-auto mt-8 lg:mt-0 transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(13,24,52,0.2)]">
                    <img
                        src="/images/image-7.png"
                        className="w-full md:w-[468px] h-[260px] sm:h-[320px] md:h-[425px] rounded-[10px] object-cover"
                        alt=""
                    />
                    </div>
                </div>
            </div>
            <div className={`containerings mt-16 md:mt-[100px] py-[60px] md:py-[80px] bg-[#246CDA] flex flex-col gap-8 transition-all duration-700 ease-out delay-300 ${baseRevealClass}`}>
                <div className="flex flex-col gap-6 items-center">
                    <h2 className="text-white text-[34px] md:text-[45px] max-w-[588px] text-center leading-[40px] md:leading-[55px]">
                        We advocate against disenfranchised rights
                    </h2>
                    <p className="text-[#ffffff] text-[18px] leading-[28px] text-center max-w-[588px]">
                        Currently have 102 project partners across the world
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
                    {projects.map((item) => {
                        const goalAmount = Number(item.goal) || 0;
                        const raisedAmount = Number(item.raise) || 0;
                        const progressValue = goalAmount > 0 ? Math.min(100, Math.round((raisedAmount / goalAmount) * 100)) : 0;
                        const pointerPosition = Math.min(100, Math.max(0, progressValue));
                        const pointerOffset = pointerPosition <= 5 ? 0 : pointerPosition >= 95 ? 100 : pointerPosition;
                        const pointerTransform = pointerPosition <= 5 ? "translateX(0%)" : pointerPosition >= 95 ? "translateX(-100%)" : "translateX(-50%)";
                        const barColor = progressValue >= 100 ? "#04983A" : "#01113B";

                        return (
                            <div key={item.title} className="group relative w-full max-w-[377px] mx-auto rounded-[12px] bg-white transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_25px_45px_rgba(1,17,59,0.25)]">
                                <img className="w-full rounded-[12px] h-[220px] sm:h-[240px] md:h-[266px] object-cover" src={item.image} alt="" />
                                <div className="p-6">
                                    <div className="flex flex-col gap-4 items-center">
                                        <h2 className="text-[#01113B] text-[20px] font-normal text-center">{item.title}</h2>
                                        <p className="text-[#01113BBF] text-[16px] font-normal leading-[22px] text-center max-w-[248px]">{item.overview}</p>
                                    </div>
                                    <div className="mt-8 md:mt-[60px] flex flex-col items-center gap-3">
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
                                            <h6 className="text-[#01113B] text-[15px] font-semibold">Goal:</h6>
                                            <p className="text-[ #01113BBF] text-[16px] font-normal">${item?.goal}</p>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <h6 className="text-[#01113B] text-[16px] font-semibold">Raised:</h6>
                                            <p className="text-[#01113BBF] text-[16px] font-normal">${item?.raise}</p>
                                        </div>
                                        
                                    </div>
                                    <Link
                                        to=""
                                        className="text-[#01113B] text-[14px] font-bold border-t-[2px] border-[#01113B1A] pb-2 flex items-center gap-2 justify-center pt-4 mt-5 transition-colors duration-300 group-hover:text-[#1f5ab6]"
                                    >
                                        Read More
                                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:translate-x-1">
                                        <path d="M5.36562 1.38208L5.96719 0.780518C6.24062 0.534424 6.65078 0.534424 6.89687 0.780518L12.2289 6.08521C12.475 6.35864 12.475 6.7688 12.2289 7.01489L6.89687 12.3469C6.65078 12.593 6.24062 12.593 5.96719 12.3469L5.36562 11.7454C5.11953 11.4719 5.11953 11.0618 5.36562 10.7883L8.67422 7.6438H0.826562C0.44375 7.6438 0.170312 7.37036 0.170312 6.98755V6.11255C0.170312 5.75708 0.44375 5.4563 0.826562 5.4563H8.67422L5.36562 2.33911C5.11953 2.06567 5.09219 1.65552 5.36562 1.38208Z" fill="#01113B"/>
                                        </svg>

                                    </Link>
                                </div>
                                <div className="absolute top-[10px] right-[10px] w-fit rounded-[50px] px-3 py-1 bg-[#FBCC36] flex text-[#01113B] text-[12px] font-semibold items-center justify-center shadow-sm">{item.category}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className={`containerings mt-[80px] md:mt-[100px] pb-[50px] border-b border-[#01113B1A] transition-all duration-700 ease-out delay-300 ${baseRevealClass}`}>
                <h3 className="text-[#01113B] text-[12px] font-bold text-center leading-[14px] mb-[20px]">GLOBAL CLIENTS AROUND THE WORLD</h3>
                   <div className="flex gap-5 flex-wrap justify-center md:justify-between">

                {counter.map((item) => (
                        <div key={item.title} className="flex flex-col gap-2 items-center min-w-[120px] transition-transform duration-300 hover:-translate-y-1">
                            <h2 className="text-[#01113B] text-[62px] font-normal">{item.counter}</h2>
                            <p className="text-[#0D1834B2] text-[12px] font-bold">{item.title}</p>
                        </div>

                ))}
                 </div>
            </div>
            <div className={`containerings mt-[50px] md:mt-[80px] transition-all duration-700 ease-out delay-300 ${baseRevealClass}`}>
                <div className="bg-[#01113B] flex flex-col lg:flex-row items-center justify-between gap-6 rounded-[12px] transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_25px_45px_rgba(1,17,59,0.35)]">
                    <div className="flex flex-col gap-5 md:p-[50px] p-[20px]">
                        <h2 className="text-[#ffffff] text-[34px] md:text-[45px]  max-w-[450px]  leading-[40px] md:leading-[55px]">
                            Human Rights Foundation Grass-root Campaign
                        </h2>
                        <p className="text-[#ffffff] text-[16px] leading-[24px] max-w-[366px] lg:text-[20px]">
                            Human Rights Foundation Nigeria (HRF) is a registered charity that advocates for the rights of prisoners, ex-offenders, and other disadvantaged people affected by the criminal justice system.
                        </p>
                        <Link className="group relative overflow-hidden bg-[#246CDA] rounded-[100px] w-full sm:w-[202px] h-[50px] sm:h-[55px] flex items-center justify-center text-base font-semibold text-white transition-transform duration-300 hover:-translate-y-1">
                        <span className="absolute inset-0 bg-gradient-to-r from-[#1f5ab6] via-[#246CDA] to-[#5fa9ff] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <span className="relative z-10">Support Project</span>
                        </Link>
                    </div>
                    <img className="w-full lg:w-1/2 h-[260px] sm:h-[360px] lg:h-[510px] object-cover rounded-b-[12px] lg:rounded-b-none lg:rounded-r-[12px]" src="/images/image-11.png" alt="" />
                </div>
            </div>

            <div className={`containerings mt-[100px] md:mt-[120px] transition-all duration-700 ease-out delay-300 ${baseRevealClass}`}>
                <div className="flex flex-col items-center gap-5 mb-[50px]">
                    <p className="text-[#246CDA] text-[14px] font-bold text-center leading-[14px]">TESTIMONIALS</p>
                    <h2 className="text-[#01113B] text-[34px] md:text-[45px]  text-center font-normal max-w-[474px] leading-[40px] md:leading-[55px]">
                        Our beneficiaries have said it all
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {testimonial.map((item)=> (
                        <div key={item.name} className="p-[32px] border flex flex-col gap-5 border-[#01113B1F] rounded-[12px] transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(1,17,59,0.18)]">

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
            <div className={`containerings bg-[#F7F7F9] py-[70px] mt-[80px] transition-all duration-700 ease-out delay-300 ${baseRevealClass}`}>
                <div className="flex flex-col items-center gap-5 mb-[50px]">
                    <p className="text-[#246CDA] text-[14px] font-bold text-center leading-[14px]">PUBLICATIONS</p>
                    <h2 className="text-[#01113B] text-[34px] md:text-[45px] text-center font-normal max-w-[474px] leading-[40px] md:leading-[55px]">
                        Recent Articles
                    </h2>
                </div>
                <div className="flex flex-col lg:flex-row gap-10">
                    <div className="rounded-[12px] bg-white w-full lg:w-1/2 transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(1,17,59,0.2)]">
                        <img className="w-full h-[260px] sm:h-[320px] lg:h-[348px] object-cover rounded-t-[12px]" src="/images/img-12.png" alt="" />
                        <div className="p-[30px] flex flex-col gap-6">
                            <p className="text-[#01113B] text-[11px] font-normal  leading-[14px]">FEATURED</p>
                            <h4 className="text-[#01113B] text-[23px] font-medium leading-[33px] max-w-[320px]">
                                G-P Again Ranked Highest EOR Category Leader – 2023 PEAK Matrix® Assessment by Everest Group
                            </h4>
                            <Link className="text-[#246CDA] text-[15px] font-normal flex items-center gap-2">
                                Download the Report 
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_209_897)">
                                    <path d="M0.6875 8.91105H14.4018M14.4018 8.91105L8.6875 2.24438M14.4018 8.91105L8.6875 15.5777" stroke="#246CDA" stroke-width="1.5"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_209_897">
                                    <rect width="16" height="16" fill="white" transform="translate(0.6875 0.911133)"/>
                                    </clipPath>
                                    </defs>
                                    </svg>

                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between gap-7 w-full lg:w-1/2">
                        {articles.map((item, index) => (
                            <div key={index} className="border-b border-[#01113B1F] pb-[30px] flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-10 transition-transform duration-300 hover:-translate-y-1">
                                <p className="text-[#01113B] text-[19px] font-medium leading-[28px] max-w-[334px]">{item.name}</p>
                                <Link className="group w-[66px] h-[42px] border border-[#01113B1F] rounded-[100px] flex items-center justify-center transition-colors duration-300 hover:border-[#246CDA]">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:translate-x-1">
                                    <path d="M0 8.18742H13.7143M13.7143 8.18742L8 1.52075M13.7143 8.18742L8 14.8541" stroke="#396CF0" stroke-width="1.5"/>
                                    </svg>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home