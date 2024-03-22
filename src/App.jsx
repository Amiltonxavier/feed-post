import { Header } from "./components/Header";
import "./index.css"
import styled from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import { MOCKUP } from "./mockup";

function App() {

  return (
    <>
      <Header />
      <div className={styled.wrapper}>
        <Sidebar />
        <main>
          {
            MOCKUP.posts.map((post) => {
              return <Post key={post} author={post.author} content={post.content} publishedAt={post.publishedAt} />
            })
            
          }
        </main>
      </div>
    </>
  )
}

export default App
