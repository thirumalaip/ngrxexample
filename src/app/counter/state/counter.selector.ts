import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.state";

const getCounterState = createFeatureSelector<CounterState>('counter');

export const getCounter = createSelector(getCounterState, (state) => {
    return state.counternum
});

export const getChannel = createSelector(getCounterState, (state) => {
    return state.text
})