const initialState = []

export const cart = (state = initialState , action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            const newCart = [...state, action.item]
            return newCart

        case 'REMOVE_FROM_CART':
            const newCart2 = state.filter(item => item.id !== action.id)
            return newCart2

        default:
            return state;
    }
}