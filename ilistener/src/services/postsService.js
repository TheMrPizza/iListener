import Post from "../models/post";

const serverUrl = "http://localhost:5000";

const getPosts = async () => {
  const res = await fetch(`${serverUrl}/posts`);
  const data = await res.json();

  const posts = data.map((post) => {
    const title = post.title;
    const message = post.message;
    const id = post.id;
    const containsBadWords = post.containsBadWords;

    return new Post(title, message, id, containsBadWords);
  });

  return posts;
};

const createPost = async (title, message) => {
  const res = await fetch(serverUrl, {
    method: 'POST',
    body: {
      title,
      message,
    },
  });

  const data = await res.json();

  const _title = data.title;
  const _message = data.message;
  const id = data.id;
  const containsBadWords = data.containsBadWords;

  return new Post(_title, _message, id, containsBadWords);
};

export { getPosts, createPost };
