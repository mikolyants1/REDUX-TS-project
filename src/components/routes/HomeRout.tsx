import { FC, useContext, useLayoutEffect } from "react"
import { Outlet } from "react-router-dom"
import { BackContext } from "../helpers/context"
import { IContextProp } from "../../types/state";

export const Home:FC<IContextProp> = ({set}):JSX.Element =>{
    const context = useContext<string>(BackContext);

    useLayoutEffect(():void=>{
     const {style}:HTMLElement = document.body;
     const isNone:boolean = context !== "none";
     style.background = `${context}`;
     style.backgroundSize = isNone ? '100vw 100vh' : 'none';
     },[context]);

     return (
       <Outlet
        context={set}
        />
       )
   }