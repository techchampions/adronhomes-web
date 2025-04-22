import Image from "next/image";
import React from "react";

const ApiErrorBlock: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-[30em] h-[30em] mx-auto">
      {/* <div className="flex flex-col items-center justify-center mt-20">
        <div className="relative w-[5em] h-[5em] rounded-full border-2 border-black bg-[#f27405] mb-[-6em]">
          <div className="absolute bg-transparent w-[50px] h-[56px] ml-[1.68em] rounded-[45%] rotate-[140deg] border-4 border-transparent shadow-inner inset-[0px_16px_#a85103,_0px_16px_1px_1px_#a85103]" />
          <div className="absolute top-[-9.4em] left-[0.4em] rotate-[-25deg] w-[1em] h-[0.5em] rounded-full bg-[#f69e50]" />
          <div className="absolute top-[0.2em] left-[1.25em] rotate-[-20deg] w-[1.5em] h-[0.8em] rounded-full bg-[#f69e50]" />
          <div className="absolute top-[-102%] left-[-130%] w-[12em] h-[5.5em] rounded-[50px] text-black transform rotate-[-29deg] clip-path-polygon" />
          <div className="absolute top-[-211%] left-[-35%] transform rotate-[45deg] w-[0.5em] h-[0.5em] rounded-full border-2 border-black bg-[#979797]" />
          <div className="absolute top-[-210%] left-[-10%] w-[12em] h-[4em] rounded-[50px] bg-[#171717] bg-gradient-to-r from-[#171717] to-[#353535] mr-[5em] transform rotate-[-8deg] clip-path-polygon-2" />
          <div className="absolute top-[-294%] left-[94%] w-[0.5em] h-[0.5em] rounded-full border-2 border-black bg-[#979797]" />
        </div>

        <div className="relative w-[17em] h-[9em] mt-[3em] rounded-[15px] bg-[#d36604] flex justify-center border-2 border-[#1d0e01] shadow-inner shadow-[#e69635]">
          <div className="absolute top-[0.25em] left-[-0.25em] h-[12px] w-[12px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 189.929 189.929"
              className="w-[12px] h-[12px]"
            >
              <path d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13 C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z" />
            </svg>
          </div>

          <div className="flex items-center justify-center border-2 border-[#1d0e01] rounded-[15px] shadow-[3.5px_3.5px_0px_#e69635]">
            <div className="flex items-center justify-center w-[11em] h-[7.75em] rounded-[10px]">
              <div className="w-[13em] h-[7.85em] bg-[#0173f7] border-2 border-[#1d0e01] rounded-[10px] flex items-center justify-center text-[#252525] font-bold text-center">
                <span className="text-white text-xs">No Signal!</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1 self-end">
            <div className="w-[2px] h-[0.5em] bg-black rounded-[25px_25px_0px_0px] mt-1" />
            <div className="w-[2px] h-[1em] bg-black rounded-[25px_25px_0px_0px]" />
            <div className="w-[2px] h-[0.5em] bg-black rounded-[25px_25px_0px_0px]" />
          </div>

          <div className="w-[4.25em] h-[8em] bg-[#e69635] border-2 border-[#1d0e01] p-[0.6em] rounded-[10px] flex flex-col items-center justify-center gap-[0.75em] shadow-[3px_3px_0px_#e69635]">
            <div className="w-[1.65em] h-[1.65em] bg-[#7f5934] rounded-full border-2 border-black shadow-inner shadow-[#b49577] relative">
              <div className="absolute top-[1em] left-[0.5em] rotate-[47deg] w-[0.1em] h-[0.4em] bg-black" />
              <div className="absolute top-[0.9em] left-[0.8em] rotate-[47deg] w-[0.1em] h-[0.55em] bg-black" />
              <div className="absolute top-[-0.1em] left-[0.65em] rotate-[45deg] w-[0.15em] h-[1.5em] bg-black" />
            </div>

            <div className="w-[1.65em] h-[1.65em] bg-[#7f5934] rounded-full border-2 border-black shadow-inner shadow-[#b49577] relative">
              <div className="absolute top-[1.05em] left-[0.8em] rotate-[-45deg] w-[0.15em] h-[0.4em] bg-black" />
              <div className="absolute top-[-0.1em] left-[0.65em] rotate-[-45deg] w-[0.15em] h-[1.5em] bg-black" />
            </div>
          </div>

          <div className="flex flex-col gap-[0.5em]">
            <div className="w-[0.65em] h-[0.65em] bg-[#7f5934] rounded-full border-2 border-black shadow-inner shadow-[#b49577]" />
            <div className="w-[0.65em] h-[0.65em] bg-[#7f5934] rounded-full border-2 border-black shadow-inner shadow-[#b49577]" />
            <div className="w-[0.65em] h-[0.65em] bg-[#7f5934] rounded-full border-2 border-black shadow-inner shadow-[#b49577]" />
          </div>
        </div>

        <div className="flex justify-center items-center gap-[8.7em] w-full">
          <div className="w-[2em] h-[1em] border-2 border-[#171717] bg-[#4d4d4d] mt-[-0.15em]" />
          <div className="w-[2em] h-[1em] border-2 border-[#171717] bg-[#4d4d4d] mt-[-0.15em]" />
          <div className="absolute w-[17.5em] h-[0.15em] bg-[#171717] mt-[0.8em]" />
        </div>
      </div> */}
      <Image src="/500.svg" alt="error" fill className="" />
    </div>
  );
};

export default ApiErrorBlock;
