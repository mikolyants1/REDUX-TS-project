import { FC } from "react"
import { IContextProp } from "../../types/state"
import Header from "../views/pages/header"
import { Outlet } from "react-router-dom"

export const Page:FC<IContextProp> = ({set}):JSX.Element =>{
    return <>
        <Header />
        <Outlet
         context={set}
         />
      </>
  }