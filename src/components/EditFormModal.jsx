/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux"
import { updateAlbum } from "../redux/albumReducer"
import { useState } from "react";
const EditFormModal = ({close,oldFormValue}) => {
  
  const[formValue,setFormValue]=useState(oldFormValue);
  const dispatch=useDispatch();
  
  const handleChange=(e)=>{
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value, // Update the form values on change
    });
  };

  const handleEditSubmit=()=>{
    dispatch(updateAlbum({formValue,id:oldFormValue.id}));
    //dispatch(updateAlbumAsync({formValue,id:oldFormValue.id}));   for async update operation
    close(false);
  }

  return (
    <div className="fixed flex justify-center items-center h-[100vh] w-full top-0 bottom-0 z-20 bg-slate-50 bg-opacity-80">
    <div className="flex flex-col gap-3 items-center absolute z-30 h-[40%] w-[40%] bg-slate-400">
        {/* for header and close button */}
        <div className=" w-full flex p-3">
            <div className="w-[100%] text-center font-semibold text-xl pl-4 underline">Edit the album</div>
            <div className="w-[15%] px-3 py-2 bg-green-300 rounded-lg hover:cursor-pointer flex justify-center items-center" onClick={()=>close(false)}>close</div>
        </div>
        {/* for form inputs and button */}
        <input type="text" name="id" value={formValue.id} placeholder="enter id" className="border-2 w-[40%] border-black px-3 py-2" onChange={handleChange}/>
        <input type="text" name ="userId" value={formValue.userId} placeholder="enter userId" className="border-2 border-black px-3 py-2 w-[40%]" onChange={handleChange}/>
        <input type="text" name="title" value={formValue.title} placeholder="enter title" onChange={handleChange} className="border-2 w-[40%] border-black px-3 py-2"/>
        
        <button onClick={()=>handleEditSubmit()} className="border-2 w-[25%] border-black px-3 py-2">Submit</button>
    </div>
</div>
  )
}

export default EditFormModal
