const clone = require('clone')


function reducer(state, action) {
  const newState = clone(state)
  switch(action.type){
    case 'INIT':
      return newState
    case ''
    default:
      return newState
  }
}

module.exports = reducer
