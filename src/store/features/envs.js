import { createSlice } from '@reduxjs/toolkit'

export const envsSlice = createSlice({
    name: 'counter',
    initialState: {
      value: [],
    },
    reducers: {
      addEnv: (state, props) => {

        console.log(state, props.payload)
        state.value.push(props.payload)
      },
      removeEnv: (state, index) => {
        state.value.splice(index)
      },
      updateNome: (state, props) =>{
        state.value[props.payload.index].nome = props.payload.nome
      },
      updatecaURL: (state, props) =>{
        state.value[props.payload.index].caURL = props.payload.caURL
      },
      updateCPURL: (state, props) =>{
        state.value[props.payload.index].CPURL = props.payload.CPURL
      },
      updatecaUser: (state, props) =>{
        state.value[props.payload.index].caUser = props.payload.caUser
      },
      updatecaPassword: (state, props) =>{
        state.value[props.payload.index].caPassword = props.payload.caPassword
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { addEnv, removeEnv, updateNome, updateCPURL, updatecaPassword, updatecaURL, updatecaUser } = envsSlice.actions
  
  export default envsSlice.reducer