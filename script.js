// DOM elements
const valueEl = document.getElementById('value')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const addFiveBtn = document.getElementById('addFive')
const minusFiveBtn = document.getElementById('minusFive')
const ifOddBtn = document.getElementById('ifOdd')
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




// generating the store
let store = Redux.createStore(counterReducer)

// defining render
const render = () => {
    const state = store.getState()
    valueEl.innerHTML = state.value.toString()
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

// event listeners
plusBtn.addEventListener('click', addOne)
minusBtn.addEventListener('click', subOne)
addFiveBtn.addEventListener('click', addFive)
minusFiveBtn.addEventListener('click', subFive)

// initial render
render()

// subscribe reruns render on dispatch
store.subscribe(render)