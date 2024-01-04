import { FC } from "react"
import Nav from "../views/nav/navBar"
import { Outlet } from "react-router-dom"

export const Shop:FC=():JSX.Element=>{
    return <>
        <Nav />
        <Outlet />
       </>
  }