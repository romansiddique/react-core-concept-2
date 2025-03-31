export default function Post({post}){
  const {title , body} = post;
  return(
    <div className="card-under">
      <h2>Title : {title}</h2>
      <h2>Body : {body}</h2>
    </div>
  )
}