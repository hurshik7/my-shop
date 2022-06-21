import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
    name : 'user',
    initialState : { name : "Kim", age: 29},
    reducers : {
        changeName(state) {
            state.name = "Park!";
        },

        incrementAge(state, a) {
            state.age += a.payload;
        }
    }
});

export let { changeName, incrementAge } = user.actions

export default user;