const initialState={
  name: '',
  email: '',
  username: '',
  password: '',
  busy: false,
  isLoggedIn: false,
  isSignedUp: false
}

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case 'SIGN_IN_REQUEST':
      return Object.assign({}, state, { busy: true })
    case 'SIGN_IN_SUCCESS': {
      const { username } = action.payload
      return Object.assign({}, state, { username, busy: false, isLoggedIn: true })
    }
    case 'SIGN_IN_FAIL':
      return initialState
    case 'SIGN_OUT':
      return initialState
    case 'SIGN_UP_REQUEST':
      return Object.assign({}, state, { busy: true })
    case 'SIGN_UP_SUCCESS': {

    }
    case 'SIGN_UP_FAIL':
      return initialState
  }

  return state
}