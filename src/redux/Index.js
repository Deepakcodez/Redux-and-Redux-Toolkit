import axios from "axios";
import { createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
 //thunk used in asyn function it gives fun two parameter dispatch and getstate

// action const
const  init = "init"
const  increment = "increment"
const  decrement = "decrement"
const  incrementByAmount = "incrementByAmount"

//store 
//logger is a middleware which is show the prev state ,action, next state *optional
const store = createStore(reducer,applyMiddleware(thunk,logger))



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

        case init:
            return{amount:state.amount + action.payload}    
            
        default:
            return state
    }
}





//async API call

async function initUser(dispatch,getState){
    const {data} = await axios.get("http://localhost:3000/accounts/1")
    dispatch({type:init, payload:data.amount})
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
function initialise(value) {
    return { type : init , payload:value }
    
}



//dispatch send the "type" to reducer it is like event like in frontend 
store.dispatch(
    // {type : 'increament'}
    // {type : 'decrement'}
    // {type : "incrementByAmount", payload:5 }
    // inc()
    // incByAmount(4)
    // initialise(5)
    initUser

    )
    

// subscribe is like useEffect run when change in state
 store.subscribe(()=>{
     //global state
     let globalState = store.getState()
     console.log('>>>>>>>>>>>', globalState)



 })




 //for db server:-  npm i json-server
 // json-server db.json   in terminal
