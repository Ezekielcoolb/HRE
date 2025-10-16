import React from "react";



const ProgramDetails = () => {
    const images = [
        {image: "/images/image-14.png"},
        {image: "/images/image-15.png"},
        {image: "/images/image-16.png"},
    ]
    return (
        <div>
            <div className="containerings min-h-[50vh] py-16 px-6 sm:px-8 flex flex-col justify-center items-center bg-[#0D1834] gap-2 text-center">
                <p className="text-white text-[12px] font-medium">HUMAN RIGHTS</p>
                <h1 className="text-white text-[40px] md:text-[55px] font-normal leading-[50px] md:leading-[65px] text-center">Labour Rights</h1>
            </div> 
             <div className="containerings bg-[#F7F7F9] py-[80px] px-6 sm:px-8 flex flex-col lg:flex-row justify-between gap-10">
                {/* Left Text Section */}
                <div className="flex flex-col gap-5 flex-1">
                    <h2 className="text-[#01113B] text-[34px] md:text-[45px] font-normal max-w-full lg:max-w-[430px] leading-[40px] md:leading-[55px]">
                    Lorem ipsum dolor sit amet
                    </h2>
                    <p className="text-[#01113BB2] text-[16px] font-normal leading-[24px] max-w-full lg:max-w-[390px]">
                        Human rights are the fundamental principles that safeguard the dignity, freedom, and equality of all individuals, regardless of their background or circumstances.
                    </p>
                    <p className="text-[#01113BB2] text-[16px] font-normal leading-[24px] max-w-full lg:max-w-[390px]">
                        In Africa, where diverse cultures, traditions, and socio-economic disparities coexist, promoting and protecting human rights is paramount. Community sensitization plays a pivotal role in this endeavor.
                    </p>
                </div>

                {/* Right Image Section */}
                <div className="relative w-full lg:w-[50%] flex justify-center items-center">
                    {/* Background image */}
                    <div className="absolute inset-0 bg-[url('/images/ground-2.png')] bg-cover bg-left bg-no-repeat"></div>

                    {/* White image box (fixed size) */}
                    <div className="relative bg-white p-4 md:p-[15px] rounded-[10px] shadow-md w-full max-w-[420px] sm:max-w-[468px] h-[320px] sm:h-[380px] lg:h-[425px] lg:translate-x-[15%]">
                    <img
                        src="/images/image-17.png"
                        className="w-full h-full rounded-[10px] object-cover"
                        alt=""
                    />
                    </div>
                </div>
             </div>
             <div className="containerings mt-[80px] px-6 sm:px-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {images.map((item, index) => (
                    <div className="b-white rounded-[10px] p-2 shadow-xl">
                    <img
                        className="w-[360px] h-[235px] object-cover rounded-[10px]"
                        src={item.image}
                        alt=""
                    />
                    </div>

                ))}
                

             </div>
             <div className="containerings mt-[80px] px-6 sm:px-8 flex flex-col lg:flex-row justify-between gap-10">
                <div className="flex flex-col gap-5 w-full lg:w-[48%]">
                    <p className="text-[#01113BB2] text-[16px] font-normal leading-[24px] max-w-full">Human rights are the fundamental principles that safeguard the dignity, freedom, and equality of all individuals, regardless of their background or circumstances.</p>
                    <p className="text-[#01113BB2] text-[16px] font-normal leading-[24px] max-w-full">In Africa, where diverse cultures, traditions, and socio-economic disparities coexist, promoting and protecting human rights is paramount. Community sensitization plays a pivotal role in this endeavor. Community sensitization on human rights is a vital component of creating a more equitable and just Africa. By fostering awareness, dialogue, and action at the grassroots level, these efforts contribute to a brighter future where the rights of all Africans are respected and upheld</p>
                </div>
                <div className="flex flex-col gap-5 w-full lg:w-[48%]">
                    <p className="text-[#01113BB2] text-[16px] font-normal leading-[24px] max-w-full">Moreover, community sensitization helps bridge the gap between traditional practices and modern human rights standards. It encourages open dialogues within communities to find common ground between cultural heritage and universal human rights principles</p>
                    <p className="text-[#01113BB2] text-[16px] font-normal leading-[24px] max-w-full">In addition to addressing violations, human rights sensitization in Africa empowers individuals to hold their governments accountable. Informed citizens are better equipped to advocate for policy changes, demand justice, and participate in democratic processes effectively.</p>
                </div>
             </div>
        </div>
    )
}

export default ProgramDetails