/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux"
import { deleteAlbum } from "../redux/albumReducer";
import EditFormModal from "./EditFormModal";

//obj is an individual album entity recieved from global album store 
const AlbumCard = ({obj}) => {
    const [isEditModalOpen,setIsEditModalOpen]=useState(false);
    
    const dispatch=useDispatch();
    
    //dispatching deleteAlbum once user tries to delete any particular album . Here id has been used as key identifier to identify which album to delete.
    const handleDelete=(id)=>{
        dispatch(deleteAlbum(id))
        //dispatch(deleteAlbumAsync(id)); for async operation to change real database which in our case is not possible
      }
    
      //dispatching updateAlbum once user clicks on submit button of editFormModal and closing the modal afterwards
    //ofcourse there has been two separate modals for edit and add action which in this case is leading to **code redundancy** but can be **improved in future**.
      const handleEdit=()=>{
        setIsEditModalOpen(true);
      }
  return (
    <>
        <div className="flex py-4 justify-around w-full border-2 border-b-black"> 
            <div className="flex flex-col gap-3 w-[85%] pl-7 font-bold text-lg">
                <div>ID: {obj.id}</div>
                <div>UserId: {obj.userId}</div>
                <div>Title: {obj.title}</div>
            </div>
            <div className="flex flex-col md:flex-row justify-end w-[15%] items-center gap-5 pr-5">
                <button className="flex justify-center items-center border-2 border-black rounded-xl bg-yellow-400 px-4" onClick={()=>handleEdit(obj.id)}>edit</button>
                <button className="flex justify-center items-center border-2 border-black rounded-xl bg-red-400 px-4" onClick={()=>handleDelete(obj.id)}>delete</button>
            </div>
        </div>
        {isEditModalOpen && <EditFormModal close={setIsEditModalOpen} oldFormValue={{id:obj.id,userId:obj.userId,title:obj.title}}/>}
    </>
   
  )
}

export default AlbumCard
