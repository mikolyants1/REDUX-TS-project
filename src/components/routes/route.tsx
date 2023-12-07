import { Outlet } from "react-router-dom"
import { BackContext } from "../../types/state"
import Header from "../pages/header"
import Main from "../pages/main"
import {useContext,useEffect,FC} from 'react'

export type func=(back:string)=>void

interface contextProp {
  set:func
}

export const Home:FC<contextProp>=({set}):JSX.Element=>{
 const context=useContext<string>(BackContext)
 useEffect(():void=>{
  const {style}=document.querySelector('body') as HTMLElement
  style.background=`${context}`
  style.backgroundSize=context!=='none'?'100vw 100vh':'none'
  },[context])
  return (
    <Outlet 
     context={set}
     />
    )
}
export const Page:FC<contextProp>=({set}):JSX.Element=>{
  return <>
      <Header />
      <Outlet
       context={set}
       />
    </>
}
export const Shop:FC=():JSX.Element=>{
  return <>
      <Main />
      <Outlet />
     </>
}