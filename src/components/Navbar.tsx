import { Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <div className="px-[200px] py-[18px] border-b border-[#80808019] bg-[#14141485] backdrop-blur-xl fixed top-0 right-0 left-0 text-[gray] font-medium z-30">
      <div className="flex justify-between">
        <div className="w-[60%] flex">
          <div className="mt-1 scale-80 text-purple-500 hover:rotate-12 transition-transform duration-300"><Sparkles /></div>       
          <span className="ml-1 bg-linear-to-r from-indigo-500 to-purple-400 hover:from-purple-400 hover:to-indigo-500 inline-block text-transparent bg-clip-text text-2xl font-bold transition duration-100 tracking-wide">
            SM.
          </span>
        </div>
        <div className="w-[40%]">
          <div className="flex justify-between text-sm mt-[7px]">
            <div className="hover:text-white hover:bg-linear-to-r from-indigo-500 to-purple-400 bg-size-[100%_3px] bg-no-repeat bg-bottom pb-1 cursor-pointer">
              About
            </div>
            <div className="hover:text-white hover:bg-linear-to-r from-indigo-500 to-purple-400 bg-size-[100%_3px] bg-no-repeat bg-bottom pb-1 cursor-pointer">
              Experience
            </div>
            <div className="hover:text-white hover:bg-linear-to-r from-indigo-500 to-purple-400 bg-size-[100%_3px] bg-no-repeat bg-bottom pb-1 cursor-pointer">
              Tech Stack
            </div>
            <div className="hover:text-white hover:bg-linear-to-r from-indigo-500 to-purple-400 bg-size-[100%_3px] bg-no-repeat bg-bottom pb-1 cursor-pointer">
              Projects
            </div>
            <div className="hover:text-white hover:bg-linear-to-r from-indigo-500 to-purple-400 bg-size-[100%_3px] bg-no-repeat bg-bottom pb-1 cursor-pointer">
              Contact
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
