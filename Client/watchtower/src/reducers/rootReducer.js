const initialState = {
    darkMode: false,
}

const root = (state = initialState, action) => {

    switch (action.type) {
        case "TEMP":
            //just a temporary action, none defined yet
            return state

        default:
            return state
    }

}

export default root