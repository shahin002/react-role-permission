import React from 'react';
import {useSelector} from "react-redux";

const UserHeaderInfo = (props) => {
    const authUserData = useSelector((state) => state.auth.authUserData);
    const {isName, isAvatar} = props;

    return (
        <>
            {
                typeof authUserData != 'undefined' && authUserData != null &&
                (
                    <>

                        {
                            isAvatar && isAvatar === true &&
                            <img className="rounded" src="/assets/media/avatars/avatar10.jpg" alt="Header Avatar"
                                 style={{width: 18}}/>
                        }

                        {
                            isName && isName === true &&
                            <span className="d-none d-sm-inline-block ml-1">
                            {authUserData.name}
                        </span>
                        }
                    </>
                )
            }

        </>
    );
}

export default UserHeaderInfo;