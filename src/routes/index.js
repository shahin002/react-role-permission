import LoginContainer from "../views/backend/auth/LoginContainer";

const routes = [
    {
        path: "/",
        name: "Login Component",
        component: LoginContainer,
        exact: true,
    },
]

export default routes;