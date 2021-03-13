import { createReducer, on } from "@ngrx/store"

import { changechannel, customIncrement, decrement, increment, reset } from "./counter.action";
import { initialState } from "./counter.state";


const _counterReducer = createReducer(
    initialState,
    on(increment, (state)=>{
        return {
            ...state,
            counternum: state.counternum +1
        }
    }),
    on(decrement, (state) => {
        return {
            ...state,
            counternum: state.counternum -1
        }
    }),
    on(reset, (state)=> {
        return {
            ...state,
            counternum:0
        }
    }),
    on(customIncrement, (state, action) => {
        console.log(action)
        return {
            ...state,
            counternum: state.counternum + action.value
        }
    }),
    on(changechannel, (state) => {
        return {
            ...state,
            text: "Thiru channel"
        }
    })
);
export function counterReducer(state, action) {
    return _counterReducer(state, action)
}