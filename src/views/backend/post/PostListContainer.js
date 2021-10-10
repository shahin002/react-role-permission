import React from 'react';
import PostList from "../../../components/backend/post/PostList";
import MainLayout from "../../../components/backend/layouts/base-content/MainLayout";
import {Link} from "react-router-dom";

function PostListContainer(props) {
    return (
        <MainLayout>
            <>
                <div className="block">
                    <div className="block-content">
                        <div className="block-header">
                            <h3 className="block-title col-md-6">Post List</h3>
                            <Link to="/dashboard/posts/create" className="pull-right btn btn-primary btn-rounded">Add
                                Post
                            </Link>
                        </div>

                        <PostList />
                    </div>
                </div>
            </>
        </MainLayout>
    );
}

export default PostListContainer;