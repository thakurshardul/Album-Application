import { useState } from "react";
import AddFormModal from "./AddFormModal";



const Header = () => {
  const [isModalOpen,setIsModalOpen]=useState(false);
    return (
    <>
    <div className=" py-3 pl-4 bg-red-400 font-semibold flex justify-between z-10">
        <div className="w-[90%] font-bold text-3xl">Album Application</div>
        <button  className=" w-[10%] px-3 py-2 rounded-xl bg-green-400 mx-3" onClick={()=>setIsModalOpen(true)}>Add new Album</button>
      </div>
    {isModalOpen && <AddFormModal close={setIsModalOpen}/>}
    </>
  )
}

export default Header
