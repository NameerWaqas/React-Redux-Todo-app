import * as actionTypes from "./actionType";

export const Reducer = (
    state = { todos: ["First Todo", "Second Todo"] }
    , action) => {
    switch (action.type) {
        case actionTypes.ADD:
            state.todos = [...state.todos, action.payload]
            return { ...state, todos: state.todos };

        case actionTypes.DELETE:
            console.log(action.payload);
            const delTodo = state.todos.filter((val,ind)=> (ind!=action.payload)?val:null);            
            return { ...state, todos : delTodo};

        case actionTypes.UPDATE:
            let updTodo = state.todos.splice(action.payload.id, 0, action.payload.todo);
            return { ...state, todos: updTodo }
        default:
            return state;
    }
}

