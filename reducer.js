const clone = require('clone')


function reducer(state, action) {
  const newState = clone(state)
    switch(action.type){
      case 'INIT':
        return newState

      case 'GOOD_LOGIN':

        return newState

      case 'BAD_LOGIN':

        return newState

      case 'LOGOUT':
        return newState

      default:
        return newState
  }
}

module.exports = reducer

// case LOGIN:
//          const api = new loginApi; //simple version
//          api.login(action.login, action.password)
//             .done(res => {
//                //Right here ?
//             })
//             .fail(err => console.error(err));
//
//          return state;
