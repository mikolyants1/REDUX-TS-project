import { configureStore,combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import { useDispatch, useSelector } from "react-redux"
import type { TypedUseSelectorHook } from "react-redux"
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
 type RootState = ReturnType<typeof store.getState>
 type AppDispatch = typeof store.dispatch
 export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const cachedStore=persistStore(store)
export default store