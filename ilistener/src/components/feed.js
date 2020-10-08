import React from 'react';
import Post from './post';
import '../App.css';

function Feed(props) {
    return (
        <div className={"feed"}>
            {props.posts.map(post => (
                <Post 
                    isOffensive={post.containsBadWords}
                    content={post.content}
                    title={post.title}
                    id={post.id}
                />
            ))}
        </div>
    );
}

export default Feed;