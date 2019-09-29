const initialState = {
    indicatorSelected: null
}

const sideNav = (state = initialState, action) => {

    switch(action.type){
        case "SET_INDICATOR_SELECTED":
            return { ...state, indicatorSelected: action.payload.name }

        default:
            return state
    }
}

export default sideNav