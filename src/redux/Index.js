import { createStore, applyMiddleware} from "redux";
import logger from "redux-logger";

// action const
const  increment = "increment"
const  decrement = "decrement"
const  incrementByAmount = "incrementByAmount"

//store 
//logger is a middleware which is show the prev state ,action, next state *optional
const store = createStore(reducer,applyMiddleware(logger.default))



// reducer
function reducer(state={amount:5},action) {
    switch (action.type) {
        case increment:
            // state.amount = state.amount + 1    wrong way  it is immutable
            return { amount:state.amount + 1 }

        case decrement:
            return{amount:state.amount - 1}    

        case incrementByAmount:
            return{amount:state.amount + action.payload}    
            
        default:
            return state
    }
}




// action creator
function inc() {
    return { type : increment }
    
}
function dec() {
    return { type : decrement }
    
}
function incByAmount(value) {
    return { type : incrementByAmount , payload:value }
    
}



//dispatch send the "type" to reducer it is like event like in frontend 
store.dispatch(
    // {type : 'increament'}
    // {type : 'decrement'}
    // {type : "incrementByAmount", payload:5 }
    // inc()
    incByAmount(4)

    )
    

// subscribe is like useEffect run when change in state
 store.subscribe(()=>{
     //global state
     let globalState = store.getState()
     console.log('>>>>>>>>>>>', globalState)



 })
