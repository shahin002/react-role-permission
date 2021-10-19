import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deletePostAction, getPostAction, refreshPostPayloads} from "../../../redux/backend/post/PostAction";
import Swal from 'sweetalert2';
import {Link} from "react-router-dom";

function PostList(props) {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.post.isLoading);
    const postList = useSelector((state) => state.post.postList);

    useEffect(() => {
        dispatch(getPostAction());
    }, []);

    const deletePost = (id) => {
        Swal.fire({
            title: 'Are You Sure?',
            text: 'Do you want to delete this post? ',
            icon: 'warning',
            showConfirmButton: true,
            confirmButtonText: 'Yes, Delete',
            showCancelButton: true,
            cancelButtonText: 'No'
        }).then((result) => {
            if (result.isConfirmed){
                dispatch(deletePostAction(id));
            }
        });
    }
    return (
        <>
            {
                isLoading &&
                <div>
                    <i className="fa fa-spinner"></i>
                </div>
            }
            {
                !isLoading &&
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>Sl</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        postList.map((post, index) => (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                                <td>
                                    <Link to={`/dashboard/posts/edit/${post.id}`} className="btn ">
                                        <i className="fa fa-edit text-success"></i>
                                    </Link>
                                    <button className="btn ml-1" onClick={() => deletePost(post.id)}>
                                        <i className="fa fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            }
        </>
    );
}

export default PostList;