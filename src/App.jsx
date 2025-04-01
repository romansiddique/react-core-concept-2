import "./App.css";
import Counter from "./Count";
import Batsman from "./Batsman";
import Api from "./EmailApi";
import { Suspense } from "react";
import Posts from "./PostsApi";
import CounterApp from "./CounterApp";
import ShowHideText from "./ShowHideText";

const fetchUsers = async() =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json();
}

const fetchPosts = fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())

function App() {
  const fetchUsersPromise = fetchUsers()
  const headingStyle = {
    color: "red",
  };

  return (
    <>
      <h1 style={headingStyle}>React Core Concept Part - 2</h1>
      <Counter></Counter>
      <Batsman></Batsman>
      <Suspense fallback={<p>Users Email is Loading</p>}>
        <Api fetchUsersPromise = {fetchUsersPromise}></Api>
      </Suspense>
      <CounterApp></CounterApp>
      <ShowHideText></ShowHideText>
      <Suspense fallback = {<h2>Users Posts is loading</h2>}>
        <Posts fetchPosts = {fetchPosts}></Posts>
      </Suspense>
    </>
  );
}
export default App;
