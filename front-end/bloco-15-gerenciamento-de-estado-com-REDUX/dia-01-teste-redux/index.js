const Redux = require('redux');

const actionCreate = (email) => ({
    type: 'LOGIN',
    email,
})

const ESTADOINICIAL = {
    login: false,
    email: '',
};

const reducer = (state = ESTADOINICIAL, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {
                ...state,
                login: !state.login,
                email: action.email,
            };
            default:
                return state;

        }
    };
    

const store = Redux.createStore(reducer);

store.dispatch(actionCreate('alex@hotmail.com'));

console.log(store.getState());
