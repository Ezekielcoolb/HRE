import React from "react";
import { Link } from "react-router-dom";


const Donate = () => {

    const donateOne = [
        {
        title: "FCMB Account Info",
        bank: "FCMB",
        accountNumber: "2001565211",
        accountName: "Human Right Foundation",
        },
        {
            title: "GTB Account Info",
            bank: "Guaranty Trust Bank",
            accountNumber: "0000000000",
            accountName: "Human Right Foundation",
        }
    ]

    const donateTwo = [
        {
            title: "FOR TRANSFER OF USD ($) INTO DOMICILIARY ACCOUNT THROUGH CITIBANK (N.Y.) USA.",
            bank: "Bank of Africa",
            code: "CITIUS33",
            credit: "GUARANTY TRUST BANK PLC, LAGOS NIGERIA",
            codeTwo: "GTBINGLA",
            codeThree: "8315795",
            accNumber: "00000000",
            accName: "Human Right Foundation",
            beneficiary: "246228337210",
        },
         {
            title: "FOR TRANSFER OF GBP (£) INTO DOMICILIARY ACCOUNT THROUGH CITIBANK (LONDON) UNITED KINGDOM.",
            bank: "Bank of Africa",
            code: "CITIUS33",
            credit: "GUARANTY TRUST BANK PLC, LAGOS NIGERIA",
            codeTwo: "GTBINGLA",
            codeThree: "8315795",
            accNumber: "00000000",
            accName: "Human Right Foundation",
            beneficiary: "246228337210",
        },
         {
            title: "FOR TRANSFER OF USD ($) INTO DOMICILIARY ACCOUNT THROUGH CITIBANK (N.Y.) USA.",
            bank: "Bank of Africa",
            code: "CITIUS33",
            credit: "GUARANTY TRUST BANK PLC, LAGOS NIGERIA",
            codeTwo: "GTBINGLA",
            codeThree: "8315795",
            accNumber: "00000000",
            accName: "Human Right Foundation",
            beneficiary: "246228337210",
        },
         {
            title: "FOR TRANSFER OF GBP (£) INTO DOMICILIARY ACCOUNT THROUGH CITIBANK (LONDON) UNITED KINGDOM.",
            bank: "Bank of Africa",
            code: "CITIUS33",
            credit: "GUARANTY TRUST BANK PLC, LAGOS NIGERIA",
            codeTwo: "GTBINGLA",
            codeThree: "8315795",
            accNumber: "00000000",
            accName: "Human Right Foundation",
            beneficiary: "246228337210",
        },
    ]
    return (
        <div>
            <div className="containerings min-h-[50vh] py-16 px-6 sm:px-8 flex flex-col justify-center items-center bg-[#0D1834]">
                <h1 className="text-white text-[40px] md:text-[55px] font-normal leading-[50px] md:leading-[65px] text-center">Donate</h1>
            </div>
            <div className="containerings flex flex-col items-center gap-5 text-center mt-16 sm:mt-20 px-6 sm:px-8"> 
                     <div className="backdrop-blur-sm bg-[#f7f7f7] h-[34px] px-5 rounded-[24px] w-fit flex items-center gap-2 border border-[#01113B1F]">
                        <Link className="bg-[#01113b] h-[26px] w-[47px] rounded-[20px] flex items-center justify-center text-white text-[12px] font-medium">New</Link>
                        <p className="text-[#01113B] text-[12px] font-medium">Human Right Foundation</p>
                    </div>
                    <h2 className="text-[#01113B] text-[34px] md:text-[45px] font-normal leading-[40px] md:leading-[55px] text-center max-w-[509px]">
                        Donate to Human Right foundation
                    </h2>
                    <p className="text-[#01113BB2] text-[16px] sm:text-[18px] font-normal max-w-[587px] leading-[26px] sm:leading-[28px] text-center">
                        We have our work cut out for us and the task is huge; we need you to partner with us: Donate cash 
                        (one-off, monthly, annually or project-based)
                    </p>
            </div>
            <div className="containerings mt-16 sm:mt-20 px-6 sm:px-8 py-14 sm:py-16 bg-[#f7f7f7] rounded-[12px]">
                <div className="flex flex-col md:flex-row md:flex-wrap gap-5 md:gap-6">
                    {donateOne.map((item) => (
                        <div
                            key={item.title}
                            className="flex flex-col gap-2 bg-white rounded-2xl p-5 sm:p-6 shadow-sm w-full md:w-[calc(50%-15px)]"
                        >
                            <h2 className="text-[#01113B] text-[16px] font-normal mb-1">{item.title}</h2>
                            <p className="text-[#01113BB2] text-[15px] sm:text-[16px] font-normal">BANK NAME: <span className="font-bold"> {item.bank}</span></p>
                            <p className="text-[#01113BB2] text-[15px] sm:text-[16px] font-normal">ACCOUNT NUMBER: <span className="font-bold"> {item.accountNumber}</span></p>
                            <p className="text-[#01113BB2] text-[15px] sm:text-[16px] font-normal">ACCOUNT NAME: <span className="font-bold"> {item.accountName}</span></p>
                            
                        </div>
                    ))}
                </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-10">
                    {donateTwo.map((item) => (
                        <div
                            key={item.title}
                            className="flex flex-col gap-2 bg-white rounded-2xl p-5 sm:p-6 shadow-sm"
                        >
                            <h2 className="text-[#01113B] text-[16px] font-normal mb-2 leading-[26px]">{item.title}</h2>
                            <p className="text-[#01113BB2] text-[15px] sm:text-[16px] font-normal">CORRESPONCENT BANK: <span className="font-bold"> {item.bank}</span></p>
                            <p className="text-[#01113BB2] text-[15px] sm:text-[16px] font-normal">SWIFT CODE: <span className="font-bold"> {item.code}</span></p>
                            <p className="text-[#01113BB2] text-[15px] sm:text-[16px] font-normal">SOFT CODE: <span className="font-bold"> {item.codeThree}</span></p>
                            <p className="text-[#01113BB2] text-[15px] sm:text-[16px] font-normal">ABA NO: <span className="font-bold"> {item.accNumber}</span></p>
                            <p className="text-[#01113BB2] text-[15px] sm:text-[16px] font-normal">FOR CREDIT OF: <span className="font-bold"> {item.credit}</span></p>
                            <p className="text-[#01113BB2] text-[15px] sm:text-[16px] font-normal">SWIFT CODE: <span className="font-bold"> {item.codeTwo}</span></p>
                            <p className="text-[#01113BB2] text-[15px] sm:text-[16px] font-normal">ACCOUNT NUMBER: <span className="font-bold"> {item.accNumber}</span></p>
                            <p className="text-[#01113BB2] text-[15px] sm:text-[16px] font-normal">FOR FINAL CREDIT OF: <span className="font-bold"> {item.accName}</span></p>
                            <p className="text-[#01113BB2] text-[15px] sm:text-[16px] font-normal">BENEFICIARY A/C NO: <span className="font-bold"> {item.beneficiary}</span></p>
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Donate;
