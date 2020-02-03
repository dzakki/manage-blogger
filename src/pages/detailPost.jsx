import React, { useState, useEffect } from 'react';

export default function ({match}) {
    const [post, setPost] = useState({})
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`)
            .then(res => res.json())
            .then(post => {
                setPost(post)
            })
        return setPost({})    
    }, [match.params.id]);

    return (
        <>
            <div className="row" >
                <div className="col-8">
                    <h1 
                        style={{fontSize: '40px', lineHeight: '48px', fontWeight: '400'}}
                        >
                        {post.title}
                    </h1>
                    <hr/>
                    <article>
                        {post.body}
                    </article>
                </div>
            </div>
        </>
    )
}