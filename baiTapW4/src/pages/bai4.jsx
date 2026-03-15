import { useState, useEffect } from "react";
import React from "react";

function Bai4() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        setError("Không thể tải dữ liệu: ", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);
  const fP = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div>
      Bai4
      <input
        type="text"
        placeholder="nhập tiêu đề muốn tìm"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {loading && <p>Đang tải...</p>}
      {error && !loading && <p>{error}</p>}
      {!loading && !error && (
        <div>
          <p>{fP.length} bài viết được tìm thấy</p>
          <ul>
            {fP.map((post) => (
              <li key={post.id}>
                <h3>{post.title}</h3>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Bai4;
