import { use } from "react"

{/*
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => console.log(data))

      const fetchApi = async() =>{
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = res.json()
        return data
  }
*/}

export default function Api({fetchUsersPromise}){
  const users = use(fetchUsersPromise)
  return(
    <div className="card">
      <h1>Users Email</h1>
      {
        users.map(user => 
          <div key={user.id}>
            <h2>User Email : {user.email}</h2>
          </div>
        )
      }
    </div>
  )
}