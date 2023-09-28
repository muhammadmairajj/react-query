import React, { useState } from "react";
import PostList1 from "./PostList1";
import PostList2 from "./PostList2";
import CreatePost from "./CreatePost";
import Post from "./Post";
import PostListPaginated from "./PostListPaginated";
import PostListInfinite from "./PostListInfinite";
import { useQueryClient } from "@tanstack/react-query";
import { getPost } from "./api/posts";

function App() {
  const [currentPage, setCurrentPage] = useState(<PostList1 />);
  const queryClient = useQueryClient();

  function onHoverPostOneLink() {
    queryClient.prefetchQuery({
      queryKey: ["posts", 1],
      queryFn: () => getPost(1)
    })
  }

  return (
    <div>
      <button onClick={() => setCurrentPage(<PostList1 />)}>
        Posts List 1
      </button>
      <button onClick={() => setCurrentPage(<PostList2 />)}>
        Posts List 2
      </button>
      <button onMouseEnter={onHoverPostOneLink} onClick={() => setCurrentPage(<Post id={1} />)}>
        First Post 
      </button>
      <button
        onClick={() =>
          setCurrentPage(<CreatePost setCurrentPage={setCurrentPage} />)
        }
      >
        New Post
      </button>
      <button onClick={() => setCurrentPage(<PostListPaginated />)}>
        Post List Paginated
      </button>
      <button onClick={() => setCurrentPage(<PostListInfinite />)}>
        Post List Infinite
      </button>
      <br />
      {currentPage}
    </div>
  );
}

export default App;
