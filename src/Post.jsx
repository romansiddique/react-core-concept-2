import './App.css'
export default function Post({post}){
  const {id , title , body} = post;
  return(
    <div key={id} className="card-under">
      <h2>Title : {title}</h2>
      <h2>Body : {body}</h2>
    </div>
  )
}