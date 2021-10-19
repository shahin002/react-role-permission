import * as Types from "../Types";

// Initial state
const initialState = {
    isLoggedIn: false,
    authUserData: {},
    loginMessage: "",
    registerMessage: "",
    isLoading: false,
    submitLogout: false
};

const AuthReducer = (state = initialState, action) => {
    const newState = {...state};

    switch (action.type) {
        case Types.AUTH_LOGIN_CHECK:
            return {
                ...state,
                isLoggedIn: action.payload.status,
                authUserData: action.payload.userData,
                loginMessage: action.payload.message,
                isLoading: action.payload.isLoading
            };


        case Types.AUTH_REGISTER_SUBMIT:
            return {
                ...state,
                isLoggedIn: action.payload.status,
                authUserData: action.payload.userData,
                registerMessage: action.payload.message,
                isLoading: action.payload.isLoading
            };

        case Types.GET_AUTH_DATA:

            return {
                ...state,
                isLoggedIn: action.payload.status,
                authUserData: action.payload.userData,
            };

        case Types.LOGOUT_AUTH:
            return {
                ...state,
                isLoggedIn: action.payload.status,
                authUserData: action.payload.userData,
                submitLogout: true
            };


        default:
            break;
    }
    return newState;
};

export default AuthReducer;
