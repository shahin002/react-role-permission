import LoginContainer from "../views/backend/auth/LoginContainer";
import DashboardContainer from "../views/backend/dashboard/DashboardContainer";
import RegisterContainer from "../views/backend/auth/RegisterContainer";
import PostListContainer from "../views/backend/post/PostListContainer";
import PostAddContainer from "../views/backend/post/PostAddContainer";

const routes = [
    {
        path: "/",
        name: "Login Component",
        component: LoginContainer,
        exact: true,
    },
    {
        path: "/sign-up",
        name: "Register Component",
        component: RegisterContainer,
        exact: true,
    },
    {
        path: "/dashboard",
        name: "Dashboard Component",
        component: DashboardContainer,
        exact: true,
    },


    /*** Posts Routes ***/
    {
        path: "/dashboard/posts",
        name: "Post Component",
        component: PostListContainer,
        exact: true,
    },
    {
        path: "/dashboard/posts/create",
        name: "Post Create Component",
        component: PostAddContainer,
        exact: true,
    },

]

export default routes;