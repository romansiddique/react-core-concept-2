import { use } from "react"
import Post from './Post'
export default function Posts({fetchPosts}){
  const posts = use(fetchPosts)
  return(
    <>
      <div className="card">
      <h1>Users Posts List</h1>
      <div>
        {
          posts.map(post => 
            <Post post = {post}></Post>
          )
        }
      </div>
    </div>
    </>
  )
}