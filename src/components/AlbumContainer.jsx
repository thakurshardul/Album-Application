/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import AlbumCard from "./AlbumCard"
import { getInitialData,albumSelector, setIsLoading } from "../redux/albumReducer";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import ReactLoading from 'react-loading';


const AlbumContainer = () => {
    const dispatch=useDispatch();
    const {album,isLoading}=useSelector(albumSelector);
    
    useEffect(()=>{
        dispatch(setIsLoading(true));
        //for delayed effect and react spinner testing purpose only
        const timeout=setTimeout(()=>dispatch(getInitialData()),1000);
        return()=>{
            clearTimeout(timeout);
        }
        },[])
    return(
        <div className="flex justify-center items-center min-h-[91vh] ">
      {isLoading?<ReactLoading type="spokes" color="black" height={586} width={274} className="mt-7 h-full" />:<div>{album.map((obj,index)=>(<AlbumCard key={index} obj={obj}/>))}</div>}
      </div>
    )
    
}

export default AlbumContainer
