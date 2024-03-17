
import det from './details.json'
import { createSlice } from '@reduxjs/toolkit';
export const Slice=createSlice({
    name:"sanjeev",
    initialState:{
        isAuth:false,
        arr:det.details},
    reducers:{
        update:(state,action)=>{
            state.arr=action.payload
        },
        updateAuth:(state,action)=>{
            state.isAuth=action.payload
        }

    }
    
}
);
export default Slice.reducer;
export const {update,updateAuth} =Slice.actions