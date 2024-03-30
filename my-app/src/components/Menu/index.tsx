

"use client";
import { MdDomainVerification } from "react-icons/md"; 
import { ImStatsBars } from "react-icons/im"; 
import { TbLayoutDashboard } from "react-icons/tb"; 
import { AiFillCalendar } from "react-icons/ai"; 

import Link from "next/link";


import React, { useState } from "react";
import Image from "next/image";
import logo from "@/assets/imagens/logo.webp"


export const Menu =()=>{
    return(
        <>
        
 
 
         <div className="flex flex-col absolute h-full py-6 space-y-8 w-56 bg-[#1a191b] rounded-r-3xl overflow-hidden">
         <div className="flex items-center  justify-center  h-20 shadow-md">
      
      <Image className="w-[61px] lg:w-[120px]" src={logo} alt="vai"/>
    </div>
   
   <Link className="" href={"/"}>
     <div>
      
       <a href="#" className="flex flex-row items-center  h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
         <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
         <span className="text-sm font-medium">Dashboard</span>
        <TbLayoutDashboard className=" flex flex-row items-center    absolute left-2 top-{-1} h-6 w-12 " />
       </a>
      
       </div>
     </Link>
     <div>
       <a href="#" className="flex flex-row items-center  h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
         <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-music"></i></span>
         <span className="text-sm font-medium">Stats</span>
         <ImStatsBars className="flex flex-row items-center   absolute left-2 top-{-1} h-6 w-12 "/>
       </a>
       </div>
     
     <div>
       <a href="#" className="flex flex-row items-center  h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
         <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-drink"></i></span>
         <span className="text-sm font-medium">Events</span>
         <AiFillCalendar className="flex flex-row items-center   absolute left-2 top-{-1} h-6 w-12 " />
       </a>
       </div>
    
     <Link className="" href={"/verification"}>
     <div>
       <a href="#" className="flex flex-row items-center  h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
         <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-shopping-bag"></i></span>
         <span className="text-sm font-medium">Verification</span>
         <MdDomainVerification className="flex flex-row items-center   absolute left-2 top-{-1} h-6 w-12 " />
       </a>
       </div>
     </Link>
     
     
   </div>
 
 
        </>
    )
}
export default Menu;