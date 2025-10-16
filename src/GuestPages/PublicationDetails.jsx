import React from "react";
import { Link } from "react-router-dom";

const PublicationDetails = () => {
    
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
    ]
    return (
        <div>
            <div className="bg-[#01113B] w-full h-[80px]">
            </div>
            <div className="containerings mt-[30px] pb-6 px-6 sm:px-8 flex flex-col gap-2 border-b border-[#01113B1F] w-full">
                <Link to="/publications" className="flex items-center gap-2 text-[#e41738] text-[15px] sm:text-[16px] font-medium">
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.288086 5.99999L6.29809 12.01L7.71209 10.596L3.11209 5.99599L7.71209 1.39599L6.29809 -0.0100098L0.288086 5.99999Z" fill="#E41738"/>
                </svg>

                    Explore Publications
                </Link>
                <h3 className="text-[#01113B] text-[32px] sm:text-[40px] md:text-[50px] font-normal leading-[40px] sm:leading-[50px] md:leading-[60px] max-w-[802px]">
                    Lorem ipsum dolor sit amet consectetur. Sed pellentesque felis.
                </h3>
            </div>
            <div className="containerings mt-[60px] lg:mt-[80px] px-6 sm:px-8 flex flex-col lg:flex-row justify-between gap-10">
                <div className="flex flex-col gap-5 w-full lg:w-[65%]">
                    <img className="w-full h-[220px] sm:h-[320px] lg:h-[400px] rounded-[15px] object-cover" src="/images/pub-4.png" alt="" />
                    <p className="text-[#01113BB2] text-[16px] font-normal leading-[24px]">
                        Lorem ipsum dolor sit amet consectetur. Mauris habitant in orci volutpat donec mattis aliquam rhoncus. Fermentum dui quisque ac aliquam sem. Quis ac molestie non id enim consectetur erat lectus consequat. Accumsan fermentum volutpat a sit integer. Egestas nec lectus tempor enim adipiscing aliquam feugiat neque bibendum.
                    </p>
                    <p className="text-[#01113BB2] text-[16px] font-normal leading-[24px]">
                        Lorem ipsum dolor sit amet consectetur. Mauris habitant in orci volutpat donec mattis aliquam rhoncus. Fermentum dui quisque ac aliquam sem. Quis ac molestie non id enim consectetur erat lectus consequat. Accumsan fermentum volutpat a sit integer. Egestas nec lectus tempor enim adipiscing aliquam feugiat neque bibendum.
                    </p>
                    <h4 className="text-[#01113B] text-[22px] sm:text-[24px] font-bold leading-[120%]">
                        A clunky customer experience threatens your bottom line
                    </h4>
                    <p className="text-[#01113BB2] text-[16px] font-normal leading-[24px]">
                        Lorem ipsum dolor sit amet consectetur. Imperdiet adipiscing vitae tellus sit tristique cras ac non. Est urna mattis ornare eget leo cursus ut id sit. Duis vestibulum ac tristique aliquam vitae at. Sagittis et odio fermentum aenean aliquam etiam nisl. Sed leo convallis sit id ac consectetur.
                        Molestie vel integer dolor diam tortor libero urna in dictumst. Integer morbi risus suscipit id velit lectus maecenas. Facilisis sed convallis pretium ac fames. Suspendisse amet odio mi id ipsum tellus id imperdiet. Nunc feugiat augue luctus consequat tristique donec sem fringilla turpis. Vulputate aenean elementum turpis ante.
                    </p>
                    <p className="text-[#01113BB2] text-[16px] font-normal leading-[24px]">
                        Ornare rhoncus mi at curabitur vitae. Ultricies libero varius maecenas felis fames amet integer consectetur. Libero porta id tortor vitae scelerisque consequat pulvinar nisi. Sed magna habitant faucibus sem purus cum diam blandit. Lectus ut lorem quam quam aliquet. Diam arcu vitae turpis cursus neque. Vel felis turpis sit dis eget dignissim. Pellentesque erat hac mi turpis imperdiet neque dignissim aliquam facilisis                    </p>
                    <p className="text-[#01113BB2] text-[16px] font-normal leading-[24px]">
                        Lorem ipsum dolor sit amet consectetur. Mauris habitant in orci volutpat donec mattis aliquam rhoncus. Fermentum dui quisque ac aliquam sem. Quis ac molestie non id enim consectetur erat lectus consequat. Accumsan fermentum volutpat a sit integer. Egestas nec lectus tempor enim adipiscing aliquam feugiat neque bibendum.
                    </p>
                </div>
                <div className="flex flex-col gap-5 w-full lg:w-[30%]">
                    <div className="flex flex-col gap-2">
                        <p className="text-[#01113BB2] text-[14px] font-normal">AUTHOR</p>
                        <p className="text-[#01113B] text-[16px] font-normal">Zida Admin</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-[#01113BB2] text-[14px] font-normal">PUBLISHED</p>
                        <p className="text-[#01113B] text-[16px] font-normal">May 30, 2024</p>
                    </div>
                     <div className="flex flex-col gap-2">
                        <p className="text-[#01113BB2] text-[14px] font-normal">SHARE POST</p>

                        <div className="flex items-center gap-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0002 2.00001C6.47724 1.99501 1.99624 6.46701 1.99024 11.99C1.98793 14.2984 2.78434 16.5366 4.24433 18.3247C5.70433 20.1127 7.73798 21.3406 10.0002 21.8V15H8.00024V12H10.0002V10C9.97084 9.46284 10.0535 8.92541 10.2429 8.42188C10.4323 7.91835 10.7244 7.45971 11.1005 7.07509C11.4767 6.69047 11.9287 6.38828 12.4279 6.18771C12.9271 5.98714 13.4625 5.89257 14.0002 5.91001C14.7512 5.92001 15.4992 5.98701 16.2402 6.11001V8.57001H15.0002C13.7602 8.57001 13.0002 9.21001 13.0002 10V12H16.5002L16.0002 15H13.0002V22C18.5222 21.724 22.7762 17.022 22.5002 11.5C22.2242 5.97701 17.5222 1.72401 12.0002 2.00001Z" fill="#01113B"/>
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.1302 10.5865L20.6592 2.76929H19.1121L13.4428 9.55685L8.91487 2.76929H3.69238L10.5396 13.0333L3.69238 21.2308H5.23966L11.2265 14.0629L16.0084 21.2308H21.2308L14.1302 10.5865ZM12.0109 13.1237L11.3172 12.1017L5.79716 3.96899H8.17368L12.6284 10.5323L13.3222 11.5544L19.1128 20.0857H16.7363L12.0109 13.1237Z" fill="#01113B"/>
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19 19H16V14.26C16 12.84 15.4 12.33 14.62 12.33C14.3787 12.3454 14.1431 12.4107 13.9283 12.5217C13.7134 12.6327 13.5239 12.787 13.3717 12.975C13.2195 13.1629 13.1078 13.3803 13.0439 13.6135C12.9799 13.8468 12.965 14.0907 13 14.33V19H10V10H12.9V11.3C13.1926 10.8551 13.5945 10.4927 14.0673 10.2476C14.54 10.0024 15.0678 9.88276 15.6 9.9C17.15 9.9 18.96 10.76 18.96 13.56L19 19ZM6.5 8.38C6.12817 8.38 5.76469 8.26974 5.45553 8.06316C5.14636 7.85659 4.9054 7.56297 4.76311 7.21944C4.62081 6.87592 4.58358 6.49791 4.65612 6.13323C4.72866 5.76855 4.90772 5.43356 5.17064 5.17064C5.43356 4.90772 5.76855 4.72866 6.13323 4.65612C6.49791 4.58358 6.87592 4.62081 7.21944 4.76311C7.56297 4.9054 7.85659 5.14636 8.06316 5.45553C8.26974 5.76469 8.38 6.12817 8.38 6.5C8.37737 6.9978 8.17846 7.47446 7.82646 7.82646C7.47446 8.17846 6.9978 8.37737 6.5 8.38ZM5 19H8V10H5V19ZM20.5 2H3.5C3.10218 2 2.72064 2.15804 2.43934 2.43934C2.15804 2.72064 2 3.10218 2 3.5V20.5C2 20.8978 2.15804 21.2794 2.43934 21.5607C2.72064 21.842 3.10218 22 3.5 22H20.5C20.8978 22 21.2794 21.842 21.5607 21.5607C21.842 21.2794 22 20.8978 22 20.5V3.5C22 3.10218 21.842 2.72064 21.5607 2.43934C21.2794 2.15804 20.8978 2 20.5 2Z" fill="#01113B"/>
                            </svg>

                        </div>
                    </div>
                    <div className="bg-[#f2f6f8] p-6 rounded-[8px] flex flex-col gap-4">
                        <h6 className="text-[#01113B] text-[18px] font-medium leading-[22px]">Get the latest marine news and insights from HIOS</h6>
                        <p className="text-[#01113BB2] text-[14px] font-normal leading-[22px]">Receive latest insights</p>
                        <button className="bg-[#246CDA] text-white text-[16px] font-bold w-[146px] h-[45px] rounded-[100px] mt-2">Read More</button>
                    </div>
                </div>
            </div>
            <div className="containerings mt-[80px] px-6 sm:px-8">
                <h2 className="text-[#01113B] text-[22px] sm:text-[24px] font-bold mb-[20px]">Related Publications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {publication.map((item, index) => (
                        <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 border border-[#01113B1F] rounded-[8px] p-5 sm:p-7">
                            <div className="b-white rounded-[8px] p-2 shadow-xl">
                                <img
                                    className="w-full sm:w-[217px] h-[180px] sm:h-[135px] object-cover rounded-[8px]"
                                    src="/images/pub-1.png"
                                    alt=""
                                />
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="flex flex-wrap items-center gap-2">
                                    <p className="text-[#01113BB2] text-[16px] font-normal leading-[24px]">{item.category}</p>
                                    <div className="bg-[#62718D] w-[6px] h-[6px] rounded-[100px]"></div>
                                    <p className="text-[#01113BB2] text-[16px] font-normal leading-[24px]">{item.date}</p>

                                </div>
                                <h4 className="text-[#01113B] text-[18px] sm:text-[20px] font-bold leading-[120%] max-w-full">{item.title}</h4>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PublicationDetails;
