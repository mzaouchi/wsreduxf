import { ADDTEXT, DECREMENT, HANDLESHOW, INCREMENT } from "./ActionTypes"

const initialState={
    count : 0,
    textP : '',
    show : false
}

const Reducer=(state= initialState,action)=>{
    switch (action.type) {
        case HANDLESHOW : return {...state,show : !state.show}
        case ADDTEXT : return {...state,textP : action.payload}
        case INCREMENT : return {...state,count : state.count + 1}
        case DECREMENT : return {...state,count : state.count>0  ? state.count - 1 : 0}
        default: return state
    }
}


export default Reducer