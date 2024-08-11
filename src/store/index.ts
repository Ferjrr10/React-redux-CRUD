import { configureStore, Middleware } from "@reduxjs/toolkit";
import  usersReducer  from './users/slice';
import { Toaster, toast } from "sonner";

const syncWithDataBase: Middleware = store => next => action =>{

    const {type, payload} = action

    console.log({action, state: store.getState()})
    next(action)
    if (type == 'users/deleteUserById') {
        fetch(`https://jsonplaceholder.typicode.com/users/${payload}`, {
            method: 'DELETE'
        })
        .then(res=>{
            if (res.ok) toast.success(`usuario ${payload} guardado correctamente`)
        })
        .catch(()=>{
            console.log('error')
        })
    }
    console.log(store.getState())
}

const persistanceMiddleware = (store) =>(next)=>(action)=>{
    console.log(store.getState())
    console.log(action)
    next(action);
    
    localStorage.setItem("__redux__", JSON.stringify(store.getState()))
  
  }

export const store = configureStore({
reducer: {
    users: usersReducer,
},
middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(persistanceMiddleware, syncWithDataBase),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


