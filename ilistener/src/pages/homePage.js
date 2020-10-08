import React, { useCallback } from 'react';
import Feed from '../components/feed';
import PostCreation from '../components/postCreation';
import {getPosts, createPost} from '../services/postsService';
import '../App.css';

export default function HomePage(props) {
    // const loadPosts = useCallback(async () => {
    //     return await getPosts();
    // });

    const loadPosts = function() {
        return [{id: 5, title: '343', content: 'jfdf', containsBadWords: false}];
    }

    const submitPost = useCallback(async (title, content) => {
        await createPost(title, content);
    })

    return (
        <div className={"home-page"}>
            <PostCreation submitPost={submitPost}></PostCreation>
            <Feed posts={loadPosts()}/>
        </div>
    )
}