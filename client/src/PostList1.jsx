import React from 'react'
import { getPosts } from './api/posts'
import { useQuery } from '@tanstack/react-query'

function PostList1() {
    const postQuery = useQuery({
        queryKey: ["posts"],
        queryFn: getPosts,
        placeholderData: [{ id: 1, title: "Initial Data" }],
        // refetchInterval: 1000,
        // staleTime: 1000
    })

    if(postQuery.status === "loading") return <h1>Loading...</h1>
    if(postQuery.status === "error") return <h1>{JSON.stringify(postQuery.error)}</h1>
  return (
    <div>
        <h1>PostList 1</h1>
        <ol>
            {postQuery.data.slice(1,11).map((post) => {
                return <li key={post.id}>{post.title}</li>
            })}
        </ol>
    </div>
  )
}

export default PostList1