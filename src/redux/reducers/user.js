const userState = {
    email: null
}

export const user = (state = userState , action) => {
    switch(action.type) {
        case 'STORE_USER_DATA':
            console.log(action)
            return {...state, email: action.data.email}

        case 'CLEAR_USER_DATA':
           return {}

        default:
            return state;
    }
}