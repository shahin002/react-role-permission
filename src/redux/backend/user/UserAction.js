import * as Types from "../Types";
import axios from "axios";
import {toast} from "react-toastify";
import {REFRESH_USER_PAYLOAD} from "../Types";

export const getUserAction = () => (dispatch) => {
    let data = {
        status: false,
        message: "",
        isLoading: true,
        data: [],
    };

    dispatch({type: Types.USER_LIST, payload: data});

    axios.get(`http://laravel07-starter.herokuapp.com/api/v1/user-list`)
        .then((res) => {
            const response = res.data;
            data.data = res.data.response.users;
            data.message = res.data.response.message;
            if (response.meta.status === 200) {
                data.status = true;
            } else {
                data.status = false;
            }
            data.isLoading = false;
            dispatch({type: Types.USER_LIST, payload: data});
        })
        .catch((err) => {
            data.message = err.data;
            data.isLoading = false;
            dispatch({type: Types.USER_LIST, payload: data});
        });
};

export const getUserDetailAction = (id) => (dispatch) => {
    let data = {
        status: false,
        message: "",
        isLoading: true,
        data: {},
    };

    dispatch({ type: Types.USER_SHOW, payload: data });

    axios
        .get(`http://laravel07-starter.herokuapp.com/api/v1/user-info/${id}`)
        .then((res) => {
            const {response} = res.data;
            data.data = response.user;
            data.message = response.message;
            data.isLoading = false;
            if (response.meta.status === 200) {
                data.status = true;
            } else {
                data.status = false;
            }

            dispatch({type: Types.USER_SHOW, payload: data});
        })
        .catch((err) => {
            data.message = err.data;
            data.isLoading = false;
            dispatch({type: Types.USER_SHOW, payload: data});
        });
};


export const handleChangeUserInput = (name, value) => (dispatch) => {
    let data = {
        name: name,
        value: value,
    }
    dispatch({type: Types.CHANGE_USER_INPUT, payload: data});
};

export const storeUserAction = (userData) => async (dispatch) => {
    let data = {
        status: false,
        message: "",
        isLoading: true,
    };

    dispatch({type: Types.USER_CREATE, payload: data});

    await axios
        .post(
            `http://laravel07-starter.herokuapp.com/api/v1/administrator/users/create`,
            userData
        )
        .then(async (res) => {
            const {response, meta} = res.data;
            data.message = response.message;
            if (meta.status === 200) {
                data.status = true;
                toast.success(data.message);
            } else {
                data.status = false;
                toast.error(data.message);
            }
        })
        .catch((err) => {
            data.message = err.data;
            toast.error(data.message);
        });

    data.isLoading = false;
    dispatch({type: Types.USER_CREATE, payload: data});
};

export const userUpdateAction = (userData, id) => (dispatch) => {
    let data = {
        status: false,
        message: "",
        isLoading: true,
        data: userData
    };

    dispatch({type: Types.USER_UPDATE, payload: data});

    axios.put(`http://laravel07-starter.herokuapp.com/api/v1/administrator/users/${id}`, userData)
        .then((res) => {
            const {response, meta} = res.data;
            data.data = response.user;
            data.message = response.message;
            data.isLoading = false;
            if (meta.status === 200) {
                data.status = true;
                toast.success(response.message);
            } else {
                data.status = false;
                toast.error(response.message);
            }

            dispatch({type: Types.USER_UPDATE, payload: data});

            // Re-fetch again
            dispatch(getUserDetailAction(id));
        })
        .catch((err) => {
            data.message = err.data;
            data.isLoading = false;
            toast.error(data.message);

            dispatch({type: Types.USER_UPDATE, payload: data});
        });
};

/**
 * getSingle user by id
 *
 * @param {integer} id
 */
export const getSingleUserAction = (id) => (dispatch) => {
    let data = {
        status: false,
        message: "",
        isLoading: true,
        data: [],
    };

    dispatch({type: Types.USER_SHOW, payload: data});

    axios
        .get(
            `http://laravel07-starter.herokuapp.com/api/v1/user-list/${id}`
        )
        .then(res => {
            const response = res.data;
            data.data = res.data.response.user;
            data.message = res.data.response.message;
            data.isLoading = false;
            if (response.meta.status === 200) {
                data.status = true;
            } else {
                data.status = false;
            }
            dispatch({type: Types.USER_SHOW, payload: data});
        })
        .catch((err) => {
            data.message = err.data;
            data.isLoading = false;
            dispatch({type: Types.USER_SHOW, payload: data});
        });

};

/**
 * delete user by id
 *
 * @param {integer} id
 */
export const deleteUserAction = (id) => (dispatch) => {
    let data = {
        status: false,
        message: "",
        isLoading: true,
        data: [],
    };

    dispatch({type: Types.USER_DELETE, payload: data});

    axios
        .delete(
            `http://laravel07-starter.herokuapp.com/api/v1/administrator/users/${id}`
        )
        .then(res => {
            const response = res.data;
            data.data = id;
            data.message = res.data.response.message;
            if (response.meta.status === 200) {
                data.status = true;
                toast.success(data.message);
            } else {
                data.status = false;
                toast.error(data.message);
            }

            data.isLoading = false;
            dispatch({type: Types.USER_DELETE, payload: data});
        })
        .catch((err) => {
            data.message = err.data;
            data.isLoading = false;
            dispatch({type: Types.USER_DELETE, payload: data});
        });
};


export const getRolesAction = () => (dispatch) => {
    let data = {
        isLoading: true,
        all_roles: []
    };
    dispatch({type: Types.GET_USER_ROLES, payload: data});

    axios
        .get(`http://laravel07-starter.herokuapp.com/api/v1/roles-list`)
        .then(res => {
            const response = res.data;
            data.all_roles = response.response.roles;
            data.isLoading = false;
            dispatch({type: Types.GET_USER_ROLES, payload: data});
        })
        .catch((err) => {
            data.isLoading = false;
            dispatch({type: Types.GET_USER_ROLES, payload: data});
        });
};

export const getPermissionsAction = () => (dispatch) => {
    let data = {
        isLoading: true,
        all_permissions: []
    };
    dispatch({type: Types.GET_USER_PERMISSIONS, payload: data});

    axios
        .get(`http://laravel07-starter.herokuapp.com/api/v1/permissions-list`)
        .then(res => {
            const response = res.data;
            data.all_permissions = response.response.permissions;
            data.isLoading = false;
            dispatch({type: Types.GET_USER_PERMISSIONS, payload: data});
        })
        .catch((err) => {
            data.isLoading = false;
            dispatch({type: Types.GET_USER_PERMISSIONS, payload: data});
        });
};

export const refreshUserPayloads = () => (dispatch) => {
    dispatch({ type: Types.REFRESH_USER_PAYLOAD, payload: null });
};
