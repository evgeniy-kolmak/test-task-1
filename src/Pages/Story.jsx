import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
export default function Story() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPosts] = useState(null);

  const goBack = () => navigate(-1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [id]);
  return (
    <div className="container">
      <div className="story">
        {post && (
          <>
            <h3 className="story-title">{post.title}</h3>
            <p className="story-content">{post.body}</p>
          </>
        )}
        <button className="btn" onClick={() => goBack()}>Назад</button>
      </div>
    </div>

  );
}