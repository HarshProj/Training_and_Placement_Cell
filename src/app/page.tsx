import {Navbar} from"./Components/Navbar"
import knit from'./Assets/knit.webp'
import Image from 'next/image';
import {About} from './Components/About'
import logo from './Assets/logo.png';
export default function Home() {
  return (
    <>
    <Navbar/>
   <div className="  w-full h-[95vh] flex object-contain bg-cover " style={{ background: `url(https://spc.iitj.ac.in/static/media/cdc_pic_2.17b39509.webp) 50%/cover fixed no-repeat`, }}>
    <div className="text-white bg-transparent h-[250px] w-[600px] m-auto flex flex-col items-center ">
    <div className=" gap-6  flex items-center justify-center w-full h-[70%] ">

<Image className=" h-[100px] w-[100px] bg-cover" src={logo} alt="KNIT logo"  ></Image>
<div className=" h-full   flex flex-col justify-center gap-2 "><h2 className="text-4xl text-center">Training & Placement Office
</h2>
</div>
    </div>
    <div className=" w-[90%] bg-gradient-to-r from-slate-50 to-slate-400 border-t-0 h-[1px] mx-[3px] my-[4px]"></div>
<h3 className="text-2xl font-light text-center">Kamla Nehru Institute of Technology,Sultanpur</h3>
    </div>
   </div>

   <About/>
    </>
  );
}
