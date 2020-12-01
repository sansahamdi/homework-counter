// const { DECREMENT,INCREMENT } = require("../consts")
import { DECREMENT, INCREMENT } from "../consts"


const initialState={
    count:9,
}

const counterReducer=(state=initialState,action)=>{
    switch (action.type) {
        case INCREMENT:
            return {
                count : state.count + action.payload
            }
        case DECREMENT:
            return {
                count : state.count - action.payload
            }
        default: return state
    }
}

export default counterReducer