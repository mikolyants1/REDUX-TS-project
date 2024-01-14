import { FC, useContext, useLayoutEffect } from "react"
import { Outlet } from "react-router-dom"
import { BackContext } from "../helpers/context"
import { contextProp } from "../../types/state";


export const Home:FC<contextProp>=({set}):JSX.Element=>{
    const context = useContext<string>(BackContext);

    useLayoutEffect(():void=>{
     const {style} = document.querySelector('body') as HTMLElement;
     style.background = `${context}`;
     style.backgroundSize=context !== 'none' ? '100vw 100vh' : 'none';
     },[context]);

     return (
       <Outlet
        context={set}
        />
       )
   }