import { configureStore,combineReducers, Reducer, AnyAction,
EmptyObject,Dispatch,bindActionCreators,CaseReducerActions,PayloadAction} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer, Persistor, WebStorage } from 'redux-persist'
import slice,{User, action1,pay,pay1,pay2,state as st1} from './slice'
import slice1,{action2} from './slice1'
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { PersistPartial } from 'redux-persist/lib/persistReducer'
import { union1, useAppDispatch} from '../types/state'

interface state{
    key:string,
    storage:WebStorage
}
 interface state3 {
    reduce:st1
 }
export type bind=CaseReducerActions<{
    add:(state:state,action:PayloadAction<pay>)=>void,
    add1:(state:state,action:PayloadAction<pay1>)=>void,
    del:(state:state,action:PayloadAction<pay2>)=>void,
    add2:(state:state,action:PayloadAction<string>)=>void,
    add3:(state:state,action:PayloadAction<string>)=>void,
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
export const getUser=(state:state3)=>state.reduce.user
export const getById=({reduce}:state3,id:string):union1=>{
  return reduce.user.find((x:User):boolean=>x.phone==id)
    }
export const cachedStore:Persistor=persistStore(store)
export default store