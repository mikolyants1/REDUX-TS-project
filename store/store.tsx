import { configureStore,combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import slice from './slice'
import slice1 from './slice1'

const config={
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
export const cachedStore=persistStore(store)
export default store