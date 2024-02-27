import { ActionCreatorWithPayload } from "@reduxjs/toolkit"
import {IComp } from "../../../../types/state"

interface IProps {
  setCurrent:ActionCreatorWithPayload<string>,
  setId:ActionCreatorWithPayload<string>
};

export default ({setCurrent,setId}:IProps):IComp[] => {
    return [
        {
            pl:'login',
            data:'name',
            set:setCurrent
        },
        {
            pl:'password',
            data:'phone',
            set:setId
        }
    ]
}