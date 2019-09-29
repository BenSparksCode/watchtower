import axios from 'axios'

//API EXPERIMENTS
export const getApiData = (data) => {
    //data = {} 
    return dispatch => {
        dispatch(getApiDataStarted());

        axios
        .get("https://api.tradingeconomics.com/historical/country/united%20states/indicator/gdp?c=guest:guest&format=json")
        .then(res => {
            console.log("RES in getApiData: ",res)
            dispatch(getApiDataSuccess(res.data))
        })
        .catch(err => {
            console.log("ERR in getApiData: ",err)
            dispatch(getApiDataFailure(err.message))
        })
    }
}

const getApiDataStarted = () => ({
    type: "GET_API_DATA_STARTED"
});

const getApiDataSuccess = data => ({
    type: "GET_API_DATA_SUCCESS",
    payload: data
});

const getApiDataFailure = error => ({
    type: "GET_API_DATA_FAILURE",
    payload: {
        error: error
    }
});







//---INDICATOR---
export const setIndicatorData = (data) => {
    //data = {name, title, status, description} 
    return {
        type: "SET_INDICATOR_DATA",
        payload: data
    }
}





//---SIDE NAV---
export const setIndicatorSelected = (data) => {
    //data = {name} <- indicator_name
    return {
        type: "SET_INDICATOR_SELECTED",
        payload: data
    }
}