import { useDispatch, useSelector } from "react-redux"
import type { TypedUseSelectorHook } from "react-redux"
import store from "../store/store"
import { MutableRefObject,ChangeEvent, KeyboardEvent, Dispatch, SetStateAction} from "react"
import { ActionCreatorWithPayload } from "@reduxjs/toolkit"

export interface IMass {
  src:string,
  name:string,
  price:string,
  src1:string,
  src2:string,
}

export interface IMass1{
  name:string,
  mass:IMass[]
};

export type Func = JSX.Element|null;

export type Und<T> = T|undefined;

export type Union3 = string|null;

export type Union5 = IMass1|undefined;

export type Union6 = HTMLSelectElement|HTMLInputElement;

export type SetAction = ActionCreatorWithPayload<string>;

export interface IContext {
  val:string,
  setState:Dispatch<SetStateAction<IState1>>
}
export interface ITheme{
    home:string,
    regist:string,
    none:string,
}

 export interface IDoor{
    name:string,
    phone:string,
    auth:boolean,
    error:string
    }
export type Reduce = null|IMass[]

export interface IComp {
    pl:string,
    data:string,
    set:SetAction
   }
export interface IState1{
    item:IMass[]
}

export type Evt = ChangeEvent<HTMLInputElement>;

export type Key<T> = KeyboardEvent<T>;

export type RefType = MutableRefObject<HTMLDivElement>;

export interface IObj {
  ref:RefType,
  name:string
};

export type FuncRoute=(back:keyof ITheme)=>void

export interface IContextProp {
  set:FuncRoute
}

export type Reduce1 = string|boolean|number

export interface IStyles {
   style1:string,
   style2:string,
   style3:string
}
export interface IAction2 {
   type:string
}
export interface IClassName {
  one:string,
  two:string,
  three:string
}
export interface IDatas{
  color:string,
  auth:boolean,
  jump:number
}
export type Action1 = Record<string,Reduce1>;

export type Action = Record<string,boolean|string>

export type IBask = {
  name:string,
  price:string,
  src:string,
  color:string
}
export interface IUser{
name:Und<string>,
phone:Und<string>,
bask:IBask[],
id:number
}
export interface Initial {
  user:IUser[],
}
export interface IPay{
name:Und<string>,
phone:Und<string>,
obj:IUser[]
}
export interface IPay1{
  id:Und<number>,
  name:string,
  price:string,
  src:string,
  color:string,
  bask:Und<IBask[]>
}

export interface IPay2{
  id:number,
  index:number,
  bask:IBask[]
}

export interface IState3 {
  reduce:Initial
}

export interface IState4{
  val:string,
  ser:string
}
export interface IAboutContext {
  move:Dispatch<Action>,
  srcs:string[],
  className:IClassName,
  page:number,
  jump:number
}
export interface IAction3{
  [i:string]:string
}
type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector