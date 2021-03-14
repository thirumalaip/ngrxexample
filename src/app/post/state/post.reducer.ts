import { createReducer } from "@ngrx/store"
import { initialState } from "./post.state"


const _postReducer = createReducer(initialState)

export function postReducer(state, action) {
    return _postReducer(state, action)
}