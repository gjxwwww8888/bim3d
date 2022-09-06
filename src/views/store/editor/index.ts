import { createSlice } from "@reduxjs/toolkit"

export interface EditorState {
    idx:string;
}

const initialState:EditorState = {
    idx:'sd1'
}

export const editorSlice = createSlice({
    name:'editor',
    initialState,
    reducers:{
        changeItem:(state:EditorState, action)=>{
            state.idx = action.payload;
        },
    }
})

export const {changeItem} = editorSlice.actions;
export default editorSlice.reducer;