import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function News() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])
  return (
    <div className="container">
      <h2 className="title">Новости</h2>
      <ul className="list-news">
        {posts.map(post => (
          <Link key={post.id} to={`/news/${post.id}`}>
            <li className="title-news">{post.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}