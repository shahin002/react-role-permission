import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {Link, useParams, withRouter} from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";
import {
    refreshUserPayloads, getPermissionsAction, getRolesAction,
    getUserDetailAction,
    handleChangeUserInput,
    userUpdateAction
} from '../../../redux/backend/user/UserAction';
import Select from "react-select";
import {refreshPostPayloads} from "../../../redux/backend/post/PostAction";
import LoadingSpinner from '../../shared/loading-spinner/LoadingSpinner';

const UserEdit = withRouter(({history, match}, props) => {
    const {id} = useParams();
    const {register, handleSubmit, errors, getValues, reset} = useForm();
    const dispatch = useDispatch();

    const {
        isLoading, isFormSubmitting, userUpdateMessage, userUpdateStatus, userData, all_roles, all_permissions
    } = useSelector((state) => state.user);

    const submitHandler = () => {
        dispatch(userUpdateAction(userData, userData.id));
    }

    const handleChangeTextInput = (name, value) => {
        dispatch(handleChangeUserInput(name, value));
    };

    useEffect(() => {
        dispatch(refreshUserPayloads())
        dispatch(getRolesAction());
        dispatch(getPermissionsAction());
    }, []);

    useEffect(() => {
        dispatch(getUserDetailAction(id));
    }, [all_roles, all_permissions]);

    useEffect(() => {
        if (typeof userUpdateMessage !== 'undefined' || userUpdateMessage !== null) {
            if (userUpdateStatus && userUpdateMessage.length > 0) {
                dispatch(refreshUserPayloads());
                history.push("/dashboard/users");
            }
        }
    }, [userUpdateStatus, userUpdateMessage]);

    return (
        <>
            <div className="content bg-gray-lighter">
                <div className="row items-push">
                    <div className="col-sm-8">
                        <h1 className="page-heading">
                            Edit User
                        </h1>
                    </div>
                    <div className="col-sm-4 text-right hidden-xs">
                        <ol className="breadcrumb push-10-t">
                            <li>
                                <Link to="/dashboard/users">Users</Link>
                            </li>
                            <li className="link-effect">Edit User</li>
                        </ol>
                    </div>
                </div>
            </div>

            { !isLoading &&
                <div className="content content-narrow">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block">
                                <div className="block-content block-content-narrow">
                                    <form className="form-horizontal push-10-t add-user-form"
                                        onSubmit={handleSubmit(submitHandler)}
                                        method="post" autoComplete="off">

                                        <div className="form-group">
                                            <div className="col-sm-12">
                                                <div className="form-material form-material-primary">
                                                    <label htmlFor="user-name">Name</label>
                                                    <input className="form-control"
                                                        type="text" id="user-name"
                                                        name="name"
                                                        placeholder="User Name"
                                                        required=""
                                                        aria-required="true"
                                                        ref={register({
                                                            required: 'Please give user name'
                                                        })}
                                                        onChange={(e) => handleChangeTextInput('name', e.target.value)}
                                                        value={userData.name}
                                                    />
                                                    {
                                                        errors.name &&
                                                        <div className="text-danger text-sm">{errors.name.message}</div>
                                                    }
                                                </div>

                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-sm-12">
                                                <div className="form-material form-material-primary">
                                                    <label htmlFor="user-email">Email</label>
                                                    <input className="form-control"
                                                        type="email" id="user-email"
                                                        name="email"
                                                        placeholder="User Email"
                                                        required=""
                                                        aria-required="true"
                                                        ref={register({
                                                            required: 'Please give user email',
                                                            maxLength: 30
                                                        })}
                                                        onChange={(e) => handleChangeTextInput('email', e.target.value)}
                                                        value={userData.email}
                                                    />
                                                    {
                                                        errors.email &&
                                                        <div
                                                            className="text-danger text-sm">{errors.email.message}</div>
                                                    }
                                                </div>

                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="col-sm-12">
                                                <div className="form-material">
                                                    <label htmlFor="roles">Select Role</label>
                                                    <Select
                                                        defaultValue={userData.old_roles}
                                                        isMulti
                                                        getOptionLabel={option => option.display_name}
                                                        getOptionValue={option => option.id}
                                                        options={all_roles}
                                                        onChange={(e) => handleChangeTextInput('roles', e.map(each => each.id))}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-sm-12">
                                                <div className="form-material">
                                                    <label htmlFor="permissions">Select Extra Permissions</label>
                                                    <Select
                                                        defaultValue={userData.extra_permissions}
                                                        isMulti
                                                        getOptionLabel={option => option.display_name}
                                                        getOptionValue={option => option.id}
                                                        options={all_permissions}
                                                        onChange={(e) => handleChangeTextInput('permissions', e.map(each => each.id))}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="col-sm-9">
                                                {
                                                    !isFormSubmitting &&
                                                    <button className="btn btn-sm btn-primary" type="submit">
                                                        Submit
                                                    </button>
                                                }
                                                {
                                                    isFormSubmitting &&
                                                    <button className="btn btn-sm btn-primary" type="button" disabled>
                                                        Submitting ...
                                                    </button>
                                                }
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

            { isLoading && <LoadingSpinner type="full" message="Loading User Details..." /> }
        </>
    );
})

export default UserEdit;
