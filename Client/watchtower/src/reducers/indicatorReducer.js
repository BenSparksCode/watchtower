
const initialState = {
    name: "",
    title: "",
    status: "none",
    description: "",
    graphicType: null,
    graphicData: {},
}

const indicator = (state = initialState, action) => {

    switch (action.type) {
        case "SET_INDICATOR_DATA":
            return {
                ...state,
                name: action.payload.name,
                title: action.payload.title,
                status: action.payload.status,
                description: action.payload.description,
            }

        //API Experiments
        case "GET_API_DATA_STARTED":
            console.log("API get request STARTED")
            return state

        case "GET_API_DATA_SUCCESS":
            console.log("API get request SUCCEDED!!!!")
            console.log(action.payload)
            return state

        case "GET_API_DATA_FAILURE":
            console.log("API get request FAILED")
            console.log(action.payload)
            return state

        default:
            return state
    }

}

export default indicator