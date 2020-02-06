import React from 'react';
import { Parser } from 'html-to-react';
import { Link } from "react-router-dom";
import useGetPost from '../hooks/useGetPost';

import { useSelector } from 'react-redux';
export default function ({match}) {
    const params = match.params.blogId
    const url = `${process.env.REACT_APP_BASE_URL}/${params}/posts/${match.params.id}?key=${process.env.REACT_APP_BLOGGER_KEY}`
    const post = useGetPost(url)
    const onloadPost = useSelector(state => state.post.onload_post)
    const htmlParser = new Parser();

    return (
        <>  
            <div className="row" >
                <div className="col-8">
                    {
                        onloadPost
                        ? (
                            <div className="d-flex justify-content-center">
                                <div className="spinner-border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        )
                        : !post
                            ? ''
                            : (
                                <>
                                <h1 
                                    style={{fontSize: '40px', lineHeight: '48px', fontWeight: '400'}}
                                    >
                                    {post.title}
                                </h1>
                                <div className="d-flex">
                                    <div>
                                        <img 
                                            src={post.author.image.url}
                                            className="rounded" 
                                            alt={post.author.displayName} 
                                            height="48"
                                            width="48"
                                        />
                                    </div>
                                    <div className="ml-2 p-2" style={{
                                        color: '#999999',
                                        font: 'normal normal 15px Roboto, Arial, sans-serif'
                                    }}>
                                        <div className="text-dark font-weight-lighter">{post.author.displayName}</div>
                                        <span>{post.updated}</span>
                                    </div>
                                </div>
                                <hr/>
                                <article>
                                    {htmlParser.parse(post.content)}
                                </article>
                                </>
                            )
                    }
                </div>
                <div className="col-lg-3 col-12">
                    <Link to={`/blogs/${params}/posts`}
                        type="button" 
                        className="btn btn-outline-dark btn-sm btn-block"
                        >
                        Back to posts
                    </Link>
                </div>
            </div>
        </>
    )
}