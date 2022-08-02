import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
export default function Story() {
  const { id } = useParams();
  const [post, setPosts] = useState(null);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [id]);
  return (
    <div>
      {post && (
        <>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </>
      )}
    </div>

  );
}