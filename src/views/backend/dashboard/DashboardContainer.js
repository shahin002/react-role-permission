import React from 'react';
import MainLayout from '../../../components/backend/layouts/base-content/MainLayout';
import Dashboard from "../../../components/backend/dashboard/Dashboard";

const DashboardContainer = () => {
    return (
        <MainLayout>
            <Dashboard/>
        </MainLayout>
    );
}

export default DashboardContainer;