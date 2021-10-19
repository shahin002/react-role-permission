import React, {useEffect} from "react";
import Footer from '../footer/Footer';
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import CommonModals from "../modals/CommonModals";
import {getAuthenticatedProfileInformationAction} from "../../../../redux/backend/auth/AuthAction";
import {useDispatch} from "react-redux";


const MainLayout = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAuthenticatedProfileInformationAction());
    }, []);
    return (
        <>
            <div id="page-container"
                 className="sidebar-o sidebar-dark enable-page-overlay side-scroll page-header-fixed">
                <Sidebar/>
                <Header/>
                <main id="main-container">
                    {props.children && props.children}
                </main>

                <Footer/>
                <CommonModals/>

            </div>

        </>
    );
}

export default MainLayout;