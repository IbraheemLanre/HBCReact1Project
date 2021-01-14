import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SinglePost = () => {
  const [post, setPost] = useState();
  let { id } = useParams();

  useEffect(() => {
    if (!post) {
      axios
        .get("http://localhost:3001/posts/" + id)
        .then((res) => setPost(res.data));
    }
  });

  let postData = undefined;

  if (id) {
    postData = <h1>Loading...</h1>;
  }

  if (post) {
    postData = (
      <div>
        <p>
          {post.title} {post.author}
        </p>
        <p>{post.desc}</p>
      </div>
    );
  }
  return postData;
};

export default SinglePost;
