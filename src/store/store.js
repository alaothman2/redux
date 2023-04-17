import { configureStore } from '@reduxjs/toolkit'
import itemSlice from './item'
export default configureStore({
  reducer: {
    item : itemSlice
  }
})