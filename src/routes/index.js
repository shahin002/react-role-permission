import LoginContainer from "../views/backend/auth/LoginContainer";
import DashboardContainer from "../views/backend/dashboard/DashboardContainer";

const routes = [
    {
        path: "/",
        name: "Login Component",
        component: LoginContainer,
        exact: true,
    },
    {
        path: "/dashboard",
        name: "Dashboard Component",
        component: DashboardContainer,
        exact: true,
    },
]

export default routes;