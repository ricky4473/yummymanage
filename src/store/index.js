import {configureStore} from '@reduxjs/toolkit'
import testReducer from './modules/testStore'

const store =configureStore({

    reducer:{
        test:testReducer
    }
})

export default store