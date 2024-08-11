import { createSlice } from "@reduxjs/toolkit";
export interface User {
    name: string,
    email:string,
    github:string,
}

export interface userWithID extends User {
    id:number;
}

const DEFAULT_STATE = [

  {
      id: 1,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      github: "https://github.com/alicejohnson"
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob.smith@example.com",
      github: "https://github.com/bsmith"
    },
    {
      id: 3,
      name: "Carol White",
      email: "carol.white@example.com",
      github: "https://github.com/carolwhite"
    },
    {
      id: 4,
      name: "David Brown",
      email: "david.brown@example.com",
      github: "https://github.com/dbrown"
    },
    {
      id: 5,
      name: "Eva Green",
      email: "eva.green@example.com",
      github: "https://github.com/evagreen"
    }

  
]


const initialState: userWithID[] =(()=>{ 
  const newState = localStorage.getItem("__redux__")
  if (newState) {
    return JSON.parse(newState).users;
  }

  return DEFAULT_STATE;
})()



export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{
        addNewUser:(state, action)=>{
        const id =crypto.randomUUID()
        return [...state, {id, ...action.payload}]
        },
        deleteUserById: (state, action) => {
            const id = action.payload;
            return state.filter((user)=>user.id !== id);

        },


    },

})

export default usersSlice.reducer;

export const {deleteUserById, addNewUser} = usersSlice.actions