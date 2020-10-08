import React from 'react';
import '../App.css';

function Feed(props) {
    return (
        <div className={"feed"}>
            {props.posts.map(post => (
                <div>post</div>
            ))}
        </div>
    );
}

export default Feed;