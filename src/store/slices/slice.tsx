import {createSlice,PayloadAction,Slice} from '@reduxjs/toolkit'
import { bask, initial, pay, pay1, pay2, User } from '../../types/state'

const initialState:initial = {
    user:[]
}
const slice:Slice<initial,{
    addUser:(state:initial,action:PayloadAction<pay>)=>void,
    addItem:(state:initial,action:PayloadAction<pay1>)=>void,
    delItem:(state:initial,action:PayloadAction<pay2>)=>void,
},"shop"> = createSlice({
    name:'shop',
    initialState,
    reducers:{
        addUser:(state,{payload})=>{
        const {name,phone,obj}:pay = payload;
        const newUser:User = {
            name:name,
            phone:phone,
            bask:[],
            id:Object.keys(obj).length
        };
        state.user = [ ...obj, newUser ];
        },
        addItem:(state,{payload})=>{
        const {id,name,price,src,color,bask}:pay1 = payload;
        if (typeof id=='number'&&bask){
            const newItem:bask = {
                name:name,
                price:price,
                src:src,
                color:color
            }
          state.user[id].bask = [...bask, newItem];
          };
        },
        delItem:(state,{payload})=>{
         const {id,index,bask}:pay2 = payload;
         const newBask:bask[] = bask.filter(
         (_:bask,i:number):boolean=>i!==index);
         state.user[id].bask = [...newBask];
        },
    }
})
export const action1 = slice.actions
export default slice.reducer