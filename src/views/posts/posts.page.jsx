// react == life cycle hook contain:

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Posts() {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
          {
            method: "GET",
          }
        );
        const jsonData = await response.json();
        setPosts(jsonData)
      } catch (error) {
        console.error("Failed to submit:", error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);
  if (isLoading || !posts){
      return <h1>Loading ...</h1>
  }
//   posts.map((post) => console.log(post));
return (
  <div>
    <Link to="/">Dashboard</Link>

    {posts.map((post) => (
      <div key={post.id}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    ))}
  </div>
);

}
