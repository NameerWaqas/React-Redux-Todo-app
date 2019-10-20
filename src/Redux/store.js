import {createStore, combineReducers} from "redux";
import {Reducer} from "./reducer";

export const mainStore = ()=>{
    const store = createStore(
        combineReducers({
            mainState : Reducer
        })
    )
    return store;   
}