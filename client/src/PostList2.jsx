import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getPosts } from './api/posts'

function PostList2() {
    const postQuery = useQuery({
        queryKey: ["posts"],
        queryFn: getPosts
    })

    if(postQuery.status === "loading") return <h1>Loading...</h1>
    if(postQuery.status === "error") return <h1>{JSON.stringify(postQuery.error)}</h1>
  return (
    <div>
        <h1>PostList 2</h1>
        <ol>
            {postQuery.data.slice(1,11).map((post) => {
                return <li key={post.id}>{post.title}</li>
            })}
        </ol>
    </div>
  )
}

export default PostList2