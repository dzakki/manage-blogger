import React, { useState, useEffect } from 'react';
import { Parser } from 'html-to-react';

import useIsLoading from '../hooks/useIsLoading';
export default function ({match}) {
    const [post, setPost] = useState(null)
    const isLoading = useIsLoading({data: post})
    const htmlParser = new Parser();
    useEffect(() => {
        const url = `${process.env.REACT_APP_BASE_URL}/posts/${match.params.id}?key=${process.env.REACT_APP_BLOGGER_KEY}`
        fetch(url)
            .then(res => res.json())
            .then(post => {
                console.log(post)
                setPost(post)
            })
        return setPost({})    
    }, [match.params.id]);

    return (
        <>  
            <div className="row" >
                <div className="col-8">
                    {
                        isLoading
                        ? (
                            <div className="d-flex justify-content-center">
                                <div className="spinner-border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        )
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
                                        alt="image-title" 
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
            </div>
        </>
    )
}