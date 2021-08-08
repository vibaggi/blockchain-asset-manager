import { configureStore } from '@reduxjs/toolkit'
import envsReducer from './features/envs'

export default configureStore({
  reducer: {
    envs: envsReducer
  },
})