import { createSlice } from "@reduxjs/toolkit";

const itemSlice =createSlice ({
    name: "item",
    initialState :{
        items : []
    },
    reducers : {
        addItem:(state , action) => {
            state.items.push(action.payload)
            console.log(action.payload)
        },
        deleteItem:(state , action) =>{
            state.items = state.items.filter( item => item.id !== action.payload  ) 
        },
        editItem : (state , action) => {
            state.items.map((item) => 
             (item.id === action.payload.id ?  (item.title = action.payload.title)  &&  (item.desc = action.payload.desc) : "404"  )) 
        }
    }
})


export const { addItem,deleteItem, editItem} =  itemSlice.actions;
export default itemSlice.reducer;