import { ArrowDownToLine, User } from "lucide-react";

export default function AppRoutes() {
  return (
    <div className="mt-[110px] text-white px-[200px] z-20">
      <section className="">
        <div className="flex items-center text-purple-400 tracking-wider">
          <div className="flex-1 h-0.5 bg-purple-400 mr-3 justify-between w-[5%]"></div>
          <div className="w-[95%]">HI, I'M SURUTHI MANIVANNAN</div>
        </div>

        <div className="mt-2.5 text-white font-bold text-[105px] text-base/34">
          Building <br />{" "}
          <span className="bg-linear-to-r from-indigo-500 to-purple-400 inline-block text-transparent bg-clip-text">
            Scalable
          </span>{" "}
          Web Apps.
        </div>
        <div className="pt-[25px] text-gray-400 text-2xl">
          <div className="w-[60%]">
            Software Engineering Undergraduate at UCSC, passionate about Full
            Stack Development and Microservices architecture.
          </div>
          <div></div>
        </div>
        <div className="flex mt-[50px] text-white font-medium">
          <div className="">
            <div className="px-7 py-4 rounded-4xl cursor-pointer border border-purple-500 flex justify-between hover:w-[191px] w-[187px] transition-all duration-200">
              <div>CONTACT ME</div>
              <div className="scale-75">
                <User />
              </div>
            </div>
          </div>
          <div className="">
            <div className="bg-linear-to-r from-indigo-500 to-purple-500 ml-5 px-7 py-4 rounded-4xl cursor-pointer flex justify-between hover:w-[174px] w-[170px] transition-all duration-200">
              <div>MY RESUME</div>
              <div className="scale-75">
                <ArrowDownToLine />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-[100px] flex">
        <div className="w-[50%] pr-10">
          <div className="flex items-center text-white">
            <div className="flex-1 h-1 rounded-full bg-purple-500 mr-3 justify-between w-[10%]"></div>
            <div className="w-[90%] text-4xl font-semibold">About Me</div>
          </div>
          <div className="mt-10 text-gray-400 text-[21px] text-base/8">
            A 3rd-year Computer Science student at UCSC (GPA 3.57/4.00) with a
            strong interest in full-stack engineering. I specialize in blending
            user-focused front-end design with robust, scalable backend systems.
          </div>
          <div className="bg-[#35004f6a] backdrop-blur-lg mt-10 p-4 border-l-4 border-purple-500 rounded-r-xl text-gray-300 text-lg italic">
            "Strong focus on Microservices, Spring Boot, Node.js, and
            cloud-native development."
          </div>
        </div>
        <div className="w-[50%] rounded-2xl my-10 ml-10 bg-[#37373737] backdrop-blur-lg p-10 border border-gray-800">right</div>
      </section>
    </div>
  );
}
