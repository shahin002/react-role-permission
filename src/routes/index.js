import LoginContainer from "../views/backend/auth/LoginContainer";
import DashboardContainer from "../views/backend/dashboard/DashboardContainer";
import RegisterContainer from "../views/backend/auth/RegisterContainer";
import PostListContainer from "../views/backend/post/PostListContainer";
import PostAddContainer from "../views/backend/post/PostAddContainer";
import PostEditContainer from "../views/backend/post/PostEditContainer";
import UserListContainer from "../views/backend/user/UserListContainer";
import UserAddContainer from "../views/backend/user/UserAddContainer";
import UserEditContainer from "../views/backend/user/UserEditContainer";

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
    {
        path: "/dashboard/posts/edit/:id",
        name: "Post Edit Component",
        component: PostEditContainer,
        exact: true,
    },

    /*** Users Routes ***/
    {
        path: "/dashboard/users",
        name: "User Component",
        component: UserListContainer,
        exact: true,
    },
    {
        path: "/dashboard/users/create",
        name: "User Create Component",
        component: UserAddContainer,
        exact: true,
    },
    {
        path: "/dashboard/users/edit/:id",
        name: "User Edit Component",
        component: UserEditContainer,
        exact: true,
    },
]

export default routes;