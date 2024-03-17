import {configureStore} from '@reduxjs/toolkit';
import st from './Slice'
export const Store=configureStore({
    reducer:{
        data:st
    }
}) 