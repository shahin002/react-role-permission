import React from 'react';
import PostCreate from "../../../components/backend/post/PostCreate";
import MainLayout from "../../../components/backend/layouts/base-content/MainLayout";

function PostAddContainer(props) {
    return (
        <MainLayout>
            <PostCreate />
        </MainLayout>
    );
}

export default PostAddContainer;