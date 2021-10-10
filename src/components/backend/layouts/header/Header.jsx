import React, {useEffect, useMemo} from 'react'
import UserHeaderInfo from "./UserHeaderInfo";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logoutAuthenticatedUser} from "../../../../redux/backend/auth/AuthAction";

const Header = () => {
    const dispatch=useDispatch();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const submitLogout = useSelector((state) => state.auth.submitLogout);

    const logout = () => {
        dispatch(logoutAuthenticatedUser());
    }

    useEffect(() => {
        if(!isLoggedIn && submitLogout){
            window.location.href="/";
        }
    }, [isLoggedIn, submitLogout]);
    return (
        <>
            <header id="page-header">
                <div className="content-header">
                    <div className="d-flex align-items-center">
                        <button type="button" className="btn btn-sm btn-dual mr-2 d-lg-none" data-toggle="layout" data-action="sidebar_toggle">
                            <i className="fa fa-fw fa-bars"></i>
                        </button>

                        <button type="button" className="btn btn-sm btn-dual mr-2 d-none d-lg-inline-block" data-toggle="layout" data-action="sidebar_mini_toggle">
                            <i className="fa fa-fw fa-ellipsis-v"></i>
                        </button>

                        <button type="button" className="btn btn-sm btn-dual d-sm-none" data-toggle="layout" data-action="header_search_on">
                            <i className="si si-magnifier"></i>
                        </button>

                    </div>

                    <div className="d-flex align-items-center">
                        <div className="dropdown d-inline-block ml-2">
                            <button type="button" className="btn btn-sm btn-dual" id="page-header-user-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <UserHeaderInfo isAvatar={true} isName={true}/>
                                <i className="fa fa-fw fa-angle-down d-none d-sm-inline-block"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right p-0 border-0 font-size-sm" aria-labelledby="page-header-user-dropdown">
                                <div className="p-3 text-center bg-primary">
                                    <img className="img-avatar img-avatar48 img-avatar-thumb" src="assets/media/avatars/avatar10.jpg" alt="" />
                                </div>
                                <div className="p-2">
                                    <h5 className="dropdown-header text-uppercase">User Options</h5>

                                    <Link to="#" className="dropdown-item d-flex align-items-center justify-content-between" onClick={() => logout()}>
                                        <span>Log Out</span>
                                        <i className="si si-logout ml-1"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>


                {/*<div id="page-header-loader" className="overlay-header bg-white">
                    <div className="content-header">
                        <div className="w-100 text-center">
                            <i className="fa fa-fw fa-circle-notch fa-spin"></i>
                        </div>
                    </div>
                </div>*/}
            </header>
        </>
    );
}

export default Header;