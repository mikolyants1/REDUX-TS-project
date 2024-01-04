import { FC } from "react"
import { contextProp } from "../../types/state"
import Header from "../views/pages/header"
import { Outlet } from "react-router-dom"

export const Page:FC<contextProp>=({set}):JSX.Element=>{
    return <>
        <Header />
        <Outlet
         context={set}
         />
      </>
  }