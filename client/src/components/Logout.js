import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../App";
import { useContext } from "react";
export const Logout = () => {
  const {state,dispatch} =   useContext(UserContext);
  console.log(state)
    const navigate = useNavigate();
  useEffect(()=>{
    fetch('https://darkhorsestocks.onrender.com/logout',{
        method:"GET",
        headers:{
            Accept:"application/json",
            "Content-type":"application/json"
          },
          credentials:"include"
    }).then((res)=>{
      dispatch({type:"USER",payload:false})
        navigate("/",{replace:true});
        if(!res.status===200){
            const error  = new Error(res.error);
            throw error
          }
    }).catch((e)=>{
        console.log(e)
    })
  });
    return (
    <>
    
    </>
  )
}
