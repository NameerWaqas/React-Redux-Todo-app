import * as  actionTypes from "./actionType";

export const AddTodo = (todo) =>({
type:actionTypes.ADD,
payload:todo
});
export const DeleteTodo = (id)=>({
    type:actionTypes.DELETE,
    payload:id
});
export const UpdateTodo = (id,todo)=>({
    type:actionTypes.UPDATE,
    payload:{
        id,
        todo
    }
})