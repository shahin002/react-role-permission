import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {withRouter} from "react-router-dom";
import {storePostAction} from "../../../redux/backend/post/PostAction";

const PostCreate = withRouter(({history, props}) => {
    const {register, handleSubmit, errors, getValues,reset} = useForm();
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.post.isLoading);
    const postAddMessage = useSelector((state) => state.post.postAddMessage);
    const postAddStatus = useSelector((state) => state.post.postAddStatus);

    const submitHandler = (data) => {
        dispatch(storePostAction(data));
    }
    useEffect(() => {
        if (typeof postAddMessage !== 'undefined' || postAddMessage !== null) {
            if (postAddStatus && postAddMessage.length > 0) {
                // history.push("/posts");
                // We can push to list OR, make feilds empty.
                reset({
                    title: "",
                    body: ""
                });
            }
        }
    }, [postAddStatus, postAddMessage, history]);
    return (
        <>
            {/* <!-- Page Header --> */}
            <div className="content bg-gray-lighter">
                <div className="row items-push">
                    <div className="col-sm-8">
                        <h1 className="page-heading">
                            Create Post
                        </h1>
                    </div>
                    <div className="col-sm-4 text-right hidden-xs">
                        <ol className="breadcrumb push-10-t">
                            <li><a href="http://laravel07-starter.herokuapp.com/administrator/posts">Posts</a></li>
                            <li className="link-effect">Create Post</li>
                        </ol>
                    </div>
                </div>
            </div>
            {/* <!-- END Page Header --> */}

            {/* <!-- Page Content --> */}
            <div className="content content-narrow">
                <div className="row">
                    <div className="col-md-12">
                        {/* <!-- Static Labels --> */}
                        <div className="block">
                            <div className="block-content block-content-narrow">
                                <form className="form-horizontal push-10-t " onSubmit={handleSubmit(submitHandler)}
                                      method="post">
                                    <div className="form-group">
                                        <div className="col-sm-12">
                                            <div className="form-material form-material-primary">
                                                <label htmlFor="post-title">Title</label>
                                                <input className="form-control"
                                                       type="text" id="post-title"
                                                       name="title"
                                                       placeholder="Post Title"
                                                       required=""
                                                       aria-required="true"
                                                       ref={register({
                                                           required: 'Please give post title'
                                                       })}
                                                       autoComplete="name"
                                                />
                                                {
                                                    errors.title &&
                                                    <div className="text-danger text-sm">{errors.title.message}</div>
                                                }
                                            </div>

                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="col-sm-12">
                                            <div className="form-material form-material-primary">
                                                <label htmlFor="post-body">Description</label>
                                                <textarea
                                                    className="form-control"
                                                    type="text"
                                                    id="post-body"
                                                    name="body"
                                                    placeholder="Post Description"
                                                    aria-required="true"
                                                    ref={register({
                                                        required: 'Please give post description'
                                                    })}
                                                ></textarea>
                                                {
                                                    errors.body &&
                                                    <div className="text-danger text-sm">{errors.body.message}</div>
                                                }
                                            </div>

                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="col-sm-9">
                                            <button className="btn btn-sm btn-primary" type="submit">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* <!-- END Static Labels --> */}
                    </div>
                </div>
            </div>
            {/* <!-- END Page Content --> */}
        </>
    );
})

export default PostCreate;