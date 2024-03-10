import {createSlice} from '@reduxjs/toolkit'

const testStore=createSlice({
    name:'test',
    initialState:{
        count:0,
    },
    reducers:{

        add(){

        }
    }
})

const {add} =testStore.actions
const reducer=testStore.reducer

export {add}
export default reducer