const initialState = true;

const insuranceStatus = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE": return action.payload;
        default: return state;
    }
}

export default insuranceStatus;