import React, { useCallback } from 'react';
import Feed from '../components/feed';
import {getPosts} from '../services/postsService';
import '../App.css';

export default function HomePage(props) {
    // const loadPosts = useCallback(async () => {
    //     return await getPosts();
    // });

    const loadPosts = function() {
        return [{id: 5, title: '343', content: 'jfdf', containsBadWords: false}];
    }

    return (
        <div className={"home-page"}>
            <div style={{padding: '2em'}}>
                Write a post...
            </div>
            <Feed posts={loadPosts()}/>
        </div>
    )
}