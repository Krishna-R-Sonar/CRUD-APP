const initialState = {
    items: []
};

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {...state, items: [...state.items, action.payload]};
            break;
        case 'DELETE_ITEM':
            return {...state, items: state.items.filter(item => item.id !== action.payload)};
        case 'UPDATE_ITEM':
            return {
                ...state,
                items: state.items.map(item => (item.id === action.payload.id ? action.payload : item))
            };    
        default:
            return state;
    }
};

export default itemReducer;