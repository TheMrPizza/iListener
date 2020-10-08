import React, { useCallback, useState } from 'react';
import Feed from '../components/feed';
import PostCreation from '../components/postCreation';
import {getPosts, createPost} from '../services/postsService';
import '../App.css';
import { Button, Modal } from '@material-ui/core';

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const title = 'Lorem ipsum dolor sit amet';

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }

function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `250px`,
      left: `250px`,
    };
  }

export default function HomePage(props) {
    const [isOpen, setIsOpen] = useState(false);
    // const [posts, setPosts] = useState([]);

    const loadPosts = async function() {
        return getPosts();
    }

    const submitPost = useCallback(async (title, content) => {
        // await createPost(title, content);
    }, []);

    return (
        <div className={"home-page"} style={{'padding-top': '50px'}}>
            <Modal
                open={isOpen}
                onClose={() => setIsOpen(false)}
            >
                <div style={getModalStyle()}>
                    <PostCreation submitPost={submitPost}/>
                </div>
            </Modal>
            {/* {isOpen && <Button onClick={() => setIsOpen(false)}>בטל</Button>} */}
            {!isOpen && <Button onClick={() => {setIsOpen(true)}}>צור פוסט חדש</Button>}
            {!isOpen && <Feed posts={[{content: text, title: title, id:5, containsBadWords: true}]}/>}
        </div>
    )
}