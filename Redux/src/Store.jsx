import { createStore } from "redux"

const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";

const initialState =  {
    task:[]
}

export const taskReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TASK: 
        return{
            ...state, 
            task:[...state.task, action.payload]
        }

        case DELETE_TASK:
            // eslint-disable-next-line no-case-declarations
            const updatedTask = state.task.filter((currTask, index) => {
                return index !== action.payload
            })

            return{
                task:updatedTask,
            }

        default:
            return state
    }
}   

export const store = createStore(taskReducer)

// console.log(store);

console.log("initial State:", store.getState());

store.dispatch({type:ADD_TASK, payload:"First Taks using Redux"})
store.dispatch({type:ADD_TASK, payload:"Second Taks using Redux"})
console.log(store.getState());

store.dispatch({type:DELETE_TASK, payload:1})
console.log(store.getState());

export const addTask = (data) => {
    return {type: ADD_TASK, payload:data}
}

export const deleteTask = (id) => {
    return {type:DELETE_TASK, payload:id}
}