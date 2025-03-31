import { use } from "react"

export default function Posts({fetchPosts}){
  const posts = use(fetchPosts)
  return(
    <>
      <div className="card">
      <h1>Users Posts List</h1>
      <div>
        {
          posts.map(post => 
            <div key={post.id} className="card-under">
              <h2>Title : {post.title}</h2>
              <h2>Body : {post.body}</h2>
            </div>
          )
        }
      </div>
    </div>
    </>
  )
}