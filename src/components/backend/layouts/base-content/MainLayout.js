
// Footer Components

import Footer from '../footer/Footer';
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import CommonModals from "../modals/CommonModals";


const MainLayout = (props) => {
    return (
        <>
            <div id="page-container" className="sidebar-o sidebar-dark enable-page-overlay side-scroll page-header-fixed">
                {/* Include Header */}

                <Sidebar />
                <Header />

                {/* Include Additional Props */}
                <main id="main-container">
                    {props.children && props.children }
                </main>

                {/* Include Footer */}
                <Footer />
                <CommonModals />

            </div>

        </>
    );
}

export default MainLayout;