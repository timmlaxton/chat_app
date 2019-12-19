import React from 'react'

export const CTX = React.createContext();

/*

*/

const initState = {
  general: [
    {from: 'tim', msg: 'hi'},
    {from: 'jim', msg: 'hi'},
    {from: 'tom', msg: 'hi'}
  ],
  topic2: [
    {from: 'tim', msg: 'hi'},
    {from: 'tim', msg: 'hi'},
    {from: 'tim', msg: 'hi'}
  ]
}

function reducer(state, action) {
  const {from, msg, topic} = action.payload;
  switch(action.type) {
  case 'RECEIVE_MESSAGE':
    return {
        ...state,
        [topic]: [
          ...state[topic],
            {from, msg}
        ]
      }
    default:
      return state
  }
}

export default function Store(props) {

    const reducerHook = React.useReducer(reducer, initState);

return (
  <CTX.Provider value={reducerHook}>
      {props.children}
    </CTX.Provider>
  )
}
