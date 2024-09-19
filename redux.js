const redux= require('redux');
const store=redux.configureStore(reducer);

const INITIAL_VALUE = {
counter:0
}
const reducer=(store=INITIAL_VALUE,action) =>{
    return {counter: store.counter + 1};
}
const subscriber=() => {
const state=store.getState();
console.log(state);
}
store.subscribe(subscriber)
 store.dispatch ({type: 'INCREMENT'});