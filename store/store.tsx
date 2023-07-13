import { configureStore,combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer, Persistor, WebStorage } from 'redux-persist'
import slice from './slice'
import slice1 from './slice1'
interface state{
    key:string,
    storage:WebStorage
}
const config:state={
    key:'root',
    storage
}
const combine=combineReducers({
    reduce:slice,
    phone:slice1
})
const persist=persistReducer(config,combine)
const store=configureStore({
    reducer:persist
})
export const cachedStore:Persistor=persistStore(store)
export default store