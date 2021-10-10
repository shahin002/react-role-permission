import React from 'react';
import PostList from "../../../components/backend/post/PostList";
import MainLayout from "../../../components/backend/layouts/base-content/MainLayout";

function PostListContainer(props) {
    return (
        <MainLayout>
            <PostList />
        </MainLayout>
    );
}

export default PostListContainer;