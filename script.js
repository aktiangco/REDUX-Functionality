// DOM elements
const valueEl = document.getElementById('value')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const addFiveBtn = document.getElementById('addFive')
const minusFiveBtn = document.getElementById('minusFive')
const oddBtn = document.getElementById('odd')
const asyncBtn = document.getElementById('async')
const customBtn = document.getElementById('custom')

// initial state value
const initialState = {
    value: 0
}

// reducer
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'counter/incremented':
            return { value: state.value + 1 }
        case 'counter/decremented':
            return { value: state.value - 1 }
        case 'counter/custom':
            return {value: state.value + action.payload}
            default:
              return state
            }
          }
          
// establishing dispatch functions
const addOne = () => {
  store.dispatch(addAction)
}
const subOne = () => {
  store.dispatch(subAction)
}
const addFive = () => {
  store.dispatch(addFiveAction)
}
const subFive = () => {
  store.dispatch(subFiveAction)
}
// action object definitions
const addAction = {
  type: 'counter/incremented'
}

const subAction = {
  type: 'counter/decremented'
}
const addFiveAction = {
  type: 'counter/custom',
  payload: 5
}
const subFiveAction = {
  type: 'counter/custom',
  payload: -5
}

const oddAction = () => {
  if(store.getState().value % 2 !== 0) {
    store.dispatch({type: 'counter/incremented'})
}
}
const asyncAction = () => {
  setTimeout(() => {
      store.dispatch({type: 'counter/incremented'})
  }, 1000)
}
const customAction = () => {
  let payload = Number(document.getElementById('userInput').value)
  store.dispatch({
      type: 'counter/custom',
      payload: payload
  })
}


// generating the store
let store = Redux.createStore(counterReducer)

// defining render
const render = () => {
    const state = store.getState()
    valueEl.innerHTML = state.value.toString()
}


// event listeners
plusBtn.addEventListener('click', addOne)
minusBtn.addEventListener('click', subOne)
addFiveBtn.addEventListener('click', addFive)
minusFiveBtn.addEventListener('click', subFive)
oddBtn.addEventListener('click', oddAction)
asyncBtn.addEventListener('click', asyncAction)
customBtn.addEventListener('click', customAction)

// initial render
render()

// subscribe reruns render on dispatch
store.subscribe(render)