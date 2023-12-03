import Navbar from "../Components/Navbar";
import Mainlander from "./mainlander";
import Sidebar from "../Components/sideBar";
const Herosection = () => {
  return (
    <>
      <div className="hero_sec">
        <Navbar />
        <Sidebar/>
        <Mainlander />
        
      </div>
    </>
  );
};

export default Herosection;
