/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAlbum } from "../redux/albumReducer";
const AddFormModal = ({close}) => {
    //id,title and userId are local state entities used for managing modal's input states 
    const [formValue,setFormValue]=useState({});
    
    const dispatch=useDispatch();

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormValue({...formValue,[name]:value});
    }
    
    //dispatching addAlbum whenever submit button of the add form modal gets clicked and closing the modal afterwards
    const handleSubmit=()=>{
        const {id,userId,title}=formValue;
        dispatch(addAlbum({id:Number(id),userId:Number(userId),title}));
        //dispatch(addAlbumAsync({id:Number(id),userId:Number(userId),title}));    for async add operation
        close(false);
      }
    return (
        
        <div className="fixed flex justify-center items-center h-[100vh] w-full top-0 bottom-0 z-20 bg-slate-50 bg-opacity-80">
            <div className="flex flex-col gap-3 items-center absolute z-30 h-[40%] w-[40%] bg-slate-400">
                {/* for header and close button */}
                <div className=" w-full flex p-3">
                    <div className="w-[100%] text-center font-semibold text-xl pl-4 underline">Add A New Album</div>
                    <div className="w-[15%] px-3 py-2 bg-green-300 rounded-lg hover:cursor-pointer flex justify-center items-center" onClick={()=>close(false)}>close</div>
                </div>
                {/* for form inputs and button */}
                <input type="text" name="id" value={formValue.id} placeholder="enter id" required className="border-2 w-[40%] border-black px-3 py-2" onChange={handleChange}/>
                <input type="text" name="userId" value={formValue.userId} placeholder="enter userId" required className="border-2 border-black px-3 py-2 w-[40%]" onChange={handleChange}/>
                <input type="text" name="title" value={formValue.title} placeholder="enter title"  required onChange={handleChange} className="border-2 w-[40%] border-black px-3 py-2"/>
                
                <button onClick={()=>handleSubmit()} className="border-2 w-[25%] border-black px-3 py-2">Submit</button>
            </div>
        </div>
    
  )
}

export default AddFormModal
