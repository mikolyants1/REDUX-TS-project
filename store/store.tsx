import { configureStore,combineReducers, Reducer, AnyAction} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer, Persistor, WebStorage } from 'redux-persist'
import slice from './slice'
import slice1 from './slice1'
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
interface state{
    key:string,
    storage:WebStorage
}

const config:state={
    key:'root',
    storage
}
const combine:Reducer=combineReducers({
    reduce:slice,
    phone:slice1
})
const persist:Reducer<state,AnyAction>=persistReducer(config,combine)
const store:ToolkitStore=configureStore({
    reducer:persist
})
export const cachedStore:Persistor=persistStore(store)
export default store