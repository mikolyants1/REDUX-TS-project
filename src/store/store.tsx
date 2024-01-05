import { configureStore,combineReducers, Reducer, AnyAction,
EmptyObject,Dispatch,bindActionCreators,CaseReducerActions,PayloadAction} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer, Persistor, WebStorage } from 'redux-persist'
import slice,{ action1} from './slices/slice'
import slice1,{action2,state as st2} from './slices/slice1'
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { PersistPartial } from 'redux-persist/lib/persistReducer'
import { User, pay, pay1, pay2, state1, state3, union1, useAppDispatch} from '../types/state'

interface state{
    key:string,
    storage:WebStorage
}
 interface state4 {
    phone:st2
 }
export type bind=CaseReducerActions<{
    addUser:(state:state,action:PayloadAction<pay>)=>void,
    addItem:(state:state,action:PayloadAction<pay1>)=>void,
    delItem:(state:state,action:PayloadAction<pay2>)=>void,
    setCurrent:(state:state,action:PayloadAction<string>)=>void,
    setId:(state:state,action:PayloadAction<string>)=>void,
},"shop">
const actions:bind={
    ...action1,
    ...action2
}
const config:state={
    key:'root',
    storage
}
const combine:Reducer=combineReducers({
    reduce:slice,
    phone:slice1
})
const persist:Reducer<EmptyObject & {reduce:state,phone:state} 
& PersistPartial,AnyAction>=persistReducer(config,combine)
const store:ToolkitStore=configureStore({
    reducer:persist
})

export const useActions=():bind=>{
  const dispatch:Dispatch<AnyAction>=useAppDispatch()
  return bindActionCreators(actions,dispatch)
    }
    
export const getUser=(state:state3)=>state.reduce.user;

export const getUserId=(state:state4)=>state.phone.id;

export const getCurrent = (state:state4)=> state.phone.current;

export const getById=({reduce}:state3,id:string):union1=>{
  return reduce.user.find((x:User):boolean=>x.phone==id)
 };
export const cachedStore:Persistor=persistStore(store)
export default store