import AppRoutes from "./routes/AppRoutes"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black font-poppins">
      <div>
        <div className="bg-[#141414e6] backdrop-blur-4xl fixed top-0 right-0 left-0 w-screen h-screen z-10"></div>
        <div className="bg-[#2515fdf4] w-[200px] h-[200px] rounded-full shadow-[0_0_100px_80px_#2515fd] fixed top-0 left-0"></div>
        <div className="bg-[#8a00ecf4] w-[200px] h-[200px] rounded-full shadow-[0_0_100px_80px_#8a00ec] fixed top-[280px] -right-8"></div>
      </div>
      <Navbar />
      <AppRoutes /> 
      <Footer />
    </div>
  );
}
